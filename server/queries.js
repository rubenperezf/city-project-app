const Pool = require("pg").Pool
const pool = new  Pool({
    host:"localhost",
    database: "cities",
    port: 5431,
})

const getCities = (request, response) => {
    pool.query("SELECT * FROM importantCities ORDER BY id ASC", (error, results) => {
        if (error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const postCity = (request, response) => {
    const {name, continent, country, info, imageUrl} = request.body

    pool.query("INSERT INTO importantCities (name, continent, country, info, imageUrl) VALUES ($1, $2, $3, $4, $5)", [name, continent, country, info, imageUrl], (error, result) => {
        if (error) {
            throw error
        }
        response.status(201).send(`City added with ID: ${result.insertId}`)
    })
}

const getCityById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query("SELECT * FROM importantCities WHERE id =$1", [id], (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateCity = (request, response) => {
    const id = parseInt(request.params.id)
    const {name, continent, country, info, imageUrl} = request.body

    pool.query("UPDATE importantCities SET name =$1, continent =$2, country =$3, info =$4, imageUrl =$5 WHERE id =$6",  [name, continent, country, info, imageUrl, id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`City modifies with ID: ${id} for ${results}`)
    })
}

const deleteCity = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM importantCities WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`City deleted with ID: ${id} for ${results}`)
    })
  }

module.exports = { getCities, postCity, getCityById, updateCity, deleteCity}