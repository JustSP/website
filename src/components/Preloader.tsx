import React, { useEffect, useState } from "react";

const Preloader = ({
  backgroundColor = "bg-white",
  spinnerColor = "bg-orange-red",
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      id="loading"
      className={`fixed w-full h-full ${backgroundColor} z-99999 top-0`}
    >
      <div className="relative w-full h-full">
        <div
          id="loading-center"
          className="absolute top-[50%] left-[50%] w-15 h-15 -mt-7.5 -ml-7.5"
        >
          <div
            id="object_one"
            className={`size-5 rounded-full float-left mr-5 mb-5 ${spinnerColor}`}
          ></div>
          <div
            id="object_two"
            className={`size-5 rounded-full float-left mb-5 ${spinnerColor}`}
          ></div>
          <div
            id="object_three"
            className={`size-5 rounded-full float-left mr-5 mb-5 ${spinnerColor}`}
          ></div>
          <div
            id="object_four"
            className={`size-5 rounded-full float-left mb-5 ${spinnerColor}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
