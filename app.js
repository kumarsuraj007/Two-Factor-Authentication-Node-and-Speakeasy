import express from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config({path:'./config/.env'})

const PORT = 5000 || process.env.port;

app.listen(PORT, () => {
    console.log(`Server is upto ${PORT}`)
});