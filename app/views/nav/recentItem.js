/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var $ = require('jquery');
  var Backbone = require('backbone');

  return Backbone.View.extend({

//------Properties------------------------------------------------------------------------------------------------------
    template: 'nav/recentItem',

    tagName: 'li',
    className: 'video-list-item',

//------Backbone implementations----------------------------------------------------------------------------------------
//    initialize: function () {
//      this.listenTo(this.model, {
//        'change': this.render
//      });
//    },

    serialize: function () {
      return this.model.toJSON();
    }

//------Event Handlers--------------------------------------------------------------------------------------------------

//------DOM Helpers-----------------------------------------------------------------------------------------------------

  });
});
