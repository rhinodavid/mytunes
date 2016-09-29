// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    this.render();
    this.collection.on('add remove', function() {
      this.render();
    }, this);
  },

  render: function() {
    // render each song item and put them together into the $el
    this.$el.empty();
    this.$el.append('<h3>Song Queue</h3>');
    var $ul = $('<ul />').addClass('queue');
    this.collection.forEach(this.renderSongEntry, $ul);
    $ul.appendTo(this.$el);
    return this.$el;
  },

  renderSongEntry: function(song) {
    var songEntryView = new SongQueueEntryView({model: song});
    this.append(songEntryView.render());
  }

});
