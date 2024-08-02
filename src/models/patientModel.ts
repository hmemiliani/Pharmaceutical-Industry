import pool from '../config/db';

// Interface for a Patient
export interface Patient {
    id: number;
    name: string;
    age: number;
    medicalHistory: string;
}

// Class to manage Patients
export class PatientRegistry {
    // Method to register a new patient
    static async addPatient(patient: Patient): Promise<void> {
        await pool.query('INSERT INTO patients (name, age, medical_history) VALUES (?, ?, ?)',
            [patient.name, patient.age, patient.medicalHistory]);
    }

    // Method to list all patients
    static async listPatients(): Promise<Patient[]> {
        const [rows] = await pool.query('SELECT * FROM patients');
        return rows as Patient[];
    }
}
