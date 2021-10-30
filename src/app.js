const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const authRoutes = require('./routes/auth.routes')


//confguraciones
app.set('port', process.env.PORT || 3000)


//middlewares
app.use(morgan('dev'))
app.use(cors())

//Rutas
app.use('/auth', authRoutes)

//inicio del servidor
app.listen(app.get('port'), ()=>{

        console.log('Server running')

})