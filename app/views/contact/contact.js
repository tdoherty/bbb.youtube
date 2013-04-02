/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var Backbone = require('backbone');
  var _ = require('underscore');
  var ItemView = require('./contactLink');


  return Backbone.View.extend({

//--Properties----------------------------------------------------------------------------------------------------------
    template: 'contact/contact',

    data: {
      avatar: 'https://fbexternal-a.akamaihd.net/safe_image.php?d=AQDAacwkOhqzeWDH&w=155&h=114&url=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F481d556f479c71e5cc06f1493d4f6613%3Fs%3D420%26d%3Dhttps%253A%252F%252Fa248.e.akamai.net%252Fassets.github.com%252Fimages%252Fgravatars%252Fgravatar-user-420.png',
      links: [
        { text: 'Linkedin', target: '_blank', url: 'http://www.linkedin.com/in/timdoherty'},
        { text: 'Blog', target: '_blank', url: 'http://blog.dohertycomputing.com'},
        { text: 'Underwater Photos', target: '_blank', url: 'http://www.flickr.com/photos/hawaiidiveadventures/sets/72157622322603331/'},
        { text: 'Website', target: '_blank', url: 'http://dohertycomputing.com'},
        { text: 'Email', target: '', url: 'mailto:tim@dohertycomputing.com'}
      ]
    },

//--Backbone implementations--------------------------------------------------------------------------------------------
    initialize: function () {

    },

 //--Backbone.Layoutmanager implementations-----------------------------------------------------------------------------
    serialise: function () {
      return this.data;
    },

    beforeRender: function() {
      _.each(this.data.links, function(item) {
        this.insertView("ul.unstyled", new ItemView({
          model: item
        }));
      }, this);
    }

 //--Event Handlers-----------------------------------------------------------------------------------------------------

//--DOM Helpers---------------------------------------------------------------------------------------------------------

  });
});
