const express = require('express');
require('dotenv').config();
const { connectMongoDB } = require('./connection');

const app = express();
const port = 3000;

// Connect to MongoDB
connectMongoDB(process.env.MongoDB_URL)

// Middleware
app.use(express.json());

// Routes
const postRoutes = require("./Routes/postRoutes");
const getRoutes = require("./Routes/getRoutes");
const putRoutes = require("./Routes/putRoutes");
const searchRoutes = require("./Routes/searchRoutes");

app.use("/api/post", postRoutes);
app.use("/api/get", getRoutes);
app.use("/api/put", putRoutes);
app.use("/api/search", searchRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});     

app.listen(port, () => {           
  console.log(`Server is running on http://localhost:${port}`);
}); 