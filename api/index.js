import express from "express";
import cors from "cors";
import path from "path";
const app = express();
const port = 3001;

app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
});

// Handle POST requests to "/greet"
app.post("/api/greet", (req, res) => {
  res.status(200).json({ msg: `heyy, ${req.body.name}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
