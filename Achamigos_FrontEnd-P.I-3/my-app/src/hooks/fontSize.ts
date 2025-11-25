"use client";
import { useEffect, useState } from "react";

export function fontSize() {
  const DEFAULT_SIZE = 16;
  const MAX_SIZE = 20;
  const MIN_SIZE = 10; 

  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);

  useEffect(() => {
    const savedSize = localStorage.getItem("fontSize");
    if (savedSize) {
      const size = Number(savedSize);
      setFontSize(size);
      document.documentElement.style.fontSize = size + "px";
    }
  }, []);

  function increase() {
    if (fontSize < MAX_SIZE) {
      const newSize = fontSize + 2;
      setFontSize(newSize);
      document.documentElement.style.fontSize = newSize + "px";
      localStorage.setItem("fontSize", newSize.toString());
    }
  }

  function decrease() {
    if (fontSize > MIN_SIZE) {
      const newSize = fontSize - 2;
      setFontSize(newSize);
      document.documentElement.style.fontSize = newSize + "px";
      localStorage.setItem("fontSize", newSize.toString());
    }
  }

  return { increase, decrease };
}