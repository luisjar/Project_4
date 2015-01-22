App.Views.imageListView = Backbone.View.extend({
	tagName: 'div', 
	className: 'pictures', 
	initialize: function(){
		console.log('new pictures view created');
		this.template = HandlebarsTemplates['pictures-div'];
		this.render();
	},

	render: function(){
		console.log('rendered list view')
		// put the model and the template together and stick the result into $el
		this.$el.html(this.template(this.model.toJSON()));
	}

})