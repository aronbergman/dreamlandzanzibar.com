"use client";

import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        onClick={scrollTop}
        style={{
          display: showScroll ? "block" : "none",
        }}
        className="backtotop"
      >
        <i className="ri-upload-line"></i>
      </div>
    </>
  );
};

export default BackToTop;
