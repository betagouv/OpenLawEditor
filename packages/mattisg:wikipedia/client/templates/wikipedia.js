Template.wikipedia.created = function() {
	this.lang = new ReactiveVar('fr');
	this.name = new ReactiveVar(this.data.name);
	this.article = new ReactiveVar();

	this.autorun(function() {
		Meteor.call('wikipedia', {
			lang: this.lang.get(),
			name: this.name.get()
		}, function(error, result) {
			if (error)
				throw error;

			this.article.set(result);
		}.bind(this));
	}.bind(this));
}


Template.wikipedia.helpers({
	article: function() {
		return Template.instance().article.get();
	}
});
