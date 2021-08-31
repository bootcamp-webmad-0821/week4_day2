const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home-page.html`)
})

app.get('/popino', (req, res) => {
    res.sendFile(`${__dirname}/views/dog-page.html`)
})



app.listen(3000, () => console.log('My first app listening on port 3000! YAY!'))