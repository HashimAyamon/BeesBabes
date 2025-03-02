import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js'
import { sql } from './config/db.js';


dotenv.config();
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json());
app.use(helmet());     //for security
app.use(cors());     //for security
app.use(morgan("dev"));   //to get consol log the requests


app.use("/api/products" ,productRoutes);


async function initDB(){
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS products(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100)NOT NULL,
      image VARCHAR(100) NOT NULL,
       price DECIMAL(10, 2) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
    `
    console.log('Database connected successfully');
    
  } catch (error) {
    console.log('failed to connect on database',error);
    
  }
}


initDB().then(()=>{
  
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
})