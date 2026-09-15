import React from 'react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-end transition-opacity duration-300">
      <div className="bg-white rounded-t-2xl p-4 sm:p-6 flex flex-col gap-4 max-h-[85vh] overflow-y-auto max-w-lg mx-auto w-full shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-[#eaedff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0050cc]">straighten</span>
            <h3 className="font-display font-bold text-lg text-[#131b2e]">
              Size & Fit Recommendations
            </h3>
          </div>
          <button
            aria-label="Close size guide"
            className="w-8 h-8 rounded-full bg-[#f2f3ff] hover:bg-[#eaedff] flex items-center justify-center text-[#131b2e] transition-colors"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <p className="text-sm text-[#44474c] leading-relaxed">
          Everbright uniform garments feature an athletic industrial taper with 2 inches of motion ease allowance. If personnel wear ballistic body vests or thermal innerwear underneath, order one size larger.
        </p>

        <div className="bg-[#f2f3ff] rounded-xl p-3">
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#131b2e] mb-2">
            Standard Measurements (Inches)
          </h4>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between py-1.5 bg-white px-3 rounded-lg shadow-xs">
              <span className="font-semibold text-[#131b2e]">Small (38)</span>
              <span className="text-[#44474c]">Chest: 38-40" | Waist: 30-32" | Length: 29"</span>
            </div>
            <div className="flex justify-between py-1.5 bg-white px-3 rounded-lg shadow-xs">
              <span className="font-semibold text-[#131b2e]">Medium (40)</span>
              <span className="text-[#44474c]">Chest: 40-42" | Waist: 32-34" | Length: 30"</span>
            </div>
            <div className="flex justify-between py-1.5 bg-[#d6e3fe] px-3 rounded-lg font-bold text-[#0e1c2f] border border-[#0050cc]/20">
              <span>Large (42) [Recommended]</span>
              <span>Chest: 42-44" | Waist: 34-36" | Length: 31"</span>
            </div>
            <div className="flex justify-between py-1.5 bg-white px-3 rounded-lg shadow-xs">
              <span className="font-semibold text-[#131b2e]">X-Large (44)</span>
              <span className="text-[#44474c]">Chest: 44-46" | Waist: 36-38" | Length: 31.5"</span>
            </div>
            <div className="flex justify-between py-1.5 bg-white px-3 rounded-lg shadow-xs">
              <span className="font-semibold text-[#131b2e]">XX-Large (46)</span>
              <span className="text-[#44474c]">Chest: 46-48" | Waist: 38-40" | Length: 32"</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-[#ffddb8]/30 rounded-xl border border-[#ffb95f]/40 flex items-start gap-2.5">
          <span className="material-symbols-outlined text-[#b87500] text-[20px] shrink-0 mt-0.5">
            verified
          </span>
          <div className="text-xs text-[#2a1700]">
            <strong className="block font-semibold">Need custom size rollouts for your fleet?</strong>
            Our fit specialists visit enterprise client campuses across metro cities for comprehensive biometric sizing sessions.
          </div>
        </div>

        <button
          className="w-full py-3 rounded-xl bg-[#0b192c] hover:bg-[#131b2e] text-white font-display text-sm font-bold shadow-md active:scale-98 transition-all"
          onClick={onClose}
        >
          Got It, Back to Product
        </button>
      </div>
    </div>
  );
};
