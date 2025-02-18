require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");


const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

const PORT = process.env.PORT || 5000;

app.listen(PORT,() =>console.log('Server running on port 5000'));
