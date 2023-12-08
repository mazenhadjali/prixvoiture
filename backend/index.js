const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors');

dotenv.config();



const app = express()

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json())

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/prixvoituretest");
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => { console.log('Connected to MongoDB'); })

const authroutes = require("./routes/auth.routes");
const fichetechniqueroutes = require("./routes/fichetechnique.routes");
const marqueroutes = require("./routes/marque.routes");
const modeleroutes = require("./routes/modele.routes");
const versionroutes = require("./routes/version.routes");
const optionroutes = require("./routes/option.routes");

app.use("/auth", authroutes)
app.use("/fichetechniques", fichetechniqueroutes)
app.use("/marques", marqueroutes)
app.use("/modeles", modeleroutes)
app.use("/versions", versionroutes)
app.use("/options", optionroutes)

app.listen(8000, () => {
  console.log("app is running successfully on port : 8000");
  console.log("http://127.0.0.1:8000");
})