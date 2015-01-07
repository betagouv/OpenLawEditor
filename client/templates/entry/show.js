Template.entryShow.helpers({
	facets: function() {
		var itemId = Template.instance().data._id,
			result = {};

		_.each(Facets, function(collection, name) {
			result[name] = collection.findOne(itemId);
		});

		return result;
	}
});
