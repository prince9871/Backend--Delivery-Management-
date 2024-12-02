import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World');
});


// import authRoutes from './routes/auth.js';
// import orderRoutes from './routes/order.js';
// import driverRoutes from './routes/driver.js';
// import routeRoutes from './routes/route.js';

// app.use('/api/auth', authRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/drivers', driverRoutes);
// app.use('/api/routes', routeRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
