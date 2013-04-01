/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var Backbone = require('backbone');

  return Backbone.View.extend({

//------Properties------------------------------------------------------------------------------------------------------
    template: 'nowPlaying/nowPlaying',

//    tagName: 'li',

//------Backbone implementations----------------------------------------------------------------------------------------
    initialize: function () {
      this.listenTo(this.model, {
        'change': this.render
      });
    },

    serialize: function () {
      return this.model.toJSON();
    }

//------Event Handlers--------------------------------------------------------------------------------------------------

//------DOM Helpers-----------------------------------------------------------------------------------------------------

  });
});
