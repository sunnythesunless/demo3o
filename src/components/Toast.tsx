import React from 'react';

interface ToastProps {
  message: string | null;
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, visible }) => {
  if (!visible || !message) return null;

  return (
    <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 transform opacity-100 translate-y-0 max-w-[90vw]">
      <div className="flex items-center gap-2 bg-[#0b192c] text-white px-4 py-2.5 rounded-full shadow-2xl border border-white/10">
        <span className="material-symbols-outlined text-[#0266ff] text-[20px]">check_circle</span>
        <span className="text-xs font-semibold tracking-wide font-display">{message}</span>
      </div>
    </div>
  );
};
