
const express = require('express')
const app = express()
const port = 3000
const testRoute = require('./routes/myTestRoutes')
const calculatorRoute = require('./routes/calculatorRoute')
const friendRoutes = require('./routes/friendRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// parse requests of content-type - 
app.use(express.json())

app.use('/', express.static('public'))

app.use('/mytests', testRoute)

app.use('/calculator', calculatorRoute)

app.use('/friends', friendRoutes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`)
})