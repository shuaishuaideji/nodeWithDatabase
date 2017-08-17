const express = require('express');

const PORT = 3003;

/* eslint-disable new-cap */
const app = new express();
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/dist`));


const serverRenderMiddleware = require('./dist/serverRenderMiddleware.js'); // eslint-disable-line
app.use(serverRenderMiddleware);
app.get('/', function (req, res) {
    res.render('index', {
        serverRenderData: req.serverRenderData
    });
});

app.listen(PORT, () => {
    console.log('Server listening on port');
});
