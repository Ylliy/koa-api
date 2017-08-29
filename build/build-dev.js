var Webpack = require('webpack');
var config = require('../webpack.config.js');

Webpack(config, (err, stats) => {
    if (err) {
        console.log(err.stack);
    }
    console.log(stats.toString({
        colors: true,
        chunks: true
    }))
})