// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    this.render();
  },

  render: function() {
    // render each song item and put them together into the $el
    this.$el.empty();
    this.$el.append('<h1>Song Queue</h1>');
    this.collection.forEach(this.renderSongEntry, this);
    return this.$el;
  },

  renderSongEntry: function(song) {
    var songEntryView = new SongQueueEntryView({model: song});
    this.$el.append(songEntryView.render());
  }

});
