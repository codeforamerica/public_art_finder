$(function() {
  
  Backbone.couch_connector.config.db_name = "pubart";
  Backbone.couch_connector.config.ddoc_name = "app";
  Backbone.couch_connector.config.view_name = "byCollection";
  Backbone.couch_connector.config.global_changes = false;
  
  window.Artwork = Backbone.Model.extend({
    defaults: function() {
      return {
        title: null,
        geometry: null
      };
    },
    initialize: function() {
      console.log('Artwork init');
    }
  });
  
  window.ArtworkCollection = Backbone.Collection.extend({
    model: Artwork,
    url: '/artwork'
  });
  
  window.Gallery = new ArtworkCollection();
  
  window.ArtworkView = Backbone.View.extend({
    el: $('#artwork-list'),
    model: Artwork,
    tagName: "li",
    template: _.template($("#artwork-template").html()),
    initialize: function() {
      console.log('ArtworkView initialize');
      Gallery.bind('all', this.render, this);
    },
    render: function() {
      console.log('balllzzz');
      console.log(this.model.toJSON());
      //$(this.el).html(this.template(this.model.toJSON()));
      //this.displayTitle();
      return this;
    }
  });
  
  window.AppView = Backbone.View.extend({
    el: $('#artworkapp'),
    initialize: function() {
      console.log("AppView initialize");
      Gallery.fetch({
        success: function(collection, response) {
          console.log('success fetching');
        },
        error: function(collection, response) {
          console.log('error fetching');
        }
      });
    }
  });
  
  window.App = new AppView;
  new ArtworkView;
  
});