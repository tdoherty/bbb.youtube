/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var Backbone = require('backbone');

  return Backbone.Model.extend({

    defaults: {
      source: '',
      title: {
        $t: ''
      }
    },

    videoSource: '',

    url: function () {
      return 'http://gdata.youtube.com/feeds/videos/' + this.videoSource + '?format=5&alt=json-in-script';
    },

    parse: function (response) {

      var data = response.entry;
      var paths = data.id.$t.split('/');
//      console.log(data);
      data.source = paths[paths.length-1];

      return data;
    }

  });

});
