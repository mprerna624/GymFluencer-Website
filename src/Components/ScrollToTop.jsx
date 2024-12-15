import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {
        isVisible && (
            <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-amber-500 text-white p-3 rounded-full shadow-lg hover:bg-amber-400 transition">
            <FaArrowUp />
            </button>
        )
      }
    </div>
  );
}

export default ScrollToTop;