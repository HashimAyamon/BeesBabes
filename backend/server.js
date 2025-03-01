import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js'


const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json());
app.use(helmet());     //for security
app.use(cors());     //for security
app.use(morgan("dev"));   //to get consol log the requests


app.use("/api/products" ,productRoutes);


app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});