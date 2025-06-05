import React, { useState } from "react";

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
  header: string;
  message: string;
}

const Modal = ({ onConfirm, onCancel, header, message }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg mx-auto space-y-2">
        <h1>{header}</h1>
        <div>{message}</div>
        {/* Buttons */}
        <div className="space-x-2 flex justify-end">
          <button
            className="px-6 py-2 rounded hover:text-dark_blue underline"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="ml-auto button-delete"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
