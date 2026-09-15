import React, { useState } from 'react';

interface BulkQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
  prefillSector?: string;
  prefillProduct?: string;
}

export const BulkQuoteModal: React.FC<BulkQuoteModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  prefillSector = 'security',
  prefillProduct = ''
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState(prefillSector);
  const [quantity, setQuantity] = useState(50);
  const [brandingType, setBrandingType] = useState('embroidery');
  const [requestSwatches, setRequestSwatches] = useState(true);
  const [notes, setNotes] = useState(prefillProduct ? `Inquiring regarding: ${prefillProduct}` : '');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Calculated estimated discount
  const getEstimatedUnitDiscount = () => {
    if (quantity >= 500) return '45% Off Tier (₹649/unit avg)';
    if (quantity >= 200) return '35% Off Tier (₹749/unit avg)';
    if (quantity >= 50) return '25% Off Tier (₹849/unit avg)';
    return '15% Off Tier (₹949/unit avg)';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(`RFQ for ${companyName || 'your company'} received! An enterprise account manager will reach out within 4 working hours.`);
      onClose();
      setSubmitted(false);
    }, 1500);
  };

  const getWhatsAppHref = () => {
    const text = encodeURIComponent(
      `Hi Everbright Uniform Team, I need an Enterprise Bulk RFQ for ${companyName || 'our company'}.\nSector: ${sector}\nEstimated Quantity: ${quantity} units\nCustom Branding: ${brandingType}\nContact: ${contactPerson} (${phone})`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl border border-[#eaedff] max-h-[92vh] flex flex-col my-auto">
        {/* Modal Header */}
        <div className="bg-[#0b192c] text-white p-5 flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ffddb8]/20 text-[#ffb95f] text-[11px] font-bold uppercase tracking-wider w-fit">
              <span className="material-symbols-outlined text-[14px]">corporate_fare</span>
              Enterprise Quotations Desk
            </div>
            <h3 className="font-display font-bold text-xl leading-tight">
              Request Tiered Wholesale Rates
            </h3>
            <p className="text-xs text-[#bac7e1]">
              Customized rate card, computerized embroidery proofs, & fabric sample kits.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0 -mr-1"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Dynamic Tier Callout */}
        <div className="bg-[#f2f3ff] px-5 py-3 border-b border-[#eaedff] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0050cc] text-[20px]">
              price_change
            </span>
            <div className="text-xs">
              <span className="text-[#44474c] block">Estimated Rate Card:</span>
              <strong className="text-[#0050cc] font-bold">{getEstimatedUnitDiscount()}</strong>
            </div>
          </div>
          <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
            GST ITC 100% Eligible
          </span>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[#131b2e] font-semibold mb-1">
                Company / Institution Name *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Apollo Healthcare, G4S Security"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border border-[#c5c6cd] focus:outline-none focus:border-[#0050cc] focus:ring-1 focus:ring-[#0050cc] bg-white text-[#131b2e]"
              />
            </div>
            <div>
              <label className="block text-[#131b2e] font-semibold mb-1">
                Contact Person Name *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Rajesh Kumar"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border border-[#c5c6cd] focus:outline-none focus:border-[#0050cc] focus:ring-1 focus:ring-[#0050cc] bg-white text-[#131b2e]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[#131b2e] font-semibold mb-1">
                Official Work Phone / WhatsApp *
              </label>
              <input
                required
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border border-[#c5c6cd] focus:outline-none focus:border-[#0050cc] focus:ring-1 focus:ring-[#0050cc] bg-white text-[#131b2e]"
              />
            </div>
            <div>
              <label className="block text-[#131b2e] font-semibold mb-1">
                Corporate Email Address *
              </label>
              <input
                required
                type="email"
                placeholder="procurement@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border border-[#c5c6cd] focus:outline-none focus:border-[#0050cc] focus:ring-1 focus:ring-[#0050cc] bg-white text-[#131b2e]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[#131b2e] font-semibold mb-1">
                Industry Sector
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border border-[#c5c6cd] focus:outline-none focus:border-[#0050cc] bg-white text-[#131b2e]"
              >
                <option value="security">Security & Guard Force</option>
                <option value="hospital">Hospitality & Medical Care</option>
                <option value="hotel">Hotel, Front Office & Concierge</option>
                <option value="chef">Culinary & Commercial Kitchen</option>
                <option value="industrial">Industrial & Factory High-Vis</option>
                <option value="corporate">Corporate Staff & Executives</option>
              </select>
            </div>
            <div>
              <label className="block text-[#131b2e] font-semibold mb-1">
                Estimated Volume: <strong className="text-[#0050cc]">{quantity} Units</strong>
              </label>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-[#0050cc] cursor-pointer mt-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#131b2e] font-semibold mb-1">
              Custom Logo Branding Method
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'embroidery', label: 'Tajima Embroidery' },
                { id: 'dtf', label: 'DTF Heat Transfer' },
                { id: 'woven', label: 'Woven Crest / Badge' }
              ].map((b) => (
                <button
                  type="button"
                  key={b.id}
                  onClick={() => setBrandingType(b.id)}
                  className={`py-2 px-1 text-center rounded-lg border text-[11px] font-semibold transition-all ${
                    brandingType === b.id
                      ? 'bg-[#0b192c] text-white border-[#0b192c] shadow-xs'
                      : 'bg-white text-[#131b2e] border-[#c5c6cd] hover:bg-[#f2f3ff]'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[#131b2e] font-semibold mb-1">
              Specific Uniform Requirements or Customizations
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Need epaulets for 60 guards, reinforced knee pads, and company crest on left chest."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[#c5c6cd] focus:outline-none focus:border-[#0050cc] bg-white text-[#131b2e]"
            />
          </div>

          <label className="flex items-center gap-2 cursor-pointer bg-[#f2f3ff] p-2.5 rounded-lg">
            <input
              type="checkbox"
              checked={requestSwatches}
              onChange={(e) => setRequestSwatches(e.target.checked)}
              className="w-4 h-4 text-[#0050cc] rounded accent-[#0050cc]"
            />
            <span className="text-xs text-[#131b2e] font-medium">
              Ship complimentary physical fabric swatches & sample kit to our office address
            </span>
          </label>

          {/* Action Row */}
          <div className="flex flex-col gap-2 pt-2">
            <button
              type="submit"
              disabled={submitted}
              className="w-full h-11 bg-[#0050cc] hover:bg-[#003fa4] text-white font-display text-sm font-bold rounded-xl shadow-md active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {submitted ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                  <span>Generating Rate Card...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">assignment</span>
                  <span>Submit Institutional RFQ</span>
                </>
              )}
            </button>

            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-10 bg-[#f2f3ff] hover:bg-[#eaedff] text-[#131b2e] font-display text-xs font-bold rounded-xl flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <span className="material-symbols-outlined text-emerald-600 text-[18px]">chat</span>
              <span>Direct WhatsApp Desk (+91 98765 43210)</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
