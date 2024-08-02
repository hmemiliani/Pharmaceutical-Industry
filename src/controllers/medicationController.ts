import { Request, Response } from 'express';
import { Inventory, Medication } from '../models/medicationModel';

// Controller to handle adding a new medication
export const addMedication = async (req: Request, res: Response) => {
    const { name, quantity, expirationDate, price } = req.body;
    const newMedication: Medication = {
        id: Date.now(),
        name,
        quantity,
        expirationDate: new Date(expirationDate),
        price
    };
    try {
        await Inventory.addMedication(newMedication);
        res.status(201).send('Medication added');
    } catch (error) {
        res.status(500).send('Error adding medication');
    }
};

// Controller to handle updating the quantity of a medication
export const updateMedicationQuantity = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const { quantity } = req.body;
    try {
        await Inventory.updateQuantity(id, quantity);
        res.send('Medication quantity updated');
    } catch (error) {
        res.status(500).send('Error updating medication quantity');
    }
};

// Controller to handle removing expired medications
export const removeExpiredMedications = async (req: Request, res: Response) => {
    try {
        await Inventory.removeExpiredMedications();
        res.send('Expired medications removed');
    } catch (error) {
        res.status(500).send('Error removing expired medications');
    }
};

// Controller to handle listing all medications
export const listMedications = async (req: Request, res: Response) => {
    try {
        const medications = await Inventory.listMedications();
        res.json(medications);
    } catch (error) {
        res.status(500).send('Error fetching medications');
    }
};
