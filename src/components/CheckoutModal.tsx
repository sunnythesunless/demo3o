import React, { useState } from 'react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  onOrderComplete: (orderId: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  totalAmount,
  onOrderComplete
}) => {
  const [isCorporate, setIsCorporate] = useState(true);
  const [gstin, setGstin] = useState('27AABCU9603R1ZM');
  const [companyName, setCompanyName] = useState('Falcon Security & Logistics Pvt Ltd');
  const [address, setAddress] = useState('Floor 4, Cyber City Tower B, Mumbai, MH');
  const [pincode, setPincode] = useState('400051');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'netbanking' | 'corporate_credit' | 'cod'>('corporate_credit');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      const orderId = 'EVR-' + Math.floor(100000 + Math.random() * 900000);
      setIsProcessing(false);
      onOrderComplete(orderId);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl border border-[#eaedff] max-h-[92vh] flex flex-col my-auto">
        <div className="bg-[#0b192c] text-white p-4 sm:p-5 flex items-start justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-[#ffb95f] tracking-wider font-display">
              Commercial Checkout Gateway
            </span>
            <h3 className="font-display font-bold text-lg leading-tight">
              Review & Finalize Order
            </h3>
            <span className="text-xs text-[#bac7e1]">
              Total Commercial Payable: <strong className="text-white font-bold">₹{totalAmount.toLocaleString('en-IN')}</strong>
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-4 text-xs">
          {/* Corporate vs Retail Toggle */}
          <div className="flex rounded-lg bg-[#f2f3ff] p-1">
            <button
              type="button"
              onClick={() => setIsCorporate(true)}
              className={`flex-1 py-1.5 rounded-md font-display font-bold text-xs transition-all ${
                isCorporate
                  ? 'bg-white text-[#0050cc] shadow-xs'
                  : 'text-[#44474c] hover:text-[#131b2e]'
              }`}
            >
              Corporate / Institutional Billing
            </button>
            <button
              type="button"
              onClick={() => setIsCorporate(false)}
              className={`flex-1 py-1.5 rounded-md font-display font-bold text-xs transition-all ${
                !isCorporate
                  ? 'bg-white text-[#0050cc] shadow-xs'
                  : 'text-[#44474c] hover:text-[#131b2e]'
              }`}
            >
              Individual Direct Purchase
            </button>
          </div>

          {isCorporate && (
            <div className="p-3 bg-[#f2f3ff] rounded-xl space-y-2 border border-[#eaedff]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0050cc] text-[18px]">receipt_long</span>
                <span className="font-bold text-[#131b2e] text-xs">GST Input Tax Credit Invoice</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[#44474c] text-[11px] mb-0.5">GSTIN (15 Digits)</label>
                  <input
                    type="text"
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value.toUpperCase())}
                    className="w-full h-8 px-2.5 rounded border border-[#c5c6cd] uppercase font-mono text-xs bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[#44474c] text-[11px] mb-0.5">Registered Firm Name</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full h-8 px-2.5 rounded border border-[#c5c6cd] text-xs bg-white"
                  />
                </div>
              </div>
            </div>
          )}

          <div>
            <label className="block text-[#131b2e] font-semibold mb-1">
              Dispatch Destination & Facility Address *
            </label>
            <textarea
              required
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[#c5c6cd] focus:outline-none focus:border-[#0050cc] bg-white text-[#131b2e]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[#131b2e] font-semibold mb-1">Delivery PIN Code *</label>
              <input
                required
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full h-9 px-3 rounded-lg border border-[#c5c6cd] focus:outline-none focus:border-[#0050cc] bg-white"
              />
            </div>
            <div>
              <label className="block text-[#131b2e] font-semibold mb-1">Contact Phone *</label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-9 px-3 rounded-lg border border-[#c5c6cd] focus:outline-none focus:border-[#0050cc] bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#131b2e] font-semibold mb-2">
              Select Settlement & Payment Method
            </label>
            <div className="space-y-2">
              {[
                {
                  id: 'corporate_credit',
                  title: 'Corporate Net-30 Invoiced Credit',
                  subtitle: 'Available for GST registered institutional buyers',
                  icon: 'credit_score'
                },
                {
                  id: 'upi',
                  title: 'Instant UPI / QR Code / RuPay',
                  subtitle: 'Google Pay, PhonePe, Paytm, or BHIM',
                  icon: 'qr_code_2'
                },
                {
                  id: 'netbanking',
                  title: 'Corporate Net Banking & NEFT / RTGS',
                  subtitle: 'SBI, HDFC, ICICI, Axis, Kotak direct challan',
                  icon: 'account_balance'
                },
                {
                  id: 'cod',
                  title: 'Cash On Delivery / Delivery Pay',
                  subtitle: 'Available on sample test batches up to ₹5,000',
                  icon: 'payments'
                }
              ].map((m) => (
                <label
                  key={m.id}
                  className={`flex items-start gap-3 p-2.5 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === m.id
                      ? 'bg-[#f2f3ff] border-[#0050cc] shadow-xs'
                      : 'bg-white border-[#eaedff] hover:bg-[#faf8ff]'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === m.id}
                    onChange={() => setPaymentMethod(m.id as any)}
                    className="mt-0.5 text-[#0050cc] accent-[#0050cc]"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#0050cc]">
                        {m.icon}
                      </span>
                      <strong className="text-xs text-[#131b2e] font-display">{m.title}</strong>
                    </div>
                    <p className="text-[11px] text-[#44474c] mt-0.5">{m.subtitle}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full h-12 bg-[#0b192c] hover:bg-[#131b2e] text-white font-display text-sm font-bold rounded-xl shadow-lg active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                  <span>Generating Order & Invoice...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">lock</span>
                  <span>Confirm & Authorize Dispatch (₹{totalAmount.toLocaleString('en-IN')})</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
