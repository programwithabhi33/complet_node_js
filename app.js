const express = require('express')
const app = express()
// const fs = require('fs');
const path = require('path');
const port = 3000


app.use('/static', express.static(path.join(__dirname, '/public')))


app.get('/', (req, res) => {
    res.status(200);
    // res.send('Hello World!')
    console.log(__dirname)
    // fs.readFile(__dirname + '/public/index.html', 'utf8', (err, text) => {
    //     // console.log(err)
    //     res.send(text);
    // });
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/about', (req, res) => {
    res.status(200);
    res.send('About page')
})
app.get('/blog', (req, res) => {
    res.status(200);
    res.send('blog page')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})