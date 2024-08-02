import express from 'express';
import medicationRoutes from './routes/medicationRoutes';
import patientRoutes from './routes/patientRoutes';
import prescriptionRoutes from './routes/prescriptionRoutes';

const app = express();
const port = 3000;

app.use(express.json());

// Use the medication routes
app.use('/api', medicationRoutes);

// Use the patient routes
app.use('/api', patientRoutes);

// Use the prescription routes
app.use('/api', prescriptionRoutes);

app.use('/', (req, res) => {
    res.send('Welcome to Pharmaceutical API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});