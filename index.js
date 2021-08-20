const express = require('express')

const app = new express()

app.get('/', (req,res) => {
    res.send('Hello')
})

app.listen(5000, () => {
    console.log('Server is on port 5000');
})