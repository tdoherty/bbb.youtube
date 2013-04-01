/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var Backbone = require('backbone');
  var ItemView = require('./commentsItem');

  return Backbone.View.extend({

//------Properties------------------------------------------------------------------------------------------------------
    template: 'nowPlaying/commentsList',

//------Backbone implementations----------------------------------------------------------------------------------------
    initialize: function () {
      this.listenTo(this.collection, 'sync', this.render);
    },

//--Backbone.Layoutmanager implementations------------------------------------------------------------------------------
    beforeRender: function() {
      this.collection.each(function(item) {
        this.insertView("ul.unstyled", new ItemView({
          model: item
        }));
      }, this);
    }

//------Event Handlers--------------------------------------------------------------------------------------------------

//------DOM Helpers-----------------------------------------------------------------------------------------------------

  });
});
