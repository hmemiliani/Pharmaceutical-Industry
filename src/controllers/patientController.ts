import { Request, Response } from 'express';
import { PatientRegistry, Patient } from '../models/patientModel';

// Controller to handle adding a new patient
export const addPatient = async (req: Request, res: Response) => {
    const { name, age, medicalHistory } = req.body;
    const newPatient: Patient = {
        id: Date.now(),
        name,
        age,
        medicalHistory
    };
    try {
        await PatientRegistry.addPatient(newPatient);
        res.status(201).send('Patient added');
    } catch (error) {
        res.status(500).send('Error adding patient');
    }
};

// Controller to handle listing all patients
export const listPatients = async (req: Request, res: Response) => {
    try {
        const patients = await PatientRegistry.listPatients();
        res.json(patients);
    } catch (error) {
        res.status(500).send('Error fetching patients');
    }
};
