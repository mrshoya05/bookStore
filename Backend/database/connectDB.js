import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const Connectdb = () => {
    const dbname = process.env.DB_NAME 
    const uri = process.env.MONGO_URI 
    console.log(uri);
    

//     mongoose.connect(uri, { dbName: dbname })
//     .then(() => {
//         console.log("Database connected successfully!");
//     })
//     .catch((err) => {
//         console.log("Error found:", err);
//     });
// };

try {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}
};