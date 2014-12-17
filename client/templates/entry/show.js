Template.entryShow.helpers({
	resourceDeclaration: function() {
		return Session.get('resourceDeclaration') || 'Loading…';
	}
});

Template.entryShow.created = function() {
	HTTP.get(this.data.facets.swagger.resourceDeclaration, function(error, result) {
		if (error)	// TODO: handle errors
			throw error;

		Session.set('resourceDeclaration', result.data);
	});
}
