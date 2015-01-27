var DEFAULT_PORT = 80;


Template.swagger_url.created = function() {
	Tracker.autorun(function() {
		var sourceUrl = Session.get('resourceDeclarationUrl');

		if (sourceUrl) {
			this.uriParser = document.createElement('a');
			this.uriParser.href = sourceUrl;
		}
	}.bind(this));
}

Template.swagger_url.helpers({
	protocol: function() {
		var resourceDeclaration = Session.get('resourceDeclaration');

		return	resourceDeclaration.schemes && resourceDeclaration.schemes.length
				? resourceDeclaration.schemes[0] + ':'
				: Template.instance().uriParser && Template.instance().uriParser.protocol;
	},

	host: function() {
		var result		= Session.get('resourceDeclaration').host,
			uriParser	= Template.instance().uriParser;

		if (! result && uriParser) {
			result = uriParser.hostname;

			if (uriParser.port != DEFAULT_PORT)
				result += ':' + uriParser.port;
		}

		return result;
	},

	basePath: function() {
		return Session.get('resourceDeclaration').basePath;
	},

	queryString: function() {
		var result = [];

		Template.instance().data.parameters.forEach(function(description) {
			var name	= description.name,
				value	= Template.instance().data.parameterValues.get(name);

			if (value)
				result.push(name + '=' + value);
		});

		return result.join('&');
	},
});
