const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const cors = require('cors')
const port = 2500
const db = require('./queries')


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(cors())

app.get("/",(request,response) => {
    response.json({info:"Node.js, Express, and Postgres: API"})

})

app.get("/importantCities", db.getCities)
app.post("/importantCities", db.postCity)
app.get("/importantCities/:id", db.getCityById)
app.put("/importantCities/:id", db.updateCity)
app.delete("/importantCities/:id", db.deleteCity)



app.listen(port,() => {
    console.log(`App running on port ${port}`)
})

