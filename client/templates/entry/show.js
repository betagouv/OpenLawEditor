Template.entryShow.created = function() {
	this.autorun(function() {
		HTTP.get(Session.get('resourceDeclarationUrl'), function(error, result) {
			if (error)	// TODO: handle errors
				throw error;

			Session.set('resourceDeclaration', result.data);
		});
	});

	Session.set('resourceDeclarationUrl', this.data.facets.swagger.resourceDeclarationUrl);
}

Template.entryShow.helpers({
	path: function() {
		if (Session.get('resourceDeclaration')) {
			return inlineOperation(
				Session.get('resourceDeclaration').paths,
				Template.instance().data.facets.swagger.path,
				Template.instance().data.facets.swagger.method
			);
		}
	}
});
