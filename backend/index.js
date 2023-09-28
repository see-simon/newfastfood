const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3000;
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

// Routes for user management
app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users/login', db.loginUser);
app.post('/users/register', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

// Route for breakfast data
app.get('/breakfast', db.getBreakfast);

// Payment API
app.post('/payment', db.payment);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
