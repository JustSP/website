/**
 * React hooks for Brevo service
 * Provides easy-to-use hooks for sending emails and managing contacts
 */

import { useState, useCallback } from "react";
import {
  sendEmail,
  createOrUpdateContact,
  sendContactFormEmail,
  sendNewsletterConfirmation,
  subscribeToNewsletter,
  sendProjectInquiryEmail,
  BrevoEmailParams,
  BrevoContactParams,
  BrevoResponse,
  BrevoContactResponse,
} from "./brevo";

// Hook for sending emails
export function useBrevoEmail() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const send = useCallback(
    async (params: BrevoEmailParams): Promise<BrevoResponse> => {
      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const result = await sendEmail(params);
        if (result.success) {
          setSuccess(true);
        } else {
          setError(result.error || "Failed to send email");
        }
        return result;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        return { success: false, error: errorMessage };
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  return { send, loading, error, success, reset };
}

// Hook for contact form
export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = useCallback(
    async (formData: {
      name: string;
      email: string;
      subject: string;
      message: string;
    }): Promise<BrevoResponse> => {
      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const result = await sendContactFormEmail(formData);
        if (result.success) {
          setSuccess(true);
        } else {
          setError(result.error || "Failed to send message");
        }
        return result;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        return { success: false, error: errorMessage };
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  return { submit, loading, error, success, reset };
}

// Hook for newsletter subscription
export function useNewsletter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const subscribe = useCallback(
    async (email: string, name?: string): Promise<BrevoContactResponse> => {
      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        // First, add/update contact in Brevo
        const contactResult = await subscribeToNewsletter(email, name);

        if (contactResult.success) {
          // Then send confirmation email
          const emailResult = await sendNewsletterConfirmation(email);
          if (emailResult.success) {
            setSuccess(true);
            return { success: true, contactId: contactResult.contactId };
          } else {
            setError("Subscribed but failed to send confirmation email");
            return { success: false, error: emailResult.error };
          }
        } else {
          setError(contactResult.error || "Failed to subscribe");
          return contactResult;
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        return { success: false, error: errorMessage };
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  return { subscribe, loading, error, success, reset };
}

// Hook for project inquiry
export function useProjectInquiry() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = useCallback(
    async (formData: {
      name: string;
      email: string;
      company?: string;
      projectType: string;
      budget?: string;
      timeline?: string;
      message: string;
    }): Promise<BrevoResponse> => {
      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const result = await sendProjectInquiryEmail(formData);
        if (result.success) {
          setSuccess(true);
        } else {
          setError(result.error || "Failed to send inquiry");
        }
        return result;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        return { success: false, error: errorMessage };
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  return { submit, loading, error, success, reset };
}

// Hook for managing contacts
export function useBrevoContact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const createOrUpdate = useCallback(
    async (params: BrevoContactParams): Promise<BrevoContactResponse> => {
      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const result = await createOrUpdateContact(params);
        if (result.success) {
          setSuccess(true);
        } else {
          setError(result.error || "Failed to create/update contact");
        }
        return result;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        return { success: false, error: errorMessage };
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  return { createOrUpdate, loading, error, success, reset };
}

export default {
  useBrevoEmail,
  useContactForm,
  useNewsletter,
  useProjectInquiry,
  useBrevoContact,
};
