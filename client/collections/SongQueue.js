// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.handleAddSong, this);
    this.on('dequeue', this.handleDequeue, this);
    this.on('ended', this.handleEnded, this);
  },

  playFirst: function() {
    console.log('playFirst called');
    console.log(this.at(0));
    this.at(0).play();
  },

  handleAddSong: function(model, collection, options) {
    if (collection.length === 1) {
      this.playFirst();
    }
  },

  handleEnded: function() {
    this.remove(this.at(0));
    if (this.length) {
      this.playFirst();
    }
  },

  handleDequeue: function(song) {
    this.remove(song);
    if (this.length) {
      this.playFirst();
    } else {
      this.trigger('queueEmpty');
      console.log('queueEmpty triggered');
    }
  }

});
