var DEFAULTS = {
	lang: 'en',
	name: 'Main_page'
}

Meteor.methods({
	wikipedia: function(data) {
		data = _.extend(DEFAULTS, data);

		var get = Meteor.wrapAsync(HTTP.get, HTTP);

		return get('http://' + data.lang + '.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&rvprop=content&continue&titles=' + data.name);
	}
});
