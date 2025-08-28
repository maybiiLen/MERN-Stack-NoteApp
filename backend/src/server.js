import express from 'express';
import notesRoute from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB()

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/notes", notesRoute);

app.listen(PORT, () => {
  console.log("Server is running on port :", PORT);
});


