import React from "react";
import btnnstyles from "./Button.module.css";

export default function Button({ text, onClick }) {
  return (
    <div>
      <button
        className={btnnstyles.btnContainer}
        type="button"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
