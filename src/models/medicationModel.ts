import pool from '../config/db';

// Interface for a Medication
export interface Medication {
    id: number;
    name: string;
    quantity: number;
    expirationDate: Date;
    price: number;
}

// Class to manage the Inventory
export class Inventory {
    // Method to add a new medication
    static async addMedication(medication: Medication): Promise<void> {
        await pool.query('INSERT INTO medications (name, quantity, expiration_date, price) VALUES (?, ?, ?, ?)',
            [medication.name, medication.quantity, medication.expirationDate, medication.price]);
    }

    // Method to update the quantity of an existing medication
    static async updateQuantity(id: number, quantity: number): Promise<void> {
        await pool.query('UPDATE medications SET quantity = ? WHERE id = ?', [quantity, id]);
    }

    // Method to remove expired medications
    static async removeExpiredMedications(): Promise<void> {
        const now = new Date().toISOString().split('T')[0];
        await pool.query('DELETE FROM medications WHERE expiration_date < ?', [now]);
    }

    // Method to list all available medications
    static async listMedications(): Promise<Medication[]> {
        const [rows] = await pool.query('SELECT * FROM medications');
        return rows as Medication[];
    }
}
