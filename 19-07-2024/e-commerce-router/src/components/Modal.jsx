import { createPortal } from "react-dom";

function Modal({ children, isOpen, OnClose }) {
  return createPortal(
    <>
      {isOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center bg-slate-500/30 backdrop-blur-sm"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <button
                  onClick={OnClose}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Close
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

export default Modal;
