"use client";
import { useEffect, useState } from "react";

export function fontSize() {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const saved = localStorage.getItem("fontSize");
    if (saved) {
      setFontSize(Number(saved));
      document.documentElement.style.fontSize = saved + "px";
    }
  }, []);

  function increase() {
    const newSize = fontSize + 2;
    setFontSize(newSize);
    document.documentElement.style.fontSize = newSize + "px";
    localStorage.setItem("fontSize", newSize.toString());
  }

  function decrease() {
    if (fontSize > 10) {
      const newSize = fontSize - 2;
      setFontSize(newSize);
      document.documentElement.style.fontSize = newSize + "px";
      localStorage.setItem("fontSize", newSize.toString());
    }
  }

  return { increase, decrease };
}
