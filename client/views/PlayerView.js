// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  el: '<audio controls autoplay />',

  initialize: function() {
    this.$el.on('ended', function() {
      this.handleEnded();
    }.bind(this));
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model.get('url') ? this.model.get('url') : '');
  },

  handleEnded: function() {
    this.model.ended();
  }

});
