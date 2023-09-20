const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
const cors = require("cors")


app.use(cors({
  origin: '*'
}))

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
//Hope this backend is alligned with frontend

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})



app.get('/users', db.getUsers)

app.post('/users/login', db.loginUser)


app.get('/users/:id', db.getUserById)

app.post('/users/register', db.createUser)

// app.post('/users/login', db.createUser)

app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.get('/breakefast', db.getBreakefast)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})