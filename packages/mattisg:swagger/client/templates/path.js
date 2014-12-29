Template.swagger_path.created = function() {
	this.data.parameterValues = new ReactiveDict();	// store in .data to provide access to subtemplates through `parentData`
}

function pathPrefix() {
	var	DEFAULT_PORT = 80,
		resourceDeclaration = Session.get('resourceDeclaration'),
		uriParser = document.createElement('a');

		uriParser.href = Session.get('resourceDeclarationUrl');

		var basePath	=	resourceDeclaration && resourceDeclaration.basePath,
			protocol	=	(resourceDeclaration && resourceDeclaration.schemes ? resourceDeclaration.schemes[0] + ':' : uriParser.protocol),
			host		=	resourceDeclaration && resourceDeclaration.host
							|| uriParser.hostname + (uriParser.port != DEFAULT_PORT ? ':' + uriParser.port : '');

		return protocol + '//' + host + basePath;
}


Template.swagger_path.helpers({
	url: function() {
		var parameters = [];

		Template.instance().data.parameters.forEach(function(description) {
			var name =	description.name,
				value =	Template.instance().data.parameterValues.get(name);

			if (value)
				parameters.push(name + '=' + value);
		});

		return pathPrefix() + Template.instance().data.path + (parameters.length ? '?' : '') + parameters.join('&');
	},

	responses: function() {
		return makeResponsesIterable(Template.instance().data.responses);
	},

	value: function(parameterName) {
		return Template.instance().data.parameterValues.get(parameterName);
	}
});
