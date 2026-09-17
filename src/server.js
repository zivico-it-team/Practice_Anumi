const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./config/db'); // <--- Meka me widihata brackets (destructuring) danna oni

dotenv.config();
connectDB(); // MySQL connect function eka call karanawa

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server eka run wenawa port ${PORT} eke...`);
});