Template.swagger.created = function() {
	try {
		check(this.data);
	} catch(err) {
		console.error(err, 'We will still render. Please report any layout issues you get.');
	}
}

Template.swagger.helpers({
	paths: function() {
		return makePathsIterable(Template.instance().data.paths);
	}
});
