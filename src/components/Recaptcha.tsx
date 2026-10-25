import { useEffect, useImperativeHandle, useRef, useState } from "react";

type CaptchaAPI = {
  render: (element: HTMLElement, options: Record<string, unknown>) => number;
  reset: (id: number) => void;
  execute: (id: number) => void;
};
declare global {
  interface Window {
    grecaptcha?: CaptchaAPI;
    wishRecaptchaReady?: () => void;
  }
}
let pending: Promise<CaptchaAPI> | undefined;
function loadCaptcha(): Promise<CaptchaAPI> {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha);
  if (pending) return pending;
  pending = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    const timer = window.setTimeout(() => fail(), 20000);
    const fail = () => {
      window.clearTimeout(timer);
      script.remove();
      delete window.wishRecaptchaReady;
      pending = undefined;
      reject(new Error("reCAPTCHA could not load. Please reload or email connect@ww-hub.com."));
    };
    window.wishRecaptchaReady = () => {
      window.clearTimeout(timer);
      delete window.wishRecaptchaReady;
      if (window.grecaptcha) resolve(window.grecaptcha);
      else fail();
    };
    script.src = "https://www.google.com/recaptcha/api.js?onload=wishRecaptchaReady&render=explicit";
    script.async = true;
    script.defer = true;
    script.onerror = fail;
    document.head.appendChild(script);
  });
  return pending;
}

export interface RecaptchaHandle {
  execute: () => Promise<string>;
  reset: () => void;
}

export default function Recaptcha({ ref, onReady }: {
  ref: React.Ref<RecaptchaHandle>;
  onReady: (ready: boolean) => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<number | null>(null);
  const readyCallback = useRef(onReady);
  readyCallback.current = onReady;
  const attempt = useRef<{
    resolve: (token: string) => void;
    reject: (error: Error) => void;
    timer: number;
  } | null>(null);
  const [error, setError] = useState("");
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  function finish(token?: string, message = "Verification failed. Please try again.") {
    const current = attempt.current;
    if (!current) return;
    window.clearTimeout(current.timer);
    attempt.current = null;
    if (token) current.resolve(token);
    else current.reject(new Error(message));
  }

  useImperativeHandle(ref, () => ({
    execute: () => {
      const id = widget.current;
      const api = window.grecaptcha;
      if (id === null || !api) return Promise.reject(new Error("Verification is still loading. Please try again."));
      if (attempt.current) return Promise.reject(new Error("Verification is already in progress."));
      setError("");
      return new Promise<string>((resolve, reject) => {
        attempt.current = {
          resolve, reject,
          timer: window.setTimeout(() => {
            finish(undefined, "Verification timed out. Please try again.");
            api.reset(id);
          }, 120000),
        };
        try {
          api.reset(id);
          api.execute(id);
        } catch {
          finish();
        }
      });
    },
    reset: () => {
      finish(undefined, "Verification was reset. Please try again.");
      if (widget.current !== null) window.grecaptcha?.reset(widget.current);
    },
  }));

  useEffect(() => {
    readyCallback.current(false);
    if (!siteKey) return;
    let active = true;
    const target = document.createElement("div");
    container.current?.appendChild(target);
    loadCaptcha().then(api => {
      if (!active) return;
      widget.current = api.render(target, {
        sitekey: siteKey,
        size: "invisible",
        badge: "bottomright",
        callback: (token: string) => { if (active) finish(token); },
        "expired-callback": () => { if (active) finish(undefined, "Verification expired. Please try again."); },
        "error-callback": () => {
          if (!active) return;
          finish();
          setError("Verification failed to load. Please reload and try again.");
        },
      });
      readyCallback.current(true);
    }).catch((err: Error) => { if (active) setError(err.message); });
    return () => {
      active = false;
      readyCallback.current(false);
      finish(undefined, "Verification was cancelled.");
      if (widget.current !== null) window.grecaptcha?.reset(widget.current);
      widget.current = null;
      target.remove();
    };
  }, [siteKey]);
  return <div>
    <div ref={container} />
    {(!siteKey || error) && <p role="alert">{error || "The contact form is unavailable. Please email connect@ww-hub.com."}</p>}
  </div>;
}
