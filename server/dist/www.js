// Generated by CoffeeScript 1.12.4
(function() {
  var app, config, debug, http, onError, onListening, port, server;

  app = require('./libs/app');

  debug = require('debug')('src:server');

  http = require('http');

  config = require('./config/config');

  port = config.port;

  app.set('port', port);

  server = http.createServer(app);

  onError = function(error) {
    var bind, ref;
    if (error.syscall !== 'listen') {
      throw error;
    }
    bind = (ref = typeof port === 'string') != null ? ref : 'Pipe ' + {
      port: 'Port ' + port
    };
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  onListening = function() {
    var addr, bind, ref;
    addr = server.address();
    bind = (ref = typeof addr === 'string') != null ? ref : 'pipe ' + {
      addr: 'port ' + addr.port
    };
    return debug('Listening on ' + bind);
  };

  server.listen(port);

  server.on('error', onError);

  server.on('listening', onListening);

}).call(this);

//# sourceMappingURL=www.js.map
