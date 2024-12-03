"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import Toast from "../components/shared/toast";

interface ToastContextType {
  showToast: (message: string, type: "success" | "error" | "info", duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info"; duration: number } | null>(
    null
  );

  const showToast = (message: string, type: "success" | "error" | "info", duration = 3000) => {
    setToast({ message, type, duration });
    setTimeout(() => setToast(null), duration); // Ẩn toast sau một thời gian
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Toast message={toast.message} type={toast.type} duration={toast.duration} onClose={() => setToast(null)} />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
