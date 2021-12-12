const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const path = require('path')
const api_helper = require('./API_helper')

app.use(cors())

app.get('/dostuff', (req, res) => {
    api_helper.make_API_call('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun-plural&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=h134kv5k9g81fcz9570z2ebogxpir9rdc4g2a1mzy9mamqrqo')
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
