import pool from '../config/db';

// Interface for a Prescription
export interface Prescription {
    id: number;
    patientId: number;
    medicationId: number;
    dose: string;
    frequency: string;
    duration: string;
}

// Class to manage Prescriptions
export class PrescriptionRegistry {
    // Method to add a prescription to a patient
    static async addPrescription(prescription: Prescription): Promise<void> {
        await pool.query('INSERT INTO prescriptions (patient_id, medication_id, dose, frequency, duration) VALUES (?, ?, ?, ?, ?)',
            [prescription.patientId, prescription.medicationId, prescription.dose, prescription.frequency, prescription.duration]);
    }

    // Method to list all prescriptions for a patient
    static async listPrescriptions(patientId: number): Promise<Prescription[]> {
        const [rows] = await pool.query('SELECT * FROM prescriptions WHERE patient_id = ?', [patientId]);
        return rows as Prescription[];
    }

    // Method to list all prescriptions
    static async listAllPrescriptions(): Promise<Prescription[]> {
        const [rows] = await pool.query('SELECT * FROM prescriptions');
        return rows as Prescription[];
    }
}
