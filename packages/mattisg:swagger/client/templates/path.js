Template.swagger_path.helpers({
	responses: function() {
		return makeResponsesIterable(Template.instance().data.responses);
	}
});
