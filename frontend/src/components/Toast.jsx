import React from "react";

const Toast = ({ message, visible }) => {
  return (
    <div
      className={`fixed top-5 right-5 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 ${
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;