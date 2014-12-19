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
			var method	= Template.instance().data.facets.swagger.method,
				path	= Template.instance().data.facets.swagger.path;
			return Session.get('resourceDeclaration').paths[path][method];
		}
	}
});
