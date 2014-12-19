Template.swagger_path.helpers({
	pathPrefix: function() {
		var resourceDeclaration = Session.get('resourceDeclaration');

		if (resourceDeclaration) {
			var basePath	= resourceDeclaration.basePath,
				host		= resourceDeclaration.host,
				scheme		= resourceDeclaration.schemes[0];

			return scheme + '://' + host + basePath;
		}
	},
	responses: function() {
		return makeResponsesIterable(Template.instance().data.responses);
	}
});
