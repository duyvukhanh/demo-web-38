const express = require('express')
const app = express()
const path = require('path')
const staticFolderPath = path.join(__dirname, 'public')

const port = 9000

app.use('/', express.static(staticFolderPath))

app.listen(port, (err) => console.log(err || 'Server open at port ' + port))