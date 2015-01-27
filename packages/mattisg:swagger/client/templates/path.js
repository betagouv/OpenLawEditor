Template.swagger_path.created = function() {
	this.data.parameterValues = new ReactiveDict();	// store in .data to provide access to subtemplates through `parentData`
	this.response = new ReactiveVar();
}

Template.swagger_path.helpers({
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

	response: function() {
		var result = Template.instance().response.get();
		if (result) {
			result.description = Template.instance().data.responses[result.statusCode].description;
			return result;
		}
	}
});

Template.swagger_path.events({
	'submit': function(event, template) {
		event.preventDefault();

		HTTP.call(template.data.method, template.find('.url').innerText, {
			timeout: 10000
		}, function(error, result) {
			if (error)
				throw error;	// TODO: handle error

			template.response.set(result);
		});
	}
});
