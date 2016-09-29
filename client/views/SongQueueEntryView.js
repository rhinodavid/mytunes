// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  template: _.template('<li class="song"> \
   <span class="artist"><%- artist %></span> \
   <span class="title"><%- title %></span></li>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }

});
