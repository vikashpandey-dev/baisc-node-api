const express = require("express");
const allroutes = require("./routes");
const cors = require("cors"); // Import the cors middleware

const app = express();

// Use the cors middleware to enable CORS for all routes
app.use(cors());
const {connectToDatabase} = require("./config/connectToDatabase");
const port = 3000;

// Connect to MongoDB (you need to have MongoDB running)
connectToDatabase();
// Middleware
app.use(express.json());

// Routes
app.use("/api", allroutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
