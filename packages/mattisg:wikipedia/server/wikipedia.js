var DEFAULTS = {
	lang: 'en',
	name: 'Main_page'
}

Meteor.methods({
	wikipedia: function(data) {
		data = _.extend(DEFAULTS, data);

		var bot = Npm.require('nodemw');

		var client = new bot({
			server	: data.lang + '.wikipedia.org',
			path	: '/w',
			debug	: false
		});

		function nodifiedGetArticle(name, callback) {	// see https://github.com/macbre/nodemw/issues/38
			this.getArticle(name, function(data) {
				callback(null, data);
			});
		}

		return Meteor.wrapAsync(nodifiedGetArticle, client)(data.name);
	}
});
