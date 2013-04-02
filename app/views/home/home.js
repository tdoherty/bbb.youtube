/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var Backbone = require('backbone');

  return Backbone.View.extend({

//------Properties------------------------------------------------------------------------------------------------------
  template: 'home/home',

//------Backbone implementations----------------------------------------------------------------------------------------
    initialize: function () {
    },

//--Backbone.Layoutmanager implementations------------------------------------------------------------------------------
    beforeRender: function() {

    }

//------Event Handlers--------------------------------------------------------------------------------------------------

//------DOM Helpers-----------------------------------------------------------------------------------------------------

  });
});
