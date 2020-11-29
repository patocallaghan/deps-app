module.exports = function (app, info) {
  require('broccoli-inspector/lib/middleware')(app, info);
};