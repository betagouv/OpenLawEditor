Template.entryShow.created = function() {
	if (! (this.data.facets && this.data.facets.swagger))
		return;

	Session.set('resourceDeclarationUrl', this.data.facets.swagger.resourceDeclarationUrl);

	this.autorun(function() {
		HTTP.get(Session.get('resourceDeclarationUrl'), function(error, result) {
			if (error)	// TODO: handle errors
				throw error;

			Session.set('resourceDeclaration', result.data);
		});
	});

	this.parameterValues = new ReactiveDict();	// store in .data to provide access to subtemplates through `parentData`
	this.response = new ReactiveVar();
}

Template.entryShow.helpers({
	path: function() {
		var result = {
			parameterValues: Template.instance().parameterValues
		};

		if (Session.get('resourceDeclaration')) {
			result = _.extend(result, inlineOperation(
				Session.get('resourceDeclaration').paths,
				Template.instance().data.facets.swagger.path,
				Template.instance().data.facets.swagger.method
			));
		}

		return result;
	},

	value: function() {
		var response = Template.instance().response.get();

		if (response)
			return response.value;
	}
});

Template.entryShow.events({
	'change, submit': function(event, template) {
		event.preventDefault();

		HTTP.call(template.data.facets.swagger.method, template.find('.url').innerText, {
			timeout: 10000
		}, function(error, result) {
			if (error)
				throw error;	// TODO: handle error

			template.response.set(result.data);
		});
	}
});
