const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const app = express()
const authRoutes = require('./routes/auth.routes')

//confguraciones
app.set('port', process.env.PORT || 3000)
mongoose.connect(process.env.DB_STRING)
.then(db => console.log('Connected to Mongo'))
.catch(err => console.log(err)) 

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({
        extended: false
}))

//Rutas
app.use('/auth', authRoutes)

//inicio del servidor
app.listen(app.get('port'), ()=>{

        console.log('Server running')

})