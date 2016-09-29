// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.ajaxRequest = $.ajax({
      type: 'GET',
      url: 'https://api.parse.com/1/classes/songs',
      success: function(data) {
        this.reset(data.results);
      }.bind(this)
    });
    this.search = _.throttle(this.search, 1500);
  },

  search: function(searchString) {
    console.log('search called with' + searchString);

    var whereValue = {
      $or: [{title:{'$regex':searchString,'$options':'i'}},{artist:{'$regex':searchString,'$options':'i'}}]
    };
    if (this.ajaxRequest.readyState === 1) {
      this.ajaxRequest.abort();
    }
    this.ajaxRequest = $.ajax({
      type: 'GET',
      url: 'https://api.parse.com/1/classes/songs',
      data: { where: JSON.stringify(whereValue)},
      success: function(data) {
        this.reset(data.results);
      }.bind(this),
      error: function(message) {
        console.log(message);
      }
    });
  }
});
