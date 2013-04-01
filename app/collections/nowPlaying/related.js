/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var Backbone = require('backbone');

  function getDuration(seconds) {
     minutes = parseInt(seconds / 60, 10);
     seconds = '' + (seconds % 60);
     if (seconds.length === 1) { seconds = '0' + seconds; }
     return minutes + ':' + seconds;
   }

   function processEntries(entries) {
     var i = entries.length;
     var entry;
     var paths;

     while (i--) {
       entry = entries[i];
       paths = entry.id.$t.split('/');
       entry.source = paths[paths.length-1];
       entry.duration = getDuration(entry.media$group.yt$duration.seconds);
     }
   }

  return Backbone.Collection.extend({

//    url: function () {
//      return 'http://gdata.youtube.com/feeds/videos?vq=' + this.searchTerm + '&format=5&max-results=20&start-index=' +
//        this.startIndex + '&alt=json-in-script';
//    },

    parse: function (response) {
      var entries = response.feed.entry;
      processEntries(entries);
      return entries;
    }
  });

});
