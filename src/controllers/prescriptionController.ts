import { Request, Response } from 'express';
import { PrescriptionRegistry, Prescription } from '../models/prescriptionModel';

// Controller to handle adding a new prescription
export const addPrescription = async (req: Request, res: Response) => {
    const { patientId, medicationId, dose, frequency, duration } = req.body;
    const newPrescription: Prescription = {
        id: Date.now(),
        patientId,
        medicationId,
        dose,
        frequency,
        duration
    };
    try {
        await PrescriptionRegistry.addPrescription(newPrescription);
        res.status(201).send('Prescription added');
    } catch (error) {
        res.status(500).send('Error adding prescription');
    }
};

// Controller to handle listing all prescriptions for a patient
export const listPrescriptions = async (req: Request, res: Response) => {
    const patientId = parseInt(req.params.patientId, 10);
    try {
        const prescriptions = await PrescriptionRegistry.listPrescriptions(patientId);
        res.json(prescriptions);
    } catch (error) {
        res.status(500).send('Error fetching prescriptions');
    }
};
