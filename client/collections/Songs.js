// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  
  initialize: function() {
    $.ajax({
      type: 'GET',
      url: 'https://api.parse.com/1/classes/songs',
      success: function(data) {
        this.reset(data.results);
      }.bind(this)
    });
  }
});
