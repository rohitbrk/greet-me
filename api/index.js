const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Handle POST requests to "/greet"
app.post("/api/greet", (req, res) => {
  res.status(200).json({ msg: `hey ${req.body.name}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
