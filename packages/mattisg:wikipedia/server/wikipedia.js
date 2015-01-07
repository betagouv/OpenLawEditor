var DEFAULTS = {
	lang: 'en',
	host: 'wikipedia.org',
	name: 'Main_page'
}

var QUERY = '/w/api.php?action=query&prop=revisions&rvprop=content&format=json&rvparse&continue&titles=';


var getFirstItem = function(object) {
	var key = Object.keys(object).shift();
	return object[key];
};

function getAndParse(url, callback) {
	HTTP.get(url, {
		'content-type': 'application/json'
	}, function(error, result) {
		if (error)
			return callback(error);

		var articleContent;

		try {
			articleContent = getFirstItem(result.data.query.pages).revisions[0]['*'];	// this is just navigating an API response, really; just manually type a query in your browser to understand the navigated path
		} catch (err) {	// if some path segment is not defined
			return callback(err);
		}

		callback(null, articleContent)
	});
}

Meteor.methods({
	wikipedia: function(data) {
		data = _.defaults(data, DEFAULTS);

		var url = 'https://' + data.lang + '.' + data.host + QUERY + data.name;

		return Meteor.wrapAsync(getAndParse)(url);
	}
});
