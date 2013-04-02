/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var Backbone = require('backbone');

  return Backbone.View.extend({

//------Properties------------------------------------------------------------------------------------------------------
    template: 'contact/link',

    tagName: 'li',
    className: 'contactLink',

//------Backbone implementations----------------------------------------------------------------------------------------
    initialize: function () {

    },

    serialize: function () {
      return this.model;//.toJSON();
    }

//------Event Handlers--------------------------------------------------------------------------------------------------

//------DOM Helpers-----------------------------------------------------------------------------------------------------

  });
});
