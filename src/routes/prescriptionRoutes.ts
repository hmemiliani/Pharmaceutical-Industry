import { Router } from 'express';
import { addPrescription, listPrescriptions } from '../controllers/prescriptionController';

const router = Router();

// Route to add a new prescription
router.post('/prescription', addPrescription);

// Route to list all prescriptions for a patient
router.get('/prescriptions/:patientId', listPrescriptions);

export default router;