/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var Backbone = require('backbone');

  return Backbone.Collection.extend({
    fetch: function (options) {
      var self = this,
        opts = _.extend({}, options || {});

      opts.dataType = 'jsonp';
      Backbone.Collection.prototype.fetch.call(this, opts)
    },

    parse: function (response) {
      return response.feed.entry;
    }
  });
});
