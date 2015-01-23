App.Views.imageCollectionView = Backbone.View.extend({
	el: '#image-gallery',
	initialize: function(){
		console.log('new collection view created');
		this.listenTo(this.collection, 'reset', this.render);
	},

	// calculateDistance: function(λ1, φ1, λ2, φ2) {
	// 		var x = (λ2-λ1) * Math.cos((φ1+φ2)/2);
	// 		var y = (φ2-φ1);
	// 		var d = Math.sqrt(x*x + y*y) * R;
	// 		return d;
	// }

	render: function(){
		console.log('hi')
		for (var i = 0; i < this.collection.models.length; i++){
			var image = this.collection.at(i);
			var view = new App.Views.imageListView({ model: image});
				this.$el.append(view.$el);
		};
	},

})