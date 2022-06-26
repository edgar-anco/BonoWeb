import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import bondRoutes from './routes/bonds.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Every route inside the bondRoutes is gonna start in /bonds
app.use('/bonds', bondRoutes);

const CONNECTION_URL = 'mongodb+srv://edanco:edanco123@bonoweb.lktkm.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));

// No longer necesary with Mongoose 6
//mongoose.set('useFindAndModify', false);