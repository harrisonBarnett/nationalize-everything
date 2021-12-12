require('dotenv').config() 
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const path = require('path')
const api_helper = require('./API_helper')

app.use(cors())

app.get('/dostuff', (req, res) => {
    api_helper.make_API_call(process.env.API_URL)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
})

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
    console.log(`listening on port: ${port}...`)
})
