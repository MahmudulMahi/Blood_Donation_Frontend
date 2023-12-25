import React, { useEffect, useState } from "react";
import loaderGif from "../../assets/Loading.gif";

const IconLoader = () => {
  const [loading, setLoading] = useState(true);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    const text = "Welcome To Blood Donation";
    let index = 0;

    const textInterval = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(textInterval);
      }
    }, 100);

    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center h-screen bg-white ${loading ? 'visible' : 'invisible'}`}>
      <img src={loaderGif} alt="Loader" className="w-32 h-32" />
      <p className="text-brandPrimary mt-4 font-bold">
        {displayText}
      </p>
    </div>
  );
}

export default IconLoader;
