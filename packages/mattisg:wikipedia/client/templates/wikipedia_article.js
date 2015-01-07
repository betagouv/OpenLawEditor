Template.wikipedia_article.created = function() {
	this.lang = new ReactiveVar(this.data.lang);
	this.title = new ReactiveVar(this.data.title);
	this.article = new ReactiveVar();

	this.autorun(function() {
		Meteor.call('wikipedia', {
			lang: this.lang.get(),
			title: this.title.get()
		}, function(error, result) {
			if (error)
				throw error;

			this.article.set(result);
		}.bind(this));
	}.bind(this));
}


Template.wikipedia_article.helpers({
	article: function() {
		return Template.instance().article.get();
	}
});
