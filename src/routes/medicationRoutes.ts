import {Router} from 'express';
import { addMedication, updateMedicationQuantity, removeExpiredMedications, listMedications } from '../controllers/medicationController';

const router = Router();

router.post('/medication', addMedication);

router.put('/medication/:id', updateMedicationQuantity);

router.delete('/medications/expired', removeExpiredMedications);

router.get('/medications', listMedications);

export default router;