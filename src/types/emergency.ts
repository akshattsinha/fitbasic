export interface PrimaryMember {
  fullName: string;
  dob: string;
  bloodType: string;
  phone: string;
  email: string;
  address: string;
  allergies: string;
  chronicConditions: string;
  currentMedications: string;
  organDonor: boolean;
}

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  altPhone?: string;
  email?: string;
  address?: string;
  isPriority: boolean;
}

export interface FamilyMember {
  id: string;
  fullName: string;
  relationship: string;
  dob: string;
  bloodType: string;
  allergies: string;
  medicalConditions: string;
  medications: string;
}

export interface HealthcareDetails {
  preferredHospital: string;
  hospitalAddress?: string;
  primaryPhysician: string;
  physicianPhone: string;
  insuranceProvider: string;
  policyNumber: string;
  groupNumber?: string;
  emergencyDirectives: string;
}

export interface UploadedFileItem {
  id: string;
  name: string;
  size: number;
  type: string;
  dataUrl?: string;
}

export interface EmergencyFormData {
  primary: PrimaryMember;
  contacts: EmergencyContact[];
  family: FamilyMember[];
  healthcare: HealthcareDetails;
  files: UploadedFileItem[];
  confirmedAt?: string;
  vaultId?: string;
}

