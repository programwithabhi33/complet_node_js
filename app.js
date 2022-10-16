const express = require('express')
const app = express()
// const fs = require('fs');
const path = require('path');
const port = 3000


app.use('/static', express.static(path.join(__dirname, '/public')))


app.set('view engine', 'pug')

app.set('views', path.join(__dirname, '/public/'))



app.get('/', (req, res) => {
    res.status(200);
    // res.sendFile(path.join(__dirname, '/public/index.html'));
    res.render('index')
})


app.get('/about', (req, res) => {
    res.status(200);

    // res.sendFile(path.join(__dirname, '/public/about.html'));
    res.render('about')
})


app.get('/test', (req, res) => {
    res.status(200);
    // res.sendFile(path.join(__dirname, '/public/test.pug'));
    res.render('test', { title: 'Hey', message: 'Hello there!' })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})