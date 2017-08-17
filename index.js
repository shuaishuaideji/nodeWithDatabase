var path = require('path');
var express = require('express');



var app = new express();



app.use(express.static(path.join(__dirname, 'dist')));

app.listen(3000, function(err) {
    if (err) {
        console.error(err)
    }
})
