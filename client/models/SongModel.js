// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    playCount: 0
  },

  play: function() {
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.set('playCount', this.get('playCount') + 1);
    this.trigger('ended', this);
  }

});
