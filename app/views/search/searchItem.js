/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var $ = require('jquery');
  var Backbone = require('backbone');

  return Backbone.View.extend({

//------Properties------------------------------------------------------------------------------------------------------
    template: 'search/item',

    tagName: 'li',
    className: 'yt-lockup2 yt-lockup2-video yt-uix-tile context-data-item clearfix',

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
