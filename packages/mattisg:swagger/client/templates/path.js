Template.swagger_path.created = function() {
	this.data.parameterValues = new ReactiveDict();	// store in .data to provide access to subtemplates through `parentData`

	this.url = new ReactiveVar('');
	this.response = new ReactiveVar();

	this.autorun((function() {
		var parameters = [];

		if (this.data.parameters) {
			this.data.parameters.forEach(function(description) {
				var name	= description.name,
					value	= this.data.parameterValues.get(name);

				if (value)
					parameters.push(name + '=' + value);
			}, this);
		}

		this.url.set(pathPrefix() + Template.instance().data.path + (parameters.length ? '?' : '') + parameters.join('&'));
	}).bind(this));
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
		return Template.instance().url.get();
	},

	responses: function() {
		var declaredResponses	= Template.instance().data.responses,
			lastResponse		= Template.instance().response.get(),
			responses			= JSON.parse(JSON.stringify(declaredResponses));

		if (lastResponse) {
			responses[lastResponse.statusCode].schema = lastResponse.data;
			responses[lastResponse.statusCode].actual = true;
		}

		return makeResponsesIterable(responses);
	},

	value: function(parameterName) {
		return Template.instance().data.parameterValues.get(parameterName);
	}
});

Template.swagger_path.events({
	'submit': function(event, template) {
		event.preventDefault();

		HTTP.call(template.data.method, template.url.get(), {
			timeout: 10000
		}, function(error, result) {
			if (error)
				throw error;	// TODO: handle error

			template.response.set(result);
		});
	}
});
