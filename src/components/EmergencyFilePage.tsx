import React, { useState, useRef, useEffect } from 'react';
import { 
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
  Edit3,
  ArrowUpRight
} from 'lucide-react';
import { EmergencyFormData, EmergencyContact, FamilyMember, UploadedFileItem } from '../types/emergency';
import confetti from 'canvas-confetti';
import { AnimatedBackground } from './AnimatedBackground';

interface EmergencyFilePageProps {
  onBackToHome: () => void;
  onOpenCheckout: () => void;
}

const STORAGE_KEY = 'reverzn_emergency_file_draft';

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

export const EmergencyFilePage: React.FC<EmergencyFilePageProps> = ({ onBackToHome, onOpenCheckout }) => {
  // View states: 'form' | 'review' | 'payment-gate'
  const [viewState, setViewState] = useState<'form' | 'review' | 'payment-gate'>('form');
  const [activeFormTab, setActiveFormTab] = useState<'primary' | 'contacts' | 'family' | 'healthcare' | 'upload'>('primary');
  
  // Always initialize with fresh, empty blank data on load or refresh
  const [formData, setFormData] = useState<EmergencyFormData>(INITIAL_DATA);

  // Clear any existing stored sessions on mount
  useEffect(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('reverzn_emergency_file_data_v2');
      sessionStorage.clear();
    } catch (e) {}
  }, []);

  const [confirmedByMember, setConfirmedByMember] = useState(false);
  const [paymentSimulated, setPaymentSimulated] = useState(true);
  const [formError, setFormError] = useState<string | null>(null);

  const handleLoadSampleData = () => {
    setFormData({
      primary: {
        fullName: 'Ramesh K. Sharma',
        dob: '1952-03-14',
        bloodType: 'B+',
        phone: '+91 98765 43210',
        email: 'ramesh.sharma@example.com',
        address: '42 Orchid Heights, Central Park Road, South Delhi',
        allergies: 'Penicillin: severe anaphylaxis; Peanuts (Carries EpiPen)',
        chronicConditions: 'Hypertension (managed), Type 2 Diabetes, Mild Osteoarthritis',
        currentMedications: 'Metformin 500mg - 1 tab BID with food; Telmisartan 40mg - 1 tab OD morning; Clopidogrel 75mg - 1 tab post lunch',
        organDonor: true,
      },
      contacts: [
        {
          id: '1',
          name: 'Abhishek Sharma',
          relationship: 'Son',
          phone: '+91 99887 76655',
          altPhone: '+91 11 2654 3210',
          email: 'abhishek.s@domain.com',
          address: 'Same as primary member',
          isPriority: true,
        },
        {
          id: '2',
          name: 'Sunita Sharma',
          relationship: 'Spouse',
          phone: '+91 98111 22233',
          altPhone: '',
          email: 'sunita.sharma@domain.com',
          address: 'Same as primary member',
          isPriority: false,
        }
      ],
      family: [
        {
          id: 'f1',
          fullName: 'Sunita Sharma',
          relationship: 'Spouse',
          dob: '1956-08-22',
          bloodType: 'A+',
          allergies: 'Sulfa antibiotics (hives)',
          medicalConditions: 'Hypothyroidism',
          medications: 'Levothyroxine 50mcg empty stomach',
        }
      ],
      healthcare: {
        preferredHospital: 'Fortis Escorts Heart Institute',
        hospitalAddress: 'Okhla Road, New Delhi, Delhi 110025',
        primaryPhysician: 'Dr. V. Mehta (Cardiologist)',
        physicianPhone: '+91 98222 33445',
        insuranceProvider: 'Star Health Senior Citizen Red Carpet',
        policyNumber: 'SH-8849201',
        groupNumber: 'GRP-DEL-99',
        emergencyDirectives: 'Standard emergency resuscitation permitted. Advance healthcare directive kept in bedroom fireproof safe.',
      },
      files: [],
      vaultId: `REVERZN-VAULT-${Math.floor(100000 + Math.random() * 900000)}`,
      confirmedAt: new Date().toLocaleString(),
    });
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scroll to top when view state changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [viewState, activeFormTab]);

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
    setFormData(prev => ({ ...prev, files: prev.files.filter(f => f.id !== id) }));
  };

  // Contacts handlers
  const addContact = () => {
    const newContact: EmergencyContact = {
      id: Date.now().toString(),
      name: '',
      relationship: 'Family Member',
      phone: '',
      altPhone: '',
      email: '',
      address: '',
      isPriority: formData.contacts.length === 0,
    };
    setFormData(prev => ({ ...prev, contacts: [...prev.contacts, newContact] }));
  };

  const removeContact = (id: string) => {
    if (formData.contacts.length <= 1) {
      alert('You must maintain at least one primary emergency contact.');
      return;
    }
    setFormData(prev => ({ ...prev, contacts: prev.contacts.filter(c => c.id !== id) }));
  };

  const updateContact = (id: string, field: keyof EmergencyContact, value: any) => {
    setFormData(prev => ({
      ...prev,
      contacts: prev.contacts.map(c => (c.id === id ? { ...c, [field]: value } : c)),
    }));
  };

  // Family members handlers
  const addFamilyMember = () => {
    const newMember: FamilyMember = {
      id: Date.now().toString(),
      fullName: '',
      relationship: 'Child',
      dob: '',
      bloodType: 'O+',
      allergies: '',
      medicalConditions: '',
      medications: '',
    };
    setFormData(prev => ({ ...prev, family: [...prev.family, newMember] }));
  };

  const removeFamilyMember = (id: string) => {
    setFormData(prev => ({ ...prev, family: prev.family.filter(f => f.id !== id) }));
  };

  const updateFamilyMember = (id: string, field: keyof FamilyMember, value: any) => {
    setFormData(prev => ({
      ...prev,
      family: prev.family.map(f => (f.id === id ? { ...f, [field]: value } : f)),
    }));
  };

  // Tab progression
  const tabs: Array<'primary' | 'contacts' | 'family' | 'healthcare' | 'upload'> = [
    'primary',
    'contacts',
    'family',
    'healthcare',
    'upload',
  ];

  const handleNextTab = () => {
    const currentIndex = tabs.indexOf(activeFormTab);
    if (currentIndex < tabs.length - 1) {
      setActiveFormTab(tabs[currentIndex + 1]);
    } else {
      setViewState('review');
    }
  };

  const handlePrevTab = () => {
    const currentIndex = tabs.indexOf(activeFormTab);
    if (currentIndex > 0) {
      setActiveFormTab(tabs[currentIndex - 1]);
    }
  };

  // Validation before going to Review
  const handleProceedToReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.primary.fullName.trim()) {
      setFormError('Please enter your full legal name under Primary Member.');
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
            font-size: 13px;
          }
          .label {
            font-weight: 600;
            color: #666;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .value {
            font-size: 13px;
            color: #111;
            margin-top: 2px;
          }
          .alert-box {
            background: #fff3f0;
            border: 1px solid #E9BFAF;
            padding: 12px;
            border-radius: 6px;
            margin-top: 8px;
          }
          .card-cutout {
            border: 2px dashed #353A34;
            padding: 16px;
            border-radius: 8px;
            margin-top: 32px;
            page-break-inside: avoid;
            background: #FAF8F5;
          }
          @media print {
            body { margin: 20px; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="brand">REVERZN • EMERGENCY MEDICAL & LIFE VAULT</div>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">OFFICIAL HOUSEHOLD EMERGENCY MEDICAL DOSSIER</div>
          </div>
          <div style="text-align: right;">
            <div class="badge">SECURED VAULT FILE</div>
            <div style="font-size: 11px; color: #888; margin-top: 4px;">ID: ${formData.vaultId}</div>
          </div>
        </div>

        <!-- 01 PRIMARY MEMBER -->
        <div class="section">
          <div class="section-title">01 • Primary Household Member</div>
          <div class="grid">
            <div class="item"><div class="label">Legal Full Name</div><div class="value">${formData.primary.fullName || 'N/A'}</div></div>
            <div class="item"><div class="label">Date of Birth</div><div class="value">${formData.primary.dob || 'N/A'}</div></div>
            <div class="item"><div class="label">Blood Group</div><div class="value" style="font-weight: bold; color: #c2410c;">${formData.primary.bloodType}</div></div>
            <div class="item"><div class="label">Organ Donor</div><div class="value">${formData.primary.organDonor ? 'YES (Registered)' : 'NO'}</div></div>
            <div class="item"><div class="label">Primary Phone</div><div class="value">${formData.primary.phone || 'N/A'}</div></div>
            <div class="item"><div class="label">Email Address</div><div class="value">${formData.primary.email || 'N/A'}</div></div>
            <div class="item" style="grid-column: span 2;"><div class="label">Residential Address</div><div class="value">${formData.primary.address || 'N/A'}</div></div>
          </div>
          <div class="alert-box">
            <div class="label" style="color: #c2410c;">Critical Allergies & Sensitivities:</div>
            <div class="value">${formData.primary.allergies || 'No known allergies reported.'}</div>
          </div>
          <div class="grid" style="margin-top: 8px;">
            <div class="item"><div class="label">Chronic Medical Conditions</div><div class="value">${formData.primary.chronicConditions || 'None reported.'}</div></div>
            <div class="item"><div class="label">Current Regular Medications</div><div class="value">${formData.primary.currentMedications || 'None reported.'}</div></div>
          </div>
        </div>

        <!-- 02 EMERGENCY CONTACTS -->
        <div class="section">
          <div class="section-title">02 • Emergency Contact Protocol Hierarchy</div>
          ${formData.contacts.map((c, idx) => `
            <div style="padding: 8px 0; border-bottom: ${idx < formData.contacts.length - 1 ? '1px dashed #eee' : 'none'};">
              <div class="grid">
                <div class="item"><div class="label">Priority #${idx + 1} (${c.relationship})</div><div class="value" style="font-weight: bold;">${c.name}</div></div>
                <div class="item"><div class="label">Primary Phone</div><div class="value">${c.phone}</div></div>
                <div class="item"><div class="label">Secondary Phone</div><div class="value">${c.altPhone || 'N/A'}</div></div>
                <div class="item"><div class="label">Contact Address</div><div class="value">${c.address || 'N/A'}</div></div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- 03 FAMILY MEMBERS -->
        ${formData.family.length > 0 ? `
          <div class="section">
            <div class="section-title">03 • Household Family Dependents (${formData.family.length})</div>
            ${formData.family.map(f => `
              <div style="padding: 8px 0; border-bottom: 1px dashed #eee;">
                <div class="grid">
                  <div class="item"><div class="label">${f.relationship}</div><div class="value" style="font-weight: bold;">${f.fullName}</div></div>
                  <div class="item"><div class="label">DOB / Blood Type</div><div class="value">${f.dob || 'N/A'} • <strong>${f.bloodType}</strong></div></div>
                  <div class="item"><div class="label">Allergies</div><div class="value">${f.allergies || 'None declared.'}</div></div>
                  <div class="item"><div class="label">Medical Conditions & Medications</div><div class="value">${f.medicalConditions || 'None.'} ${f.medications ? `(${f.medications})` : ''}</div></div>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- 04 HEALTHCARE & INSURANCE -->
        <div class="section">
          <div class="section-title">04 • Healthcare Providers & Insurance Coverage</div>
          <div class="grid">
            <div class="item"><div class="label">Preferred Medical Center / ER</div><div class="value">${formData.healthcare.preferredHospital || 'N/A'}</div></div>
            <div class="item"><div class="label">Hospital Address</div><div class="value">${formData.healthcare.hospitalAddress || 'N/A'}</div></div>
            <div class="item"><div class="label">Primary Care Physician</div><div class="value">${formData.healthcare.primaryPhysician || 'N/A'}</div></div>
            <div class="item"><div class="label">Physician Telephone</div><div class="value">${formData.healthcare.physicianPhone || 'N/A'}</div></div>
            <div class="item"><div class="label">Health Insurance Carrier</div><div class="value">${formData.healthcare.insuranceProvider || 'N/A'}</div></div>
            <div class="item"><div class="label">Policy ID / Group Number</div><div class="value">${formData.healthcare.policyNumber || 'N/A'} / ${formData.healthcare.groupNumber || 'N/A'}</div></div>
            <div class="item" style="grid-column: span 2;"><div class="label">Advance Directives & Special Instructions</div><div class="value">${formData.healthcare.emergencyDirectives || 'Standard lifesaving emergency medical authorization.'}</div></div>
          </div>
        </div>

        <!-- 05 ATTACHED DOCUMENTS SUMMARY -->
        ${formData.files.length > 0 ? `
          <div class="section">
            <div class="section-title">05 • Supporting Verified Documents Attached (${formData.files.length})</div>
            <ul style="font-size: 12px; margin: 0; padding-left: 20px;">
              ${formData.files.map(f => `<li><strong>${f.name}</strong> (${(f.size / 1024).toFixed(1)} KB) — Stored in encrypted family vault</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- WALLET CARD CUTOUT -->
        <div class="card-cutout">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #353A34; padding-bottom: 6px; margin-bottom: 10px;">
            <span style="font-size: 11px; font-weight: bold; text-transform: uppercase;">REVERZN Wallet Emergency ID Card (Cut Out)</span>
            <span style="font-size: 10px; font-family: monospace;">BLOOD: <strong>${formData.primary.bloodType}</strong></span>
          </div>
          <div class="grid">
            <div class="item"><div class="label">Name</div><div class="value" style="font-weight: bold;">${formData.primary.fullName}</div></div>
            <div class="item"><div class="label">DOB</div><div class="value">${formData.primary.dob || 'N/A'}</div></div>
            <div class="item"><div class="label">Emergency Contact</div><div class="value">${formData.contacts[0].name} (${formData.contacts[0].phone})</div></div>
            <div class="item"><div class="label">Allergies</div><div class="value" style="color: #c2410c; font-weight: bold;">${formData.primary.allergies || 'NKDA'}</div></div>
          </div>
        </div>

        <div style="margin-top: 32px; font-size: 11px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 16px;">
          Confirmed on ${formData.confirmedAt || new Date().toLocaleString()} • REVERZN Lifestyle Architecture & Emergency Protocol Network
        </div>

        <div class="no-print" style="margin-top: 24px; text-align: center;">
          <button onclick="window.print()" style="padding: 10px 24px; background: #353A34; color: white; border: none; border-radius: 20px; font-size: 13px; font-weight: bold; cursor: pointer;">
            Print / Save as PDF
          </button>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-cream text-forest flex flex-col font-sans selection:bg-peach selection:text-forest relative">
      {/* Animated Multi-Colour Mesh Gradient Background */}
      <AnimatedBackground theme="lavender-peach" />

      {/* TOP NAVIGATION BAR FOR EMERGENCY FILE PAGE */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-md border-b border-forest/10 py-4 px-6 sm:px-12 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Mark with Return Action */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onBackToHome}
              className="flex items-center gap-2 group cursor-pointer text-left"
              title="Return to REVERZN Main Website"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-tight text-forest font-normal">
                REVER<span className="italic font-light text-forest/70">ZN</span>
              </span>
            </button>

            <span className="text-forest/30 hidden sm:inline">/</span>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-peach/30 border border-peach text-forest text-xs font-mono font-medium">
              <ShieldAlert className="w-3.5 h-3.5 text-peach-dark" />
              <span>EMERGENCY LIFE VAULT</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-mono text-forest/60">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-dark" />
              New Session
            </span>

            <button
              type="button"
              onClick={handleLoadSampleData}
              className="px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono uppercase tracking-luxury bg-peach/30 border border-peach text-forest hover:bg-peach/60 transition-all cursor-pointer font-medium"
              title="Populate form with complete example data"
            >
              Fill Sample Details
            </button>

            <button
              type="button"
              onClick={onBackToHome}
              className="px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-luxury border border-forest/20 text-forest hover:bg-white/80 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back to</span> REVERZN
            </button>

            <button
              type="button"
              onClick={onOpenCheckout}
              className="group relative px-5 sm:px-6 py-2.5 rounded-full bg-forest text-cream text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:shadow-glass-hover hover:scale-[1.02] flex items-center gap-2 overflow-hidden shadow-elevated cursor-pointer"
            >
              <span className="relative z-10">JOIN REVERZN</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16 w-full relative z-10">
        {/* HERO TITLE SECTION */}
        <div className="mb-8 sm:mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-peach/25 border border-peach/50 text-forest text-xs font-mono tracking-wider uppercase mb-4">
            <ShieldAlert className="w-4 h-4 text-peach-dark" />
            <span>Family Medical & Emergency Protocol File</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-forest uppercase tracking-tight font-normal leading-[1.05]">
            FAMILY EMERGENCY <br className="hidden sm:inline" />
            <span className="italic font-light text-forest/75">LIFE & MEDICAL VAULT.</span>
          </h1>

          <p className="text-forest/70 text-sm sm:text-base font-light max-w-3xl mt-3 leading-relaxed">
            Prepare, verify, and seal your household's emergency directives. Fill in personal medical baseline, emergency contact hierarchy, family dependents, and upload supporting insurance or identity documents. Download or print your verified dossier upon review.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-forest/10 text-xs font-mono text-forest/60">
            <div>
              <span className="uppercase text-forest/40">Vault ID:</span> <strong className="text-forest">{formData.vaultId}</strong>
            </div>
            <span>•</span>
            <div>
              <span className="uppercase text-forest/40">Completion:</span> ~4 Minutes
            </div>
            <span>•</span>
            <div>
              <span className="uppercase text-forest/40">Privacy:</span> Client-Side Encrypted
            </div>
          </div>
        </div>

        {/* STEP PROGRESS NAVIGATION TABS */}
        <div className="mb-8">
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 p-1.5 rounded-2xl glass-panel border border-white/80 shadow-soft-luxury">
            {[
              { id: 'primary', label: '01 Primary', icon: User },
              { id: 'contacts', label: '02 Contacts', icon: PhoneCall },
              { id: 'family', label: '03 Family', icon: Users },
              { id: 'healthcare', label: '04 Healthcare', icon: HeartPulse },
              { id: 'upload', label: '05 Documents', icon: Upload },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = viewState === 'form' && activeFormTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setViewState('form');
                    setActiveFormTab(tab.id as any);
                  }}
                  className={`py-3 px-3 rounded-xl text-xs font-mono tracking-wider uppercase transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-forest text-cream font-bold shadow-md'
                      : 'text-forest/70 hover:text-forest hover:bg-white/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Stepper Status Pill */}
          <div className="flex items-center justify-between px-2 pt-3 text-xs font-mono text-forest/60">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${viewState === 'form' ? 'bg-peach-dark animate-pulse' : 'bg-sage-dark'}`} />
              <span className="uppercase">
                Current Mode: {viewState === 'form' ? `Filling Section (${activeFormTab.toUpperCase()})` : viewState === 'review' ? 'Review & Confirm' : 'Sealed & Gated Download'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {viewState !== 'review' && (
                <button
                  type="button"
                  onClick={() => setViewState('review')}
                  className="text-forest hover:underline underline-offset-4 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" /> Review Filled Data
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ERROR NOTIFICATION BANNER */}
        {formError && (
          <div className="mb-6 p-4 rounded-2xl bg-rose/30 border border-rose text-forest text-xs font-mono flex items-center gap-3 shadow-sm animate-fade-in">
            <AlertCircle className="w-4 h-4 text-rose-dark shrink-0" />
            <span className="font-semibold">{formError}</span>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 1: DEDICATED FULL-PAGE FORM                                         */}
        {/* ========================================================================= */}
        {viewState === 'form' && (
          <div className="glass-panel rounded-3xl border border-white/90 p-6 sm:p-10 shadow-elevated space-y-8 animate-fade-in bg-white/40 backdrop-blur-xl">
            {/* 01 PRIMARY MEMBER TAB */}
            {activeFormTab === 'primary' && (
              <div className="space-y-6">
                <div className="border-b border-forest/10 pb-4">
                  <span className="text-xs font-mono uppercase tracking-luxury text-forest/50 block">Section 01</span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-forest uppercase tracking-tight">
                    Primary Household Member
                  </h2>
                  <p className="text-xs text-forest/60 font-mono mt-1">
                    Your personal baseline identification, blood classification, and critical allergies.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.primary.fullName}
                      onChange={e => setFormData(p => ({ ...p, primary: { ...p.primary, fullName: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={formData.primary.dob}
                      onChange={e => setFormData(p => ({ ...p, primary: { ...p.primary, dob: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Blood Group
                    </label>
                    <select
                      value={formData.primary.bloodType}
                      onChange={e => setFormData(p => ({ ...p, primary: { ...p.primary, bloodType: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    >
                      {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'Unknown'].map(bt => (
                        <option key={bt} value={bt}>{bt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Primary Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.primary.phone}
                      onChange={e => setFormData(p => ({ ...p, primary: { ...p.primary, phone: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.primary.email}
                      onChange={e => setFormData(p => ({ ...p, primary: { ...p.primary, email: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Residential Address
                    </label>
                    <input
                      type="text"
                      value={formData.primary.address}
                      onChange={e => setFormData(p => ({ ...p, primary: { ...p.primary, address: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Critical Allergies (Foods, Latex, Medications, Stings)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.primary.allergies}
                      onChange={e => setFormData(p => ({ ...p, primary: { ...p.primary, allergies: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Chronic Medical Conditions
                    </label>
                    <input
                      type="text"
                      value={formData.primary.chronicConditions}
                      onChange={e => setFormData(p => ({ ...p, primary: { ...p.primary, chronicConditions: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Current Regular Medications & Dosage
                    </label>
                    <input
                      type="text"
                      value={formData.primary.currentMedications}
                      onChange={e => setFormData(p => ({ ...p, primary: { ...p.primary, currentMedications: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.primary.organDonor}
                        onChange={e => setFormData(p => ({ ...p, primary: { ...p.primary, organDonor: e.target.checked } }))}
                        className="w-4 h-4 rounded text-forest border-forest/30 focus:ring-forest cursor-pointer"
                      />
                      <span className="text-xs font-mono text-forest/80 uppercase tracking-luxury">
                        Registered Organ Donor Directive
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* 02 EMERGENCY CONTACTS TAB */}
            {activeFormTab === 'contacts' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-forest/10 pb-4 gap-3">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-luxury text-forest/50 block">Section 02</span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-forest uppercase tracking-tight">
                      Emergency Contacts Hierarchy
                    </h2>
                    <p className="text-xs text-forest/60 font-mono mt-1">
                      Who emergency personnel, physicians, or first responders should reach first.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={addContact}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest text-cream text-xs font-mono uppercase tracking-luxury font-medium hover:bg-forest/90 transition-all self-start sm:self-auto shadow-sm cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Additional Contact</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {formData.contacts.map((contact, index) => (
                    <div
                      key={contact.id}
                      className="p-5 sm:p-6 rounded-2xl bg-white/60 border border-forest/15 relative space-y-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between border-b border-forest/10 pb-3">
                        <span className="text-xs font-mono uppercase tracking-luxury font-bold text-forest flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-forest text-cream text-[10px] flex items-center justify-center font-mono">
                            {index + 1}
                          </span>
                          {index === 0 ? 'Primary Emergency Contact (First Call)' : `Contact #${index + 1}`}
                        </span>

                        {formData.contacts.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeContact(contact.id)}
                            className="text-rose-dark hover:text-rose-700 text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-1.5">
                            Contact Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={contact.name}
                            onChange={e => updateContact(contact.id, 'name', e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-1.5">
                            Relationship
                          </label>
                          <input
                            type="text"
                            value={contact.relationship}
                            onChange={e => updateContact(contact.id, 'relationship', e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-1.5">
                            Primary Mobile *
                          </label>
                          <input
                            type="tel"
                            required
                            value={contact.phone}
                            onChange={e => updateContact(contact.id, 'phone', e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-1.5">
                            Alternate / Work Phone
                          </label>
                          <input
                            type="tel"
                            value={contact.altPhone}
                            onChange={e => updateContact(contact.id, 'altPhone', e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-1.5">
                            Contact Address / Location
                          </label>
                          <input
                            type="text"
                            value={contact.address}
                            onChange={e => updateContact(contact.id, 'address', e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 03 FAMILY MEMBERS TAB */}
            {activeFormTab === 'family' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-forest/10 pb-4 gap-3">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-luxury text-forest/50 block">Section 03</span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-forest uppercase tracking-tight">
                      Family Members & Household Dependents
                    </h2>
                    <p className="text-xs text-forest/60 font-mono mt-1">
                      Add spouse, children, elderly parents, or dependents who share your household emergency dossier.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={addFamilyMember}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest text-cream text-xs font-mono uppercase tracking-luxury font-medium hover:bg-forest/90 transition-all self-start sm:self-auto shadow-sm cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Family Member</span>
                  </button>
                </div>

                {formData.family.length === 0 ? (
                  <div className="p-8 sm:p-12 text-center border-2 border-dashed border-forest/20 rounded-2xl bg-white/40 space-y-3">
                    <Users className="w-8 h-8 text-forest/40 mx-auto" />
                    <h3 className="font-serif text-xl uppercase tracking-tight text-forest">No Dependents Added Yet</h3>
                    <p className="text-xs font-mono text-forest/60 max-w-md mx-auto">
                      If you are creating an individual emergency file, you may skip this tab. Otherwise, click below to add family members.
                    </p>
                    <button
                      type="button"
                      onClick={addFamilyMember}
                      className="px-5 py-2 rounded-full bg-peach/30 text-forest border border-peach text-xs font-mono uppercase tracking-luxury hover:bg-peach/50 transition-colors cursor-pointer"
                    >
                      + Add Spouse / Child / Dependent
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {formData.family.map((member, index) => (
                      <div
                        key={member.id}
                        className="p-5 sm:p-6 rounded-2xl bg-white/60 border border-forest/15 space-y-4 shadow-sm"
                      >
                        <div className="flex items-center justify-between border-b border-forest/10 pb-3">
                          <span className="text-xs font-mono uppercase tracking-luxury font-bold text-forest flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-powder-dark text-cream text-[10px] flex items-center justify-center font-mono">
                              F{index + 1}
                            </span>
                            Family Member: {member.fullName || `Dependent #${index + 1}`}
                          </span>

                          <button
                            type="button"
                            onClick={() => removeFamilyMember(member.id)}
                            className="text-rose-dark hover:text-rose-700 text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-1.5">
                              Member Full Name
                            </label>
                            <input
                              type="text"
                              value={member.fullName}
                              onChange={e => updateFamilyMember(member.id, 'fullName', e.target.value)}
                              className="w-full px-4 py-2.5 rounded-xl bg-white border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-1.5">
                              Relationship
                            </label>
                            <select
                              value={member.relationship}
                              onChange={e => updateFamilyMember(member.id, 'relationship', e.target.value)}
                              className="w-full px-4 py-2.5 rounded-xl bg-white border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors"
                            >
                              {['Spouse', 'Child', 'Parent', 'Sibling', 'Dependent'].map(r => (
                                <option key={r} value={r}>{r}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-1.5">
                              Blood Group
                            </label>
                            <select
                              value={member.bloodType}
                              onChange={e => updateFamilyMember(member.id, 'bloodType', e.target.value)}
                              className="w-full px-4 py-2.5 rounded-xl bg-white border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors"
                            >
                              {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'Unknown'].map(bt => (
                                <option key={bt} value={bt}>{bt}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-1.5">
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              value={member.dob}
                              onChange={e => updateFamilyMember(member.id, 'dob', e.target.value)}
                              className="w-full px-4 py-2.5 rounded-xl bg-white border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-1.5">
                              Allergies
                            </label>
                            <input
                              type="text"
                              value={member.allergies}
                              onChange={e => updateFamilyMember(member.id, 'allergies', e.target.value)}
                              className="w-full px-4 py-2.5 rounded-xl bg-white border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-1.5">
                              Conditions / Medications
                            </label>
                            <input
                              type="text"
                              value={member.medicalConditions}
                              onChange={e => updateFamilyMember(member.id, 'medicalConditions', e.target.value)}
                              className="w-full px-4 py-2.5 rounded-xl bg-white border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 04 HEALTHCARE & INSURANCE TAB */}
            {activeFormTab === 'healthcare' && (
              <div className="space-y-6">
                <div className="border-b border-forest/10 pb-4">
                  <span className="text-xs font-mono uppercase tracking-luxury text-forest/50 block">Section 04</span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-forest uppercase tracking-tight">
                    Healthcare Providers & Directives
                  </h2>
                  <p className="text-xs text-forest/60 font-mono mt-1">
                    Preferred medical facilities, attending physician, and insurance coverage.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Preferred Emergency Hospital / Trauma Center
                    </label>
                    <input
                      type="text"
                      value={formData.healthcare.preferredHospital}
                      onChange={e => setFormData(p => ({ ...p, healthcare: { ...p.healthcare, preferredHospital: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Hospital Location / Address
                    </label>
                    <input
                      type="text"
                      value={formData.healthcare.hospitalAddress}
                      onChange={e => setFormData(p => ({ ...p, healthcare: { ...p.healthcare, hospitalAddress: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Primary Care Physician (PCP)
                    </label>
                    <input
                      type="text"
                      value={formData.healthcare.primaryPhysician}
                      onChange={e => setFormData(p => ({ ...p, healthcare: { ...p.healthcare, primaryPhysician: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Physician Direct Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.healthcare.physicianPhone}
                      onChange={e => setFormData(p => ({ ...p, healthcare: { ...p.healthcare, physicianPhone: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Health Insurance Carrier
                    </label>
                    <input
                      type="text"
                      value={formData.healthcare.insuranceProvider}
                      onChange={e => setFormData(p => ({ ...p, healthcare: { ...p.healthcare, insuranceProvider: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Policy ID & Group Number
                    </label>
                    <input
                      type="text"
                      value={formData.healthcare.policyNumber}
                      onChange={e => setFormData(p => ({ ...p, healthcare: { ...p.healthcare, policyNumber: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono uppercase tracking-luxury text-forest/70 mb-2">
                      Advance Directives, DNR Instructions, or Religious Directives
                    </label>
                    <textarea
                      rows={3}
                      value={formData.healthcare.emergencyDirectives}
                      onChange={e => setFormData(p => ({ ...p, healthcare: { ...p.healthcare, emergencyDirectives: e.target.value } }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-forest/20 text-forest text-sm font-sans focus:outline-none focus:border-forest transition-colors shadow-inner"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 05 DOCUMENT UPLOAD TAB */}
            {activeFormTab === 'upload' && (
              <div className="space-y-6">
                <div className="border-b border-forest/10 pb-4">
                  <span className="text-xs font-mono uppercase tracking-luxury text-forest/50 block">Section 05</span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-forest uppercase tracking-tight">
                    Supporting Documents & ID Upload
                  </h2>
                  <p className="text-xs text-forest/60 font-mono mt-1">
                    Upload copies of insurance cards, vaccination records, living wills, or official medical IDs.
                  </p>
                </div>

                {/* Upload Drag & Drop Zone */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-forest/30 hover:border-forest rounded-3xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-300 bg-white/40 hover:bg-white/70 group"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <div className="w-14 h-14 rounded-full bg-peach/30 border border-peach flex items-center justify-center mx-auto text-forest mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-6 h-6 text-peach-dark" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-forest uppercase tracking-tight">
                    Click to Select or Drag Files Here
                  </h3>
                  <p className="text-xs font-mono text-forest/60 mt-2 max-w-sm mx-auto">
                    Supports PDF, PNG, JPG, or DOC documents up to 25MB each.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-forest text-[11px] font-mono border border-forest/20 shadow-sm">
                    <Lock className="w-3 h-3 text-forest/60" />
                    <span>Protected by REVERZN Vault Directives</span>
                  </div>
                </div>

                {/* Uploaded Files List */}
                {formData.files.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase tracking-luxury text-forest/60 block">
                      Uploaded Documents ({formData.files.length}):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {formData.files.map(file => (
                        <div
                          key={file.id}
                          className="p-3.5 rounded-xl bg-white/70 border border-forest/15 flex items-center justify-between shadow-sm"
                        >
                          <div className="flex items-center gap-3 overflow-hidden">
                            <FileText className="w-4 h-4 text-forest/60 shrink-0" />
                            <div className="truncate">
                              <p className="text-xs font-mono font-medium text-forest truncate">{file.name}</p>
                              <p className="text-[10px] font-mono text-forest/50">{(file.size / 1024).toFixed(1)} KB</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(file.id)}
                            className="text-rose-dark hover:text-rose-700 p-1 transition-colors cursor-pointer"
                            title="Remove file"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* FORM FOOTER CONTROLS */}
            <div className="pt-6 border-t border-forest/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                {activeFormTab !== 'primary' && (
                  <button
                    type="button"
                    onClick={handlePrevTab}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-luxury border border-forest/20 text-forest hover:bg-white/80 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous Tab
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {activeFormTab !== 'upload' ? (
                  <button
                    type="button"
                    onClick={handleNextTab}
                    className="flex-1 sm:flex-initial px-6 py-3 rounded-full text-xs font-mono uppercase tracking-luxury font-medium bg-forest text-cream hover:bg-forest/90 transition-all flex items-center justify-center gap-2 shadow-elevated cursor-pointer"
                  >
                    <span>Next Section</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleProceedToReview}
                    className="flex-1 sm:flex-initial px-7 py-3 rounded-full text-xs font-mono uppercase tracking-luxury font-bold bg-forest text-cream hover:bg-forest/90 transition-all flex items-center justify-center gap-2 shadow-elevated cursor-pointer"
                  >
                    <Check className="w-4 h-4 text-peach-light" />
                    <span>Proceed to Review & Confirm</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: REVIEW & CONFIRM SCREEN                                          */}
        {/* ========================================================================= */}
        {viewState === 'review' && (
          <div className="glass-panel rounded-3xl border border-white/90 p-6 sm:p-10 shadow-elevated space-y-8 animate-fade-in bg-white/40 backdrop-blur-xl">
            <div className="border-b border-forest/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-luxury text-forest/60 mb-1">
                <CheckCircle2 className="w-4 h-4 text-forest" />
                <span>Verification & Confirmation Protocol</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest uppercase tracking-tight">
                REVIEW & CONFIRM CHANGES
              </h2>
              <p className="text-xs font-mono text-forest/70 mt-1">
                Carefully review every section below. Before proceeding to official dossier download, verify that all emergency information is accurate.
              </p>
            </div>

            {/* REVIEW SECTIONS SUMMARY CARDS */}
            <div className="space-y-6">
              {/* Review 01: Primary Member */}
              <div className="p-6 rounded-2xl bg-white/80 border border-forest/15 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-forest/10 pb-3">
                  <span className="font-serif font-bold text-lg text-forest uppercase">
                    01 • Primary Member Details
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setViewState('form');
                      setActiveFormTab('primary');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-luxury text-peach-dark hover:underline font-bold cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" /> Edit Section
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-forest/50 block uppercase text-[10px]">Full Name</span>
                    <span className="font-bold text-forest text-sm">{formData.primary.fullName || '—'}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 block uppercase text-[10px]">Date of Birth</span>
                    <span className="text-forest">{formData.primary.dob || '—'}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 block uppercase text-[10px]">Blood Group</span>
                    <span className="text-peach-dark font-bold text-sm">{formData.primary.bloodType}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 block uppercase text-[10px]">Organ Donor</span>
                    <span className="text-forest">{formData.primary.organDonor ? 'Yes' : 'No'}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 block uppercase text-[10px]">Phone</span>
                    <span className="text-forest">{formData.primary.phone || '—'}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 block uppercase text-[10px]">Email</span>
                    <span className="text-forest">{formData.primary.email || '—'}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-forest/50 block uppercase text-[10px]">Address</span>
                    <span className="text-forest">{formData.primary.address || '—'}</span>
                  </div>
                  <div className="col-span-2 sm:col-span-4 p-3 rounded-xl bg-peach/15 border border-peach/30">
                    <span className="text-peach-dark font-bold block uppercase text-[10px]">Critical Allergies</span>
                    <span className="text-forest font-sans">{formData.primary.allergies || 'No allergies declared.'}</span>
                  </div>
                </div>
              </div>

              {/* Review 02: Emergency Contacts */}
              <div className="p-6 rounded-2xl bg-white/80 border border-forest/15 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-forest/10 pb-3">
                  <span className="font-serif font-bold text-lg text-forest uppercase">
                    02 • Emergency Contacts Hierarchy ({formData.contacts.length})
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setViewState('form');
                      setActiveFormTab('contacts');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-luxury text-peach-dark hover:underline font-bold cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" /> Edit Section
                  </button>
                </div>

                <div className="space-y-3">
                  {formData.contacts.map((contact, idx) => (
                    <div key={contact.id} className="p-3.5 rounded-xl bg-cream-50 border border-forest/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                      <div>
                        <span className="font-bold text-forest text-sm">#{idx + 1} {contact.name || 'Unnamed Contact'}</span>
                        <span className="text-forest/60 ml-2">({contact.relationship})</span>
                      </div>
                      <div className="flex items-center gap-4 text-forest/80">
                        <span>Tel: <strong>{contact.phone || '—'}</strong></span>
                        {contact.altPhone && <span>Alt: {contact.altPhone}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review 03: Family Members */}
              <div className="p-6 rounded-2xl bg-white/80 border border-forest/15 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-forest/10 pb-3">
                  <span className="font-serif font-bold text-lg text-forest uppercase">
                    03 • Family Members & Dependents ({formData.family.length})
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setViewState('form');
                      setActiveFormTab('family');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-luxury text-peach-dark hover:underline font-bold cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" /> Edit Section
                  </button>
                </div>

                {formData.family.length === 0 ? (
                  <p className="text-xs font-mono text-forest/50 italic">No family dependents added.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {formData.family.map(f => (
                      <div key={f.id} className="p-3 rounded-xl bg-cream-50 border border-forest/10 text-xs font-mono space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-forest">{f.fullName}</span>
                          <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-sage/30 text-forest">{f.relationship}</span>
                        </div>
                        <div className="text-forest/70 text-[11px]">
                          DOB: {f.dob || '—'} • Blood: <strong>{f.bloodType}</strong>
                        </div>
                        {f.allergies && (
                          <div className="text-[11px] text-peach-dark">Allergies: {f.allergies}</div>
                        )}
                        {f.medicalConditions && (
                          <div className="text-[11px] text-forest/60">Notes: {f.medicalConditions}</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Review 04: Healthcare & Insurance */}
              <div className="p-6 rounded-2xl bg-white/80 border border-forest/15 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-forest/10 pb-3">
                  <span className="font-serif font-bold text-lg text-forest uppercase">
                    04 • Healthcare Providers & Directives
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setViewState('form');
                      setActiveFormTab('healthcare');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-luxury text-peach-dark hover:underline font-bold cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" /> Edit Section
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-forest/50 block uppercase text-[10px]">Preferred Hospital</span>
                    <span className="text-forest font-medium">{formData.healthcare.preferredHospital || '—'}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 block uppercase text-[10px]">Primary Physician</span>
                    <span className="text-forest font-medium">{formData.healthcare.primaryPhysician || '—'}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 block uppercase text-[10px]">Insurance Provider</span>
                    <span className="text-forest font-medium">{formData.healthcare.insuranceProvider || '—'}</span>
                  </div>
                  <div>
                    <span className="text-forest/50 block uppercase text-[10px]">Policy & Group Number</span>
                    <span className="text-forest font-medium">{formData.healthcare.policyNumber || '—'}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-forest/50 block uppercase text-[10px]">Advance Directives</span>
                    <span className="text-forest font-sans">{formData.healthcare.emergencyDirectives || 'Standard lifesaving authorization.'}</span>
                  </div>
                </div>
              </div>

              {/* Review 05: Attached Documents */}
              <div className="p-6 rounded-2xl bg-white/80 border border-forest/15 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-forest/10 pb-3">
                  <span className="font-serif font-bold text-lg text-forest uppercase">
                    05 • Attached Documents ({formData.files.length})
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setViewState('form');
                      setActiveFormTab('upload');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-luxury text-peach-dark hover:underline font-bold cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" /> Edit Section
                  </button>
                </div>

                {formData.files.length === 0 ? (
                  <p className="text-xs font-mono text-forest/50 italic">No supporting documents attached.</p>
                ) : (
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {formData.files.map(f => (
                      <span key={f.id} className="px-3 py-1.5 rounded-full bg-cream-100 border border-forest/20 text-forest flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-forest/60" />
                        {f.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* MANDATORY CONFIRMATION LEGAL CHECKBOX */}
            <div className="p-5 rounded-2xl bg-butter/30 border border-butter flex items-start gap-3 shadow-sm">
              <input
                type="checkbox"
                id="confirmChangesPage"
                checked={confirmedByMember}
                onChange={e => setConfirmedByMember(e.target.checked)}
                className="w-5 h-5 rounded text-forest border-forest/40 focus:ring-forest mt-0.5 cursor-pointer shrink-0"
              />
              <label htmlFor="confirmChangesPage" className="text-xs font-sans text-forest leading-relaxed cursor-pointer select-none">
                <strong>I hereby review and confirm all changes</strong> made to this Family & Emergency Life File. I declare that the personal, medical, and contact information is accurate, up-to-date, and authorized for emergency medical use.
              </label>
            </div>

            {/* ACTION CONTROLS */}
            <div className="pt-4 border-t border-forest/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setViewState('form')}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-mono uppercase tracking-luxury border border-forest/20 text-forest hover:bg-white transition-all text-center cursor-pointer"
              >
                ← Back to Edit Form
              </button>

              <button
                type="button"
                onClick={handleConfirmAndProceed}
                disabled={!confirmedByMember}
                className={`w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-mono uppercase tracking-luxury font-bold transition-all flex items-center justify-center gap-2 shadow-elevated ${
                  confirmedByMember
                    ? 'bg-forest text-cream hover:bg-forest/90 cursor-pointer scale-[1.01]'
                    : 'bg-forest/30 text-cream/70 cursor-not-allowed'
                }`}
              >
                <Check className="w-4 h-4 text-peach-light" />
                <span>Confirm & Seal Emergency File</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: PAYMENT GATE & SEALED DOWNLOAD SCREEN                            */}
        {/* ========================================================================= */}
        {viewState === 'payment-gate' && (
          <div className="glass-panel rounded-3xl border border-white/90 p-8 sm:p-14 shadow-elevated space-y-8 animate-fade-in text-center max-w-2xl mx-auto bg-white/50 backdrop-blur-xl">
            <div className="w-20 h-20 rounded-full bg-peach/30 border border-peach flex items-center justify-center mx-auto text-forest shadow-md">
              <FileCheck className="w-10 h-10 text-peach-dark" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-luxury text-sage-dark font-bold block mb-2">
                ✓ Emergency File Confirmed & Cryptographically Sealed
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-forest uppercase tracking-tight">
                FAMILY EMERGENCY LIFE PACKET
              </h2>
              <p className="text-xs font-mono text-forest/60 mt-1">
                Dossier Identifier: {formData.vaultId} • Prepared for {formData.primary.fullName}
              </p>
            </div>

            {/* DOWNLOAD GATE NOTICE & PRICING */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/80 space-y-4 text-left shadow-soft-luxury bg-white/70">
              <div className="flex items-center justify-between pb-3 border-b border-forest/10">
                <span className="font-serif font-bold text-forest text-lg flex items-center gap-2">
                  <Lock className="w-4 h-4 text-peach-dark" /> Official Encrypted Download Packet
                </span>
                <span className="text-xs font-mono uppercase tracking-luxury px-3.5 py-1 rounded-full bg-butter/30 text-forest border border-butter font-bold">
                  $29 • One-Time Vault
                </span>
              </div>

              <div className="text-xs text-forest/80 font-sans leading-relaxed space-y-2">
                <p>
                  Includes the official, watermark-sealed REVERZN Emergency Medical Dossier, Wallet Emergency ID Cards for your household, and secure offline emergency directives.
                </p>
                <div className="p-3.5 rounded-xl bg-powder/30 border border-powder text-forest/90 font-mono text-[11px]">
                  <strong>Payment Gate Notice:</strong> Payment gateway integration is scheduled for an upcoming release. In accordance with your instructions, payment is currently simulated for review and testing.
                </div>
              </div>

              {/* Simulated Payment Unlock Button */}
              {!paymentSimulated ? (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPaymentSimulated(true);
                      try {
                        confetti({
                          particleCount: 60,
                          spread: 70,
                          origin: { y: 0.65 },
                          colors: ['#E9BFAF', '#C6D5BC', '#E8D58E'],
                        });
                      } catch (e) {}
                    }}
                    className="w-full py-4 rounded-full bg-forest text-cream text-xs uppercase tracking-luxury font-medium hover:bg-forest/90 transition-all shadow-elevated flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-peach-light" />
                    <span>Authorize & Unlock Download (Simulate Payment)</span>
                  </button>
                  <p className="text-center text-[10px] font-mono text-forest/50 mt-2">
                    Click above to test instant dossier generation and printable packet download.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-sage/30 border border-sage text-forest text-xs font-mono flex items-center justify-between shadow-sm">
                  <span className="flex items-center gap-2 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-forest" />
                    Payment Authorized • Vault Unlocked
                  </span>
                  <span className="text-[10px] uppercase font-bold text-forest/80 px-2 py-0.5 rounded bg-white">Ready for Download</span>
                </div>
              )}
            </div>

            {/* DOWNLOAD ACTION BUTTON */}
            <div className="space-y-4 pt-2">
              <button
                type="button"
                onClick={handleDownloadEmergencyFile}
                className="w-full py-4 sm:py-5 rounded-full text-xs font-mono uppercase tracking-luxury font-bold transition-all flex items-center justify-center gap-2 shadow-elevated bg-forest text-cream hover:bg-forest/90 cursor-pointer scale-[1.01]"
              >
                <Printer className="w-4 h-4" />
                <span>Download & Print Official Emergency Dossier (PDF)</span>
              </button>

              <a
                href="/emergency-file.html"
                className="w-full py-3.5 rounded-full text-xs font-mono uppercase tracking-luxury font-medium transition-all flex items-center justify-center gap-2 border border-peach-dark bg-peach/25 text-forest hover:bg-peach/45 cursor-pointer"
              >
                <Download className="w-4 h-4 text-peach-dark" />
                <span>Open Instant Vector Wallet Card & Tracker Suite</span>
              </a>

              <div className="flex items-center justify-center gap-4 text-xs font-mono text-forest/60 pt-2">
                <button
                  type="button"
                  onClick={() => setViewState('review')}
                  className="hover:text-forest transition-colors underline underline-offset-4 cursor-pointer"
                >
                  ← Return to Review
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={onBackToHome}
                  className="hover:text-forest transition-colors underline underline-offset-4 cursor-pointer"
                >
                  Return to REVERZN Home
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* MINIMAL FOOTER FOR EMERGENCY FILE PAGE */}
      <footer className="bg-cream py-10 border-t border-forest/10 text-xs font-mono tracking-luxury text-forest/50 uppercase mt-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl tracking-tight text-forest normal-case">
              REVER<span className="italic font-light text-forest/70">ZN</span>
            </span>
            <span className="text-forest/30">•</span>
            <span className="text-[11px] text-forest/60">Family Emergency Life Vault & Directives</span>
          </div>

          <div className="text-[11px] text-forest/40">
            © 2026 REVERZN Inc. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
