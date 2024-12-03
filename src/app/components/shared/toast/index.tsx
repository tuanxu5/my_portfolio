import { useEffect, useState } from "react";
import styles from "./index.module.scss";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    isVisible && (
      <div className={`${styles.toast}`}>
        <div
          id="toast-success"
          className="flex items-center w-full max-w-xs p-4 bg-white rounded-lg shadow"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-[#00A76F] bg-[#CCF2DC] rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          </div>
          <div className="ms-3 text-sm font-normal">{message}</div>
        </div>
      </div>
    )
  );
};

export default Toast;
