// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);
    
    this.$el.on('keyup', '#search-bar', function(e) {
      this.model.set('searchString', e.target.value);
    }.bind(this));
  },

  render: function() {
    var $searchBar = $('<div><input type = "text" placeholder = "search"></input></div>').attr('id', 'search-bar');
    
    return this.$el.html([
      this.playerView.$el, 
      $searchBar,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
