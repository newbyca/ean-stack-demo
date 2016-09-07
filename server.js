var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api/hiya', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ hiya: 'Hiya! ' + new Date().getTime() }));
});

app.listen(3000, function () {
    console.log('browse ean-stack-demo at http://localhost:3000');
});