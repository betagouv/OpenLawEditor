Template.swagger_path.helpers({
	pathPrefix: function() {
		var	DEFAULT_PORT = 80,
			resourceDeclaration = Session.get('resourceDeclaration'),
			uriParser = document.createElement('a');

		uriParser.href = Session.get('resourceDeclarationUrl');

		if (resourceDeclaration) {
			var basePath	= resourceDeclaration.basePath,
				protocol	=	resourceDeclaration.schemes[0] + ':' || uriParser.protocol,
				host		=	resourceDeclaration.host
								|| uriParser.hostname + (uriParser.port != DEFAULT_PORT ? ':' + uriParser.port : '');

			return protocol + '//' + host + basePath;
		}
	},
	responses: function() {
		return makeResponsesIterable(Template.instance().data.responses);
	}
});
