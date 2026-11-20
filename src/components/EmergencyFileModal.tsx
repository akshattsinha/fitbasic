import React, { useState, useRef } from 'react';
import { 
  X, 
  ShieldAlert, 
  User, 
  Users, 
  HeartPulse, 
  PhoneCall, 
  FileText, 
  Upload, 
  Check, 
  CheckCircle2, 
  Lock, 
  Download, 
  Printer, 
  Plus, 
  Trash2, 
  AlertCircle, 
  FileCheck, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Eye,
  Edit3
} from 'lucide-react';
import { EmergencyFormData, EmergencyContact, FamilyMember, UploadedFileItem } from '../types/emergency';
import confetti from 'canvas-confetti';

interface EmergencyFileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_DATA: EmergencyFormData = {
  primary: {
    fullName: '',
    dob: '',
    bloodType: 'O+',
    phone: '',
    email: '',
    address: '',
    allergies: '',
    chronicConditions: '',
    currentMedications: '',
    organDonor: true,
  },
  contacts: [
    {
      id: '1',
      name: '',
      relationship: 'Spouse / Partner',
      phone: '',
      altPhone: '',
      email: '',
      address: '',
      isPriority: true,
    }
  ],
  family: [],
  healthcare: {
    preferredHospital: '',
    hospitalAddress: '',
    primaryPhysician: '',
    physicianPhone: '',
    insuranceProvider: '',
    policyNumber: '',
    groupNumber: '',
    emergencyDirectives: '',
  },
  files: [],
  vaultId: `REVERZN-VAULT-${Math.floor(100000 + Math.random() * 900000)}`,
};

export const EmergencyFileModal: React.FC<EmergencyFileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // View modes: 'form' -> 'review' -> 'payment-gate'
  const [viewState, setViewState] = useState<'form' | 'review' | 'payment-gate'>('form');
  const [activeFormTab, setActiveFormTab] = useState<'primary' | 'contacts' | 'family' | 'healthcare' | 'upload'>('primary');
  
  const [formData, setFormData] = useState<EmergencyFormData>(INITIAL_DATA);
  const [confirmedByMember, setConfirmedByMember] = useState(false);
  const [paymentSimulated, setPaymentSimulated] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // File upload handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles: UploadedFileItem[] = Array.from(e.target.files).map(file => ({
        id: Math.random().toString(36).substring(7),
        name: file.name,
        size: file.size,
        type: file.type,
      }));
      setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles] }));
    }
  };

  const removeFile = (id: string) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter(f => f.id !== id)
    }));
  };

  // Add / Remove Emergency Contacts
  const addContact = () => {
    const newContact: EmergencyContact = {
      id: Math.random().toString(36).substring(7),
      name: '',
      relationship: 'Family Member',
      phone: '',
      isPriority: false,
    };
    setFormData(prev => ({ ...prev, contacts: [...prev.contacts, newContact] }));
  };

  const removeContact = (id: string) => {
    if (formData.contacts.length <= 1) return;
    setFormData(prev => ({
      ...prev,
      contacts: prev.contacts.filter(c => c.id !== id)
    }));
  };

  // Add / Remove Family Members
  const addFamilyMember = () => {
    const newFamily: FamilyMember = {
      id: Math.random().toString(36).substring(7),
      fullName: '',
      relationship: 'Dependent',
      dob: '',
      bloodType: 'O+',
      allergies: '',
      medicalConditions: '',
      medications: '',
    };
    setFormData(prev => ({ ...prev, family: [...prev.family, newFamily] }));
  };

  const removeFamilyMember = (id: string) => {
    setFormData(prev => ({
      ...prev,
      family: prev.family.filter(f => f.id !== id)
    }));
  };

  // Validation before going to Review
  const handleProceedToReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.primary.fullName.trim()) {
      setFormError('Please enter your full legal name.');
      setActiveFormTab('primary');
      return;
    }
    if (!formData.primary.phone.trim()) {
      setFormError('Please provide your primary phone number.');
      setActiveFormTab('primary');
      return;
    }
    if (!formData.contacts[0].name.trim() || !formData.contacts[0].phone.trim()) {
      setFormError('Please fill in your primary emergency contact name and phone number.');
      setActiveFormTab('contacts');
      return;
    }

    setFormError(null);
    setViewState('review');
  };

  // Confirm changes and proceed to payment gate
  const handleConfirmAndProceed = () => {
    if (!confirmedByMember) {
      alert('Please check the confirmation box to verify your emergency details before proceeding.');
      return;
    }
    setFormData(prev => ({
      ...prev,
      confirmedAt: new Date().toLocaleString(),
    }));
    setViewState('payment-gate');
  };

  // Download / Print Emergency Dossier
  const handleDownloadEmergencyFile = () => {
    // Generate an official printable Emergency Dossier in a clean new window
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to download/print your official emergency dossier.');
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>REVERZN Emergency Medical & Life Dossier - ${formData.primary.fullName}</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #353A34;
            background: #ffffff;
            margin: 40px;
            line-height: 1.5;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #353A34;
            padding-bottom: 16px;
            margin-bottom: 24px;
          }
          .brand {
            font-size: 26px;
            font-weight: bold;
            letter-spacing: 2px;
          }
          .badge {
            background: #E9BFAF;
            color: #353A34;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: bold;
            text-transform: uppercase;
          }
          .section {
            margin-bottom: 24px;
            border: 1px solid #EAE1D3;
            border-radius: 8px;
            padding: 16px;
          }
          .section-title {
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #353A34;
            border-bottom: 1px solid #EAE1D3;
            padding-bottom: 8px;
            margin-bottom: 12px;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .item {
            font-size: 12px;
          }
          .item-label {
            font-weight: bold;
            color: #6C756B;
            text-transform: uppercase;
            font-size: 10px;
          }
          .item-val {
            font-size: 13px;
            color: #353A34;
            margin-top: 2px;
          }
          .alert-box {
            background: #FFF5F2;
            border-left: 4px solid #D7A9A6;
            padding: 10px 14px;
            margin-bottom: 16px;
            font-size: 12px;
          }
          .card-cutout {
            border: 2px dashed #353A34;
            border-radius: 8px;
            padding: 16px;
            margin-top: 30px;
            background: #FDFBF7;
            page-break-inside: avoid;
          }
          @media print {
            body { margin: 15mm; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="brand">REVERZN • EMERGENCY MEDICAL & LIFE VAULT</div>
            <div style="font-size: 11px; color: #6C756B;">Official Family Emergency Record • Vault Ref: ${formData.vaultId}</div>
          </div>
          <div class="badge">Verified & Confirmed</div>
        </div>

        <div class="alert-box">
          <strong>EMERGENCY MEDICAL DIRECTIVE:</strong> In case of accident, trauma or incapacity, notify the Primary Emergency Contact immediately and present this record to attending paramedics and triage physicians.
        </div>

        <div class="section">
          <div class="section-title">1. Primary Member Profile</div>
          <div class="grid">
            <div class="item">
              <div class="item-label">Full Legal Name</div>
              <div class="item-val"><strong>${formData.primary.fullName}</strong></div>
            </div>
            <div class="item">
              <div class="item-label">Date of Birth & Blood Group</div>
              <div class="item-val">${formData.primary.dob || 'Not specified'} • <strong>${formData.primary.bloodType}</strong></div>
            </div>
            <div class="item">
              <div class="item-label">Contact Phone & Email</div>
              <div class="item-val">${formData.primary.phone} • ${formData.primary.email || 'N/A'}</div>
            </div>
            <div class="item">
              <div class="item-label">Residential Address</div>
              <div class="item-val">${formData.primary.address || 'On File'}</div>
            </div>
            <div class="item">
              <div class="item-label">Known Allergies</div>
              <div class="item-val" style="color: #BE817D;"><strong>${formData.primary.allergies || 'None Reported'}</strong></div>
            </div>
            <div class="item">
              <div class="item-label">Chronic Conditions & Medications</div>
              <div class="item-val">${formData.primary.chronicConditions || 'None'} • Meds: ${formData.primary.currentMedications || 'None'}</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">2. Designated Emergency Contacts</div>
          <div class="grid">
            ${formData.contacts.map((c, i) => `
              <div class="item" style="border-right: 1px solid #eee; padding-right: 10px;">
                <div class="item-label">Contact #${i + 1} (${c.relationship})</div>
                <div class="item-val"><strong>${c.name}</strong></div>
                <div style="font-size: 12px; margin-top: 2px;">Phone: <strong>${c.phone}</strong> ${c.altPhone ? `| Alt: ${c.altPhone}` : ''}</div>
                <div style="font-size: 11px; color: #6C756B;">${c.email || ''} ${c.address ? `• ${c.address}` : ''}</div>
              </div>
            `).join('')}
          </div>
        </div>

        ${formData.family.length > 0 ? `
          <div class="section">
            <div class="section-title">3. Family Members Covered (${formData.family.length})</div>
            ${formData.family.map(f => `
              <div style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px dotted #EAE1D3; font-size: 12px;">
                <strong>${f.fullName}</strong> (${f.relationship}) — DOB: ${f.dob || 'N/A'} | Blood: <strong>${f.bloodType}</strong> | Allergies: ${f.allergies || 'None'} | Meds: ${f.medications || 'None'}
              </div>
            `).join('')}
          </div>
        ` : ''}

        <div class="section">
          <div class="section-title">4. Preferred Healthcare & Insurance Providers</div>
          <div class="grid">
            <div class="item">
              <div class="item-label">Preferred Hospital / Medical Center</div>
              <div class="item-val">${formData.healthcare.preferredHospital || 'Nearest Trauma Center'} ${formData.healthcare.hospitalAddress ? `(${formData.healthcare.hospitalAddress})` : ''}</div>
            </div>
            <div class="item">
              <div class="item-label">Primary Care Physician</div>
              <div class="item-val">${formData.healthcare.primaryPhysician || 'N/A'} ${formData.healthcare.physicianPhone ? `(Ph: ${formData.healthcare.physicianPhone})` : ''}</div>
            </div>
            <div class="item">
              <div class="item-label">Health Insurance Policy</div>
              <div class="item-val">${formData.healthcare.insuranceProvider || 'N/A'} — Policy ID: <strong>${formData.healthcare.policyNumber || 'N/A'}</strong></div>
            </div>
            <div class="item">
              <div class="item-label">Special Advance Directives</div>
              <div class="item-val">${formData.healthcare.emergencyDirectives || 'Standard Emergency Care Protocol Authorized'}</div>
            </div>
          </div>
        </div>

        ${formData.files.length > 0 ? `
          <div class="section">
            <div class="section-title">5. Attached Verification Documents (${formData.files.length})</div>
            <div style="font-size: 11px; color: #6C756B;">
              ${formData.files.map(f => `• ${f.name} (${Math.round(f.size / 1024)} KB)`).join('<br>')}
            </div>
          </div>
        ` : ''}

        <div class="card-cutout">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #353A34; padding-bottom: 6px; margin-bottom: 8px;">
            <span style="font-size: 11px; font-weight: bold; text-transform: uppercase;">REVERZN Wallet Emergency ID Card (Cut Out)</span>
            <span style="font-size: 10px; color: #6C756B;">Ref: ${formData.vaultId}</span>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 12px;">
            <div>
              <div><strong>${formData.primary.fullName}</strong></div>
              <div>Blood Group: <strong>${formData.primary.bloodType}</strong> | DOB: ${formData.primary.dob || 'N/A'}</div>
              <div>Allergies: <strong style="color: #BE817D;">${formData.primary.allergies || 'None'}</strong></div>
            </div>
            <div style="text-align: right;">
              <div><strong>ICE Contact:</strong> ${formData.contacts[0]?.name}</div>
              <div>Phone: <strong>${formData.contacts[0]?.phone}</strong></div>
              <div style="font-size: 10px; color: #6C756B;">Insurance: ${formData.healthcare.insuranceProvider || 'On Record'}</div>
            </div>
          </div>
        </div>

        <div style="margin-top: 30px; font-size: 10px; color: #888; text-align: center;">
          Confirmed on ${formData.confirmedAt || new Date().toLocaleString()} • REVERZN Lifestyle Architecture & Emergency Protocol Network
        </div>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C6D5BC', '#E9BFAF', '#A9C7CE', '#353A34'],
      });
    } catch (err) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-forest/50 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/90 shadow-2xl my-auto text-forest overflow-hidden">
        {/* Top Header Bar */}
        <div className="bg-white/80 px-6 sm:px-8 py-5 border-b border-forest/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-peach/30 border border-peach/50 flex items-center justify-center text-forest">
              <ShieldAlert className="w-5 h-5 text-peach-dark" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-forest leading-none">
                  Family & Emergency Life Vault
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-luxury px-2 py-0.5 rounded-full bg-sage/30 text-forest border border-sage/50">
                  CONFIDENTIAL
                </span>
              </div>
              <p className="text-xs font-mono text-forest/60 mt-1">
                Ref: {formData.vaultId} • Complete for yourself and your loved ones
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full glass-pill text-forest/50 hover:text-forest transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* VIEW 1: INTAKE FORM */}
        {viewState === 'form' && (
          <div className="p-6 sm:p-8">
            {/* Step / Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-forest/10 mb-6">
              {[
                { id: 'primary', label: '1. Primary Member', icon: User },
                { id: 'contacts', label: '2. Emergency Contacts', icon: PhoneCall },
                { id: 'family', label: `3. Family Members (${formData.family.length})`, icon: Users },
                { id: 'healthcare', label: '4. Medical & Insurance', icon: HeartPulse },
                { id: 'upload', label: `5. Upload Files (${formData.files.length})`, icon: Upload },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeFormTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFormTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-luxury transition-all ${
                      isActive
                        ? 'bg-forest text-cream font-bold shadow-sm'
                        : 'bg-white/50 text-forest/70 hover:bg-white hover:text-forest border border-forest/10'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {formError && (
              <div className="p-3.5 rounded-xl bg-rose/20 border border-rose text-rose-dark text-xs font-mono mb-6 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleProceedToReview} className="space-y-6">
              {/* TAB 1: PRIMARY MEMBER */}
              {activeFormTab === 'primary' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alexander Vance"
                        value={formData.primary.fullName}
                        onChange={e => setFormData({
                          ...formData,
                          primary: { ...formData.primary, fullName: e.target.value }
                        })}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={formData.primary.dob}
                        onChange={e => setFormData({
                          ...formData,
                          primary: { ...formData.primary, dob: e.target.value }
                        })}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                        Blood Group *
                      </label>
                      <select
                        value={formData.primary.bloodType}
                        onChange={e => setFormData({
                          ...formData,
                          primary: { ...formData.primary, bloodType: e.target.value }
                        })}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                      >
                        {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'Unknown'].map(bt => (
                          <option key={bt} value={bt}>{bt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                        Primary Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={formData.primary.phone}
                        onChange={e => setFormData({
                          ...formData,
                          primary: { ...formData.primary, phone: e.target.value }
                        })}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="alexander@domain.com"
                        value={formData.primary.email}
                        onChange={e => setFormData({
                          ...formData,
                          primary: { ...formData.primary, email: e.target.value }
                        })}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                      Residential Address
                    </label>
                    <input
                      type="text"
                      placeholder="Street, City, Postal Code, Country"
                      value={formData.primary.address}
                      onChange={e => setFormData({
                        ...formData,
                        primary: { ...formData.primary, address: e.target.value }
                      })}
                      className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                        Known Drug & Food Allergies
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Penicillin, Peanuts, Latex, None"
                        value={formData.primary.allergies}
                        onChange={e => setFormData({
                          ...formData,
                          primary: { ...formData.primary, allergies: e.target.value }
                        })}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                        Chronic Conditions & Medications
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Asthma, Hypertension, Thyroid, None"
                        value={formData.primary.chronicConditions}
                        onChange={e => setFormData({
                          ...formData,
                          primary: { ...formData.primary, chronicConditions: e.target.value }
                        })}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="organDonor"
                      checked={formData.primary.organDonor}
                      onChange={e => setFormData({
                        ...formData,
                        primary: { ...formData.primary, organDonor: e.target.checked }
                      })}
                      className="w-4 h-4 rounded text-forest focus:ring-sage"
                    />
                    <label htmlFor="organDonor" className="text-xs font-sans text-forest/80 cursor-pointer">
                      Registered Organ Donor (will be marked on emergency triage card)
                    </label>
                  </div>
                </div>
              )}

              {/* TAB 2: EMERGENCY CONTACTS */}
              {activeFormTab === 'contacts' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-xs font-mono uppercase tracking-luxury text-forest/70">
                      Designated In Case of Emergency (ICE) Contacts
                    </span>
                    <button
                      type="button"
                      onClick={addContact}
                      className="text-xs font-mono uppercase tracking-luxury flex items-center gap-1 text-forest hover:text-peach-dark transition-colors font-medium"
                    >
                      <Plus className="w-4 h-4" /> Add Another Contact
                    </button>
                  </div>

                  {formData.contacts.map((contact, idx) => (
                    <div key={contact.id} className="p-4 rounded-2xl bg-white/60 border border-forest/10 space-y-3 relative">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-serif font-bold text-forest">
                          Emergency Contact #{idx + 1} {idx === 0 ? '(Primary / Immediate)' : ''}
                        </span>
                        {idx > 0 && (
                          <button
                            type="button"
                            onClick={() => removeContact(contact.id)}
                            className="text-rose-dark hover:text-rose p-1 text-xs"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[10px] font-mono uppercase text-forest/60 mb-1">Contact Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Sarah Vance"
                            value={contact.name}
                            onChange={e => {
                              const updated = [...formData.contacts];
                              updated[idx].name = e.target.value;
                              setFormData({ ...formData, contacts: updated });
                            }}
                            className="w-full bg-white border border-forest/15 rounded-xl px-3 py-2 text-xs text-forest focus:outline-none focus:border-forest"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono uppercase text-forest/60 mb-1">Relationship</label>
                          <input
                            type="text"
                            placeholder="Spouse / Parent / Sibling"
                            value={contact.relationship}
                            onChange={e => {
                              const updated = [...formData.contacts];
                              updated[idx].relationship = e.target.value;
                              setFormData({ ...formData, contacts: updated });
                            }}
                            className="w-full bg-white border border-forest/15 rounded-xl px-3 py-2 text-xs text-forest focus:outline-none focus:border-forest"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono uppercase text-forest/60 mb-1">Primary Phone *</label>
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 019-9988"
                            value={contact.phone}
                            onChange={e => {
                              const updated = [...formData.contacts];
                              updated[idx].phone = e.target.value;
                              setFormData({ ...formData, contacts: updated });
                            }}
                            className="w-full bg-white border border-forest/15 rounded-xl px-3 py-2 text-xs text-forest focus:outline-none focus:border-forest"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-mono uppercase text-forest/60 mb-1">Alternate Phone</label>
                          <input
                            type="tel"
                            placeholder="Work / Mobile"
                            value={contact.altPhone || ''}
                            onChange={e => {
                              const updated = [...formData.contacts];
                              updated[idx].altPhone = e.target.value;
                              setFormData({ ...formData, contacts: updated });
                            }}
                            className="w-full bg-white border border-forest/15 rounded-xl px-3 py-2 text-xs text-forest focus:outline-none focus:border-forest"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono uppercase text-forest/60 mb-1">Email Address</label>
                          <input
                            type="email"
                            placeholder="sarah@domain.com"
                            value={contact.email || ''}
                            onChange={e => {
                              const updated = [...formData.contacts];
                              updated[idx].email = e.target.value;
                              setFormData({ ...formData, contacts: updated });
                            }}
                            className="w-full bg-white border border-forest/15 rounded-xl px-3 py-2 text-xs text-forest focus:outline-none focus:border-forest"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 3: FAMILY MEMBERS COVERED */}
              {activeFormTab === 'family' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between pb-2">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-luxury text-forest/70 block">
                        Family Dependents & Household Profiles
                      </span>
                      <span className="text-[11px] text-forest/60">Include children, spouse, or elderly parents in your family emergency file.</span>
                    </div>
                    <button
                      type="button"
                      onClick={addFamilyMember}
                      className="text-xs font-mono uppercase tracking-luxury flex items-center gap-1 text-forest hover:text-sage-dark transition-colors font-medium bg-white px-3 py-1.5 rounded-full border border-forest/10 shadow-sm"
                    >
                      <Plus className="w-4 h-4" /> Add Family Member
                    </button>
                  </div>

                  {formData.family.length === 0 ? (
                    <div className="p-8 text-center rounded-2xl bg-white/40 border border-dashed border-forest/20 text-forest/60 text-xs font-mono">
                      No family members added yet. Click "+ Add Family Member" to attach spouse, children or dependent records to this file.
                    </div>
                  ) : (
                    formData.family.map((member, idx) => (
                      <div key={member.id} className="p-4 rounded-2xl bg-white/60 border border-forest/10 space-y-3 relative">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-serif font-bold text-forest">
                            Family Member #{idx + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFamilyMember(member.id)}
                            className="text-rose-dark hover:text-rose p-1 text-xs"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                          <div className="sm:col-span-2">
                            <label className="block text-[10px] font-mono uppercase text-forest/60 mb-1">Full Name</label>
                            <input
                              type="text"
                              placeholder="e.g. Leo Vance (Son)"
                              value={member.fullName}
                              onChange={e => {
                                const updated = [...formData.family];
                                updated[idx].fullName = e.target.value;
                                setFormData({ ...formData, family: updated });
                              }}
                              className="w-full bg-white border border-forest/15 rounded-xl px-3 py-2 text-xs text-forest focus:outline-none focus:border-forest"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-mono uppercase text-forest/60 mb-1">Relationship</label>
                            <input
                              type="text"
                              placeholder="Child / Spouse / Parent"
                              value={member.relationship}
                              onChange={e => {
                                const updated = [...formData.family];
                                updated[idx].relationship = e.target.value;
                                setFormData({ ...formData, family: updated });
                              }}
                              className="w-full bg-white border border-forest/15 rounded-xl px-3 py-2 text-xs text-forest focus:outline-none focus:border-forest"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-mono uppercase text-forest/60 mb-1">Blood Group</label>
                            <select
                              value={member.bloodType}
                              onChange={e => {
                                const updated = [...formData.family];
                                updated[idx].bloodType = e.target.value;
                                setFormData({ ...formData, family: updated });
                              }}
                              className="w-full bg-white border border-forest/15 rounded-xl px-3 py-2 text-xs text-forest focus:outline-none focus:border-forest"
                            >
                              {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'Unknown'].map(bt => (
                                <option key={bt} value={bt}>{bt}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] font-mono uppercase text-forest/60 mb-1">Critical Allergies / Medical Notes</label>
                            <input
                              type="text"
                              placeholder="Peanut allergy, Type 1 Diabetes, None"
                              value={member.allergies}
                              onChange={e => {
                                const updated = [...formData.family];
                                updated[idx].allergies = e.target.value;
                                setFormData({ ...formData, family: updated });
                              }}
                              className="w-full bg-white border border-forest/15 rounded-xl px-3 py-2 text-xs text-forest focus:outline-none focus:border-forest"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-mono uppercase text-forest/60 mb-1">Current Daily Medications</label>
                            <input
                              type="text"
                              placeholder="Insulin, Inhaler, None"
                              value={member.medications}
                              onChange={e => {
                                const updated = [...formData.family];
                                updated[idx].medications = e.target.value;
                                setFormData({ ...formData, family: updated });
                              }}
                              className="w-full bg-white border border-forest/15 rounded-xl px-3 py-2 text-xs text-forest focus:outline-none focus:border-forest"
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* TAB 4: HEALTHCARE & INSURANCE */}
              {activeFormTab === 'healthcare' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                        Preferred Emergency Hospital
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. St. Thomas Hospital / Mayo Clinic"
                        value={formData.healthcare.preferredHospital}
                        onChange={e => setFormData({
                          ...formData,
                          healthcare: { ...formData.healthcare, preferredHospital: e.target.value }
                        })}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                        Hospital Address / Location
                      </label>
                      <input
                        type="text"
                        placeholder="Westminster, London SE1 7EH"
                        value={formData.healthcare.hospitalAddress || ''}
                        onChange={e => setFormData({
                          ...formData,
                          healthcare: { ...formData.healthcare, hospitalAddress: e.target.value }
                        })}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                        Primary Care Doctor / Physician
                      </label>
                      <input
                        type="text"
                        placeholder="Dr. Somesh Sharma, MD"
                        value={formData.healthcare.primaryPhysician}
                        onChange={e => setFormData({
                          ...formData,
                          healthcare: { ...formData.healthcare, primaryPhysician: e.target.value }
                        })}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                        Physician Contact Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 028-3921"
                        value={formData.healthcare.physicianPhone}
                        onChange={e => setFormData({
                          ...formData,
                          healthcare: { ...formData.healthcare, physicianPhone: e.target.value }
                        })}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                        Health Insurance Provider
                      </label>
                      <input
                        type="text"
                        placeholder="Bupa Global / Blue Cross / Star Health"
                        value={formData.healthcare.insuranceProvider}
                        onChange={e => setFormData({
                          ...formData,
                          healthcare: { ...formData.healthcare, insuranceProvider: e.target.value }
                        })}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                        Insurance Policy / Member Number
                      </label>
                      <input
                        type="text"
                        placeholder="POL-89412-GB"
                        value={formData.healthcare.policyNumber}
                        onChange={e => setFormData({
                          ...formData,
                          healthcare: { ...formData.healthcare, policyNumber: e.target.value }
                        })}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:border-forest"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/70 mb-1">
                      Emergency Advance Directives & Special Instructions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. In case of emergency, notify spouse first. Advance care directive stored with family attorney. No blood transfusions without consent."
                      value={formData.healthcare.emergencyDirectives}
                      onChange={e => setFormData({
                        ...formData,
                        healthcare: { ...formData.healthcare, emergencyDirectives: e.target.value }
                      })}
                      className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-2 text-xs text-forest focus:outline-none focus:border-forest"
                    />
                  </div>
                </div>
              )}

              {/* TAB 5: DOCUMENT UPLOAD */}
              {activeFormTab === 'upload' && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-luxury text-forest/70 block">
                      Upload Supporting Documents ("I Will Upload The File")
                    </span>
                    <p className="text-xs text-forest/60 mt-0.5">
                      Attach medical records, insurance policy copies, vaccination slips, or identification scans to link into this emergency file.
                    </p>
                  </div>

                  {/* Drag and Drop Uploader */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="p-8 rounded-2xl border-2 border-dashed border-forest/20 hover:border-forest/40 bg-white/50 hover:bg-white/80 transition-all cursor-pointer text-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-peach/30 border border-peach/50 flex items-center justify-center mx-auto text-forest">
                      <Upload className="w-5 h-5 text-peach-dark" />
                    </div>
                    <div>
                      <span className="text-xs font-serif font-bold text-forest block">
                        Click or drag files here to upload
                      </span>
                      <span className="text-[11px] text-forest/50 font-mono">
                        Supports PDF, PNG, JPG, DOCX (Up to 25MB per file)
                      </span>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>

                  {/* Uploaded File List */}
                  {formData.files.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-luxury text-forest/60 block">
                        Uploaded Documents ({formData.files.length}):
                      </span>
                      {formData.files.map(file => (
                        <div key={file.id} className="p-3 rounded-xl bg-white/80 border border-forest/10 flex items-center justify-between text-xs font-mono">
                          <div className="flex items-center gap-2.5 truncate">
                            <FileText className="w-4 h-4 text-peach-dark shrink-0" />
                            <span className="text-forest font-medium truncate">{file.name}</span>
                            <span className="text-[10px] text-forest/40 shrink-0">({Math.round(file.size / 1024)} KB)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(file.id)}
                            className="text-rose-dark hover:text-rose p-1 text-xs shrink-0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Bottom Navigation Buttons */}
              <div className="pt-6 border-t border-forest/10 flex items-center justify-between">
                <div className="text-[11px] font-mono text-forest/50">
                  Step {
                    activeFormTab === 'primary' ? '1/5' :
                    activeFormTab === 'contacts' ? '2/5' :
                    activeFormTab === 'family' ? '3/5' :
                    activeFormTab === 'healthcare' ? '4/5' : '5/5'
                  }
                </div>

                <div className="flex items-center gap-3">
                  {activeFormTab !== 'primary' && (
                    <button
                      type="button"
                      onClick={() => {
                        const tabs = ['primary', 'contacts', 'family', 'healthcare', 'upload'] as const;
                        const currIdx = tabs.indexOf(activeFormTab);
                        if (currIdx > 0) setActiveFormTab(tabs[currIdx - 1]);
                      }}
                      className="px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-luxury border border-forest/20 text-forest hover:bg-white"
                    >
                      Back
                    </button>
                  )}

                  {activeFormTab !== 'upload' ? (
                    <button
                      type="button"
                      onClick={() => {
                        const tabs = ['primary', 'contacts', 'family', 'healthcare', 'upload'] as const;
                        const currIdx = tabs.indexOf(activeFormTab);
                        if (currIdx < tabs.length - 1) setActiveFormTab(tabs[currIdx + 1]);
                      }}
                      className="px-6 py-2.5 rounded-full bg-forest text-cream text-xs uppercase tracking-luxury font-medium hover:bg-forest/90 flex items-center gap-1.5"
                    >
                      Next Step <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-8 py-2.5 rounded-full bg-forest text-cream text-xs uppercase tracking-luxury font-medium hover:bg-forest/90 flex items-center gap-2 shadow-elevated"
                    >
                      <Eye className="w-4 h-4" />
                      Review & Confirm Changes
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        )}

        {/* VIEW 2: REVIEW & CONFIRM SCREEN */}
        {viewState === 'review' && (
          <div className="p-6 sm:p-8 space-y-6 animate-fade-in max-h-[75vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-forest/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-luxury text-forest/50 block">
                  Step 2: Verification
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-forest uppercase">
                  Review & Confirm Emergency Information
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setViewState('form')}
                className="text-xs font-mono uppercase tracking-luxury px-4 py-1.5 rounded-full border border-forest/20 text-forest hover:bg-white flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" /> Edit Details
              </button>
            </div>

            <p className="text-xs text-forest/70 font-sans">
              Carefully review all entries below. Once confirmed, this encrypted emergency file will be locked and formatted for emergency responder and medical triage deployment.
            </p>

            {/* Structured Review Panels */}
            <div className="space-y-4 font-sans text-xs">
              {/* 1. Primary Member */}
              <div className="p-5 rounded-2xl bg-white/70 border border-forest/10">
                <div className="flex items-center justify-between pb-3 border-b border-forest/10 mb-3">
                  <span className="font-mono text-xs uppercase tracking-luxury text-forest font-bold">
                    1. Primary Member Profile
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-peach/20 text-forest font-bold">
                    Blood: {formData.primary.bloodType}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <span className="text-forest/50 text-[10px] font-mono uppercase block">Full Name</span>
                    <span className="font-medium text-forest text-sm">{formData.primary.fullName}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 text-[10px] font-mono uppercase block">DOB</span>
                    <span>{formData.primary.dob || 'Not provided'}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 text-[10px] font-mono uppercase block">Phone</span>
                    <span>{formData.primary.phone}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 text-[10px] font-mono uppercase block">Email</span>
                    <span>{formData.primary.email || 'None'}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 text-[10px] font-mono uppercase block">Allergies</span>
                    <span className="text-rose-dark font-medium">{formData.primary.allergies || 'None reported'}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 text-[10px] font-mono uppercase block">Organ Donor</span>
                    <span className="text-sage-dark font-medium">{formData.primary.organDonor ? 'Yes (Registered)' : 'No'}</span>
                  </div>
                </div>
              </div>

              {/* 2. Emergency Contacts */}
              <div className="p-5 rounded-2xl bg-white/70 border border-forest/10">
                <span className="font-mono text-xs uppercase tracking-luxury text-forest font-bold block pb-3 border-b border-forest/10 mb-3">
                  2. Designated Emergency Contacts ({formData.contacts.length})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {formData.contacts.map((c, i) => (
                    <div key={c.id} className="p-3 bg-white/60 rounded-xl border border-forest/5">
                      <span className="text-[10px] font-mono uppercase text-peach-dark font-bold block">
                        Contact #{i + 1} ({c.relationship})
                      </span>
                      <div className="font-medium text-forest text-sm mt-0.5">{c.name}</div>
                      <div className="text-forest/70 font-mono text-[11px] mt-1">Phone: {c.phone} {c.altPhone ? `| Alt: ${c.altPhone}` : ''}</div>
                      {c.email && <div className="text-forest/50 text-[10px]">{c.email}</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Family Members Covered */}
              {formData.family.length > 0 && (
                <div className="p-5 rounded-2xl bg-white/70 border border-forest/10">
                  <span className="font-mono text-xs uppercase tracking-luxury text-forest font-bold block pb-3 border-b border-forest/10 mb-3">
                    3. Family Dependents Covered ({formData.family.length})
                  </span>
                  <div className="space-y-2">
                    {formData.family.map((f, i) => (
                      <div key={f.id} className="p-3 bg-white/60 rounded-xl border border-forest/5 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-medium text-forest">{f.fullName}</span>
                          <span className="text-forest/50 ml-2">({f.relationship}) • Blood: <strong>{f.bloodType}</strong></span>
                        </div>
                        <div className="text-forest/60 text-[11px]">
                          Allergies: {f.allergies || 'None'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Healthcare & Insurance */}
              <div className="p-5 rounded-2xl bg-white/70 border border-forest/10">
                <span className="font-mono text-xs uppercase tracking-luxury text-forest font-bold block pb-3 border-b border-forest/10 mb-3">
                  4. Healthcare & Insurance Details
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-forest/50 text-[10px] font-mono uppercase block">Hospital Preference</span>
                    <span className="font-medium text-forest">{formData.healthcare.preferredHospital || 'Nearest Trauma Center'}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 text-[10px] font-mono uppercase block">Primary Physician</span>
                    <span>{formData.healthcare.primaryPhysician || 'N/A'} {formData.healthcare.physicianPhone ? `(${formData.healthcare.physicianPhone})` : ''}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 text-[10px] font-mono uppercase block">Insurance Provider & Policy</span>
                    <span>{formData.healthcare.insuranceProvider || 'N/A'} • #{formData.healthcare.policyNumber || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 text-[10px] font-mono uppercase block">Directives</span>
                    <span className="text-forest/70">{formData.healthcare.emergencyDirectives || 'Standard protocol'}</span>
                  </div>
                </div>
              </div>

              {/* 5. Uploaded Files */}
              {formData.files.length > 0 && (
                <div className="p-5 rounded-2xl bg-white/70 border border-forest/10">
                  <span className="font-mono text-xs uppercase tracking-luxury text-forest font-bold block pb-2 border-b border-forest/10 mb-2">
                    5. Uploaded Documents Attached ({formData.files.length})
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {formData.files.map(f => (
                      <span key={f.id} className="px-3 py-1 rounded-full bg-white border border-forest/10 flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5 text-sage-dark" />
                        {f.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Legal Confirmation Checkbox */}
            <div className="p-4 rounded-2xl bg-peach/20 border border-peach/50 flex items-start gap-3">
              <input
                type="checkbox"
                id="confirmChanges"
                checked={confirmedByMember}
                onChange={e => setConfirmedByMember(e.target.checked)}
                className="w-5 h-5 rounded text-forest focus:ring-peach mt-0.5 cursor-pointer"
              />
              <label htmlFor="confirmChanges" className="text-xs font-sans text-forest/90 leading-relaxed cursor-pointer">
                <strong>I hereby review and confirm all changes</strong> made to this Family & Emergency Life File. I declare that the personal, medical, and contact information is accurate and authorized for emergency medical use.
              </label>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-forest/10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setViewState('form')}
                className="px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-luxury border border-forest/20 text-forest hover:bg-white"
              >
                ← Back to Edit
              </button>

              <button
                type="button"
                onClick={handleConfirmAndProceed}
                disabled={!confirmedByMember}
                className={`px-8 py-3 rounded-full text-xs font-mono uppercase tracking-luxury font-bold transition-all flex items-center gap-2 shadow-elevated ${
                  confirmedByMember
                    ? 'bg-forest text-cream hover:bg-forest/90 cursor-pointer'
                    : 'bg-forest/30 text-cream/70 cursor-not-allowed'
                }`}
              >
                <Check className="w-4 h-4" />
                Confirm & Seal Emergency File
              </button>
            </div>
          </div>
        )}

        {/* VIEW 3: PAYMENT GATE & DOWNLOAD NOTICE SCREEN */}
        {viewState === 'payment-gate' && (
          <div className="p-8 sm:p-12 space-y-8 animate-fade-in text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-peach/30 border border-peach flex items-center justify-center mx-auto text-forest shadow-sm">
              <FileCheck className="w-8 h-8 text-peach-dark" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-luxury text-sage-dark font-bold block mb-2">
                ✓ Emergency File Confirmed & Locked
              </span>
              <h4 className="font-serif text-3xl sm:text-4xl text-forest uppercase tracking-tight">
                FAMILY EMERGENCY LIFE PACKET
              </h4>
              <p className="text-xs font-mono text-forest/60 mt-1">
                Dossier Identifier: {formData.vaultId} • Prepared for {formData.primary.fullName}
              </p>
            </div>

            {/* Download Gate Notice as specified in request */}
            <div className="p-6 rounded-3xl glass-panel border border-white/80 space-y-4 text-left shadow-soft-luxury">
              <div className="flex items-center justify-between pb-3 border-b border-forest/10">
                <span className="font-serif font-bold text-forest text-base flex items-center gap-2">
                  <Lock className="w-4 h-4 text-peach-dark" /> Official Encrypted Download Packet
                </span>
                <span className="text-xs font-mono uppercase tracking-luxury px-3 py-1 rounded-full bg-butter/30 text-forest border border-butter font-bold">
                  $29 • One-Time Vault
                </span>
              </div>

              <div className="text-xs text-forest/80 font-sans leading-relaxed space-y-2">
                <p>
                  Includes the official, watermark-sealed REVERZN Emergency Medical Dossier, Wallet Emergency ID Cards for your household, and secure offline emergency instructions.
                </p>
                <div className="p-3 rounded-xl bg-powder/30 border border-powder text-forest/90 font-mono text-[11px]">
                  <strong>Payment Gate Notice:</strong> Payment gateway integration is scheduled for an upcoming release. Per your instructions, the payment gateway is currently simulated for review and testing.
                </div>
              </div>

              {/* Simulate Payment Toggle */}
              {!paymentSimulated ? (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPaymentSimulated(true);
                      try {
                        confetti({
                          particleCount: 50,
                          spread: 60,
                          origin: { y: 0.7 },
                          colors: ['#E9BFAF', '#C6D5BC', '#E8D58E'],
                        });
                      } catch (e) {}
                    }}
                    className="w-full py-3.5 rounded-full bg-forest text-cream text-xs uppercase tracking-luxury font-medium hover:bg-forest/90 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-peach-light" />
                    <span>Authorize & Unlock Download (Simulate Payment)</span>
                  </button>
                  <p className="text-center text-[10px] font-mono text-forest/50 mt-1.5">
                    Click to test instant dossier generation and printable packet download.
                  </p>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-sage/30 border border-sage text-forest text-xs font-mono flex items-center justify-between">
                  <span className="flex items-center gap-2 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-forest" />
                    Payment Authorized • Vault Unlocked
                  </span>
                  <span className="text-[10px] uppercase text-forest/70">Ready for Download</span>
                </div>
              )}
            </div>

            {/* Final Download Button */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleDownloadEmergencyFile}
                disabled={!paymentSimulated}
                className={`w-full py-4 rounded-full text-xs font-mono uppercase tracking-luxury font-bold transition-all flex items-center justify-center gap-2 shadow-elevated ${
                  paymentSimulated
                    ? 'bg-forest text-cream hover:bg-forest/90 cursor-pointer scale-[1.01]'
                    : 'bg-forest/20 text-forest/40 cursor-not-allowed'
                }`}
              >
                <Printer className="w-4 h-4" />
                <span>Download & Print Official Emergency Dossier (PDF)</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-xs font-mono text-forest/50 pt-2">
                <button
                  type="button"
                  onClick={() => setViewState('review')}
                  className="hover:text-forest transition-colors"
                >
                  ← Return to Review
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={onClose}
                  className="hover:text-forest transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

