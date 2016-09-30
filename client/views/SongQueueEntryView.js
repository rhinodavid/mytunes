// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  template: _.template('<span class="artist"><%- artist %></span> \
   <span class="title"><%- title %></span>'),

  tagName: 'li',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  events: {
    'click': function() {
      this.model.dequeue();
    }
  }

});
