/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var $ = require('jquery');
  var Backbone = require('backbone');
  Backbone.ModelBinder = require('backbone.modelbinder');

  return Backbone.View.extend({

//------Properties------------------------------------------------------------------------------------------------------
    template: 'search/searchBar',
    events: {
      'keypress #searchTerm': 'onSearchKeyPress',
      'click .icon-search': 'search'
    },

//------Backbone implementations----------------------------------------------------------------------------------------
    initialize: function () {
      this.modelBinder = new Backbone.ModelBinder();
//      this.listenTo(this.model, 'change:searchTerm', this.search);
    },

//--Backbone.Layoutmanager implementations------------------------------------------------------------------------------
    afterRender: function () {
      this.modelBinder.bind(this.model, this.el);
    },

//------Event Handlers--------------------------------------------------------------------------------------------------
    onSearchKeyPress: function (e) {
      if (e.which === 13)  {
        this.$(e.currentTarget).change();
        this.search();
      }
    },

    search: function () {
//      this.trigger('global:search'); //, this.model.get('searchTerm'));
      Backbone.trigger('global:search', this.model.get('searchTerm'));
    }
//------DOM Helpers-----------------------------------------------------------------------------------------------------

  });
});
