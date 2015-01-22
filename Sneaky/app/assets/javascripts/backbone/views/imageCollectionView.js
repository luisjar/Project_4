App.Views.imageCollectionView = Backbone.View.extend({
	el: '#image-gallery',
	initialize: function(){
		console.log('new collection view created');
		this.listenTo(this.collection, 'reset', this.render);
	},

	render: function(){
		console.log('hi')
		for (var i = 0; i < this.collection.models.length; i++){
			var image = this.collection.at(i);
			var view = new App.Views.imageListView({ model: image});
				this.$el.append(view.$el);
		};
	},

})