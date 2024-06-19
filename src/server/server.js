require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userRoute = require('./routes/users');
app.use('/app/users', userRoute);

const orderRoute = require('./routes/orders')
app.use('/app/orders',orderRoute)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
