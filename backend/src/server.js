import express from 'express';
import notesRoute from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // remove trailing slash to match browser origin exactly
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
  })
);

// simple request logger
app.use((req,res,next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.use(express.json()); // this middleware parses incoming JSON requests
//our simple custom middleware
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);

app.use("/api/notes", notesRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port :", PORT);
  });
});
