const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// middleware
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/setcookies', (req, res) => {
    res.cookie('Name', 'Kevin', {
        maxAge: 5000,
        httpOnly: true,
        secure: true,
    })
    res.send('setting cookie')
})

app.get('/getcookies', (req, res) => {
    console.log(req.cookies);
    res.send('reading cookies')
})

app.get('/getcookies', (req, res) => {
    console.log(req.cookies);
    res.clearCookie('Name');
    res.send('deleting cookies')
})


app.listen(3000, ()=>{
    console.log('Server port con running 3000');
} );