import { Router } from 'express';
import { addPatient, listPatients } from '../controllers/patientController';

const router = Router();

// Route to add a new patient
router.post('/patient', addPatient);

// Route to list all patients
router.get('/patients', listPatients);

export default router;