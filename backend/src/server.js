import express from 'express';
const app = express();
import notesRoute from "./routes/notesRoutes.js";

app.use("/api/notes", notesRoute);



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
