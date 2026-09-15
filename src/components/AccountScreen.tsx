import React, { useState } from 'react';

interface AccountScreenProps {
  onOpenRFQ: () => void;
  onNavigate: (tab: string) => void;
}

export const AccountScreen: React.FC<AccountScreenProps> = ({ onOpenRFQ, onNavigate }) => {
  const [activeSubTab, setActiveSubTab] = useState<'orders' | 'profile' | 'support'>('orders');

  const orders = [
    {
      id: 'EVR-892410',
      date: '12 May 2026',
      items: 'Guard Pro Heavy-Duty Security Set (20 units), Leather Duty Belts (20 units)',
      amount: 28450,
      status: 'Dispatched via Bluedart Cargo',
      tracking: 'BLU-88910482',
      gstInvoice: 'INV-2026-05-091'
    },
    {
      id: 'EVR-782194',
      date: '28 April 2026',
      items: 'Medical Scrub Suit Unisex (40 units) - SILVADUR™ Antimicrobial',
      amount: 39200,
      status: 'Delivered & Accepted',
      tracking: 'DEL-10492831',
      gstInvoice: 'INV-2026-04-188'
    }
  ];

  return (
    <div className="flex flex-col w-full pb-24 max-w-3xl mx-auto px-4 pt-3">
      {/* Profile Header */}
      <div className="bg-[#0b192c] text-white p-5 rounded-2xl shadow-xl flex items-center gap-4 mb-4 border border-white/5">
        <div className="w-14 h-14 rounded-full bg-[#0266ff] flex items-center justify-center font-display text-xl font-bold text-white shadow-md">
          FS
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="font-display font-bold text-base text-white truncate">
              Falcon Security & Logistics
            </h1>
            <span className="px-2 py-0.5 rounded-full bg-[#ffddb8] text-[#2a1700] text-[10px] font-bold uppercase font-display shrink-0">
              Corporate Account
            </span>
          </div>
          <span className="text-xs text-[#bac7e1] block mt-0.5">
            GSTIN: 27AABCU9603R1ZM • Net-30 Verified
          </span>
          <span className="text-[11px] text-[#ffb95f] mt-1 block">
            Dedicated Account Manager: Amit Saxena (+91 98765 43210)
          </span>
        </div>
      </div>

      {/* Sub-tab Navigation */}
      <div className="flex bg-[#f2f3ff] p-1 rounded-xl mb-4 text-xs font-display font-bold">
        <button
          onClick={() => setActiveSubTab('orders')}
          className={`flex-1 py-2 rounded-lg transition-all ${
            activeSubTab === 'orders'
              ? 'bg-white text-[#0050cc] shadow-xs'
              : 'text-[#44474c] hover:text-[#131b2e]'
          }`}
        >
          Orders & Consignments
        </button>
        <button
          onClick={() => setActiveSubTab('profile')}
          className={`flex-1 py-2 rounded-lg transition-all ${
            activeSubTab === 'profile'
              ? 'bg-white text-[#0050cc] shadow-xs'
              : 'text-[#44474c] hover:text-[#131b2e]'
          }`}
        >
          GST & Tax Profile
        </button>
        <button
          onClick={() => setActiveSubTab('support')}
          className={`flex-1 py-2 rounded-lg transition-all ${
            activeSubTab === 'support'
              ? 'bg-white text-[#0050cc] shadow-xs'
              : 'text-[#44474c] hover:text-[#131b2e]'
          }`}
        >
          Helpline & Sample Kits
        </button>
      </div>

      {/* Tab Content */}
      {activeSubTab === 'orders' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-bold text-sm text-[#131b2e]">Recent Dispatches</h2>
            <button
              onClick={() => onNavigate('catalog')}
              className="text-xs text-[#0050cc] hover:underline font-display font-semibold"
            >
              Order New Uniforms
            </button>
          </div>

          {orders.map((ord) => (
            <div
              key={ord.id}
              className="bg-white rounded-2xl p-4 border border-[#eaedff] shadow-xs flex flex-col gap-2.5 text-xs"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#eaedff]">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xs text-[#131b2e]">{ord.id}</span>
                  <span className="text-[#75777d]">• {ord.date}</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                  {ord.status}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-[#131b2e] font-medium leading-relaxed">{ord.items}</p>
                <div className="flex items-center justify-between text-[11px] text-[#44474c] mt-1">
                  <span>Tracking: <strong className="font-mono text-[#0050cc]">{ord.tracking}</strong></span>
                  <span>Invoice: <strong className="font-mono text-[#131b2e]">{ord.gstInvoice}</strong></span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#eaedff]">
                <span className="font-display font-bold text-sm text-[#0050cc]">
                  ₹{ord.amount.toLocaleString('en-IN')}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => alert(`Downloading GST Tax Invoice ${ord.gstInvoice} (PDF)...`)}
                    className="px-3 py-1 bg-[#f2f3ff] hover:bg-[#eaedff] text-[#131b2e] rounded-lg font-display text-xs font-bold transition-colors"
                  >
                    Tax Invoice PDF
                  </button>
                  <button
                    onClick={() => onOpenRFQ()}
                    className="px-3 py-1 bg-[#0b192c] hover:bg-[#0050cc] text-white rounded-lg font-display text-xs font-bold transition-colors"
                  >
                    Reorder Batch
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeSubTab === 'profile' && (
        <div className="bg-white rounded-2xl p-4 border border-[#eaedff] shadow-xs space-y-3 text-xs">
          <h2 className="font-display font-bold text-sm text-[#131b2e]">Institutional Tax Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-[#faf8ff] rounded-xl border border-[#eaedff]">
              <span className="text-[#75777d] block text-[11px]">Registered Legal Entity</span>
              <strong className="text-xs text-[#131b2e]">Falcon Security & Facility Management Pvt Ltd</strong>
            </div>
            <div className="p-3 bg-[#faf8ff] rounded-xl border border-[#eaedff]">
              <span className="text-[#75777d] block text-[11px]">GSTIN Number</span>
              <strong className="text-xs font-mono text-[#0050cc]">27AABCU9603R1ZM</strong>
            </div>
            <div className="p-3 bg-[#faf8ff] rounded-xl border border-[#eaedff]">
              <span className="text-[#75777d] block text-[11px]">Corporate Credit Facility</span>
              <strong className="text-xs text-emerald-700">Approved Net-30 (₹5,00,000 limit)</strong>
            </div>
            <div className="p-3 bg-[#faf8ff] rounded-xl border border-[#eaedff]">
              <span className="text-[#75777d] block text-[11px]">Billing State / Jurisdiction</span>
              <strong className="text-xs text-[#131b2e]">Maharashtra (State Code: 27)</strong>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'support' && (
        <div className="space-y-3 text-xs">
          <div className="bg-white rounded-2xl p-4 border border-[#eaedff] shadow-xs flex flex-col gap-3">
            <h2 className="font-display font-bold text-sm text-[#131b2e]">
              Direct Enterprise Desk
            </h2>
            <p className="text-[#44474c] leading-relaxed">
              Have an urgent requirement for 100+ uniforms, computerized logo digitization, or size trial sessions?
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={onOpenRFQ}
                className="flex-1 py-2.5 bg-[#0050cc] hover:bg-[#003fa4] text-white rounded-xl font-display font-bold flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">assignment</span>
                <span>Submit Volume RFQ</span>
              </button>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-display font-bold flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Enterprise Support</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
