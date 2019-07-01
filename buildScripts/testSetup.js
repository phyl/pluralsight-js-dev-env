// This file isn't transpiled, so use CommonJs and ES5

// Register babel to transpile before our tests run
require('babel-register')();

//Disable webpack features thet Mocha doesn't understand.
require.extensions['.css'] = function(){};
