App.Collections.imageCollection = Backbone.Collection.extend({
model: App.Models.Image,
url: '/uploads',
initialize: function() {
    console.log("New image collection created.");
  }
});