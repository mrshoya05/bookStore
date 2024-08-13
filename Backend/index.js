import express from "express";
import dotenv from "dotenv";
import bookRoute from './Route/book.route.js'
import userRoute from './Route/userRoute.js'
import cors from 'cors';
import { Connectdb } from "./database/connectDB.js";


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


const PORT = process.env.PORT



// connect to mongoDB
Connectdb();

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute )


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});