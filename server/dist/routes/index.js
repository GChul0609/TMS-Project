// Generated by CoffeeScript 1.12.4
(function() {
  var express, router;

  express = require('express');

  router = express.Router();

  router.get('/hello', function(req, res, next) {
    return res.send("你好,这是我的服务器");
  });

  module.exports = router;

}).call(this);

//# sourceMappingURL=index.js.map
