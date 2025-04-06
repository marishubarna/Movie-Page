import React from "react";
import "../Animation/FadeIn.css";
import { useEffect, useRef } from "react";

export default function FadeIn({ children }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    el.classList.add("show");
  }, []);

  return (
    <div className="fade-in" ref={ref}>
      {children}
    </div>
  );
}
