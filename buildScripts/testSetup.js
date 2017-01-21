// This  file isn't transpiled, so must use CommonJS and ES5

// Regster babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features tht Moacha doesn't understand
require.extensions['.css'] = function(){};