const express = require('express');

const PORT = 3003;
const webpackMiddleware = require("webpack-dev-middleware");
const config = require('./webpack.config');
const webpack = require('webpack');

/* eslint-disable new-cap */
const app = new express();
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/dist`));


// const serverRenderMiddleware = require('./dist/serverRenderMiddleware.js'); // eslint-disable-line
// app.use(serverRenderMiddleware);
app.get('*', function (req, res) {
    res.render('index');
});

app.listen(PORT, () => {
    console.log('Server listening on port');
});


