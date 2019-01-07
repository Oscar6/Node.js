var express = require('express');
var app = express();

app.get('/', (req, res, next) => {
    // res.send('Hello World!')

    req.msg = 'hello world';
    next();
},
(req, res, next)=>{
    req.msg += " this is a great day";
    next();
},
(req, res)=>{
    res.send(req.msg)
}
);

app.get('/myFile', (req, res)=>{
    res.sendFile('myFile.html')
})

app.get('/shoe', (req, res) => {
    res.send('shoes are needed')
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});