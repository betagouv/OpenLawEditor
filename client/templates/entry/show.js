Template.entryShow.created = function() {
	HTTP.get(this.data.facets.swagger.resourceDeclaration, function(error, result) {
		if (error)	// TODO: handle errors
			throw error;

		Session.set('resourceDeclaration', result.data);
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
