const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'digitalAppIndividual',
  password: 'Letsdoit!',
  port: 5432,
})


const getUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT firstname FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const {  firstname, lastname, email, password } = request.body
  
    pool.query('INSERT INTO users (firstname, lastname, email ,password) VALUES ($1, $2, $3, $4 ) RETURNING *', [firstname, lastname, email, password], (error, results) => {
      if (error) {
        throw error
      }
      
      const responseBody = { message : `User added with ordernumber: ${results.rows[0].id}`}
      response.status(201).json(responseBody)
    })
  }


  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const {  firstname, email } = request.body
  
    pool.query(

      'UPDATE users SET firstname = $1, email = $2 WHERE id = $3',
      //'UPDATE registration SET name = thabo, email = thabo@gmail.com WHERE id = $1',
      [ firstname, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ordernumber: ${id}`)
      }
    )
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with id: ${id}`)
    })
  }

// for breakefast

  const getBreakefast = (request, response) => {
    pool.query('SELECT * FROM breakefast  ', (error, results) => {
      if (error) {
        throw error
       
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getBreakefast,
  }










