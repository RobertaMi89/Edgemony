import React from "react";

const Toast = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center p-4 mb-4 text-white bg-green-500 rounded-lg shadow-md">
      <div className="text-sm font-normal">{message}</div>
      <button
        type="button"
        className="ml-auto bg-transparent text-white hover:text-gray-700 rounded-lg focus:outline-none"
        onClick={onClose}
      >
        ✖
      </button>
    </div>
  );
};

export default Toast;
