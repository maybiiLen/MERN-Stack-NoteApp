const express = require("express");
const app = express();

app.get("/api/notes", (req,res) => {
    res.send("you got 5 notes");
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
