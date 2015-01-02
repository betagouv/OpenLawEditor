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
