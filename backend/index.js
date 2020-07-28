const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Backend executando...')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})