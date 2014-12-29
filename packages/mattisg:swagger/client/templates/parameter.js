Template.swagger_parameter.events({
	'input': function(event, template) {
		if (event.target.attributes.name.value != template.data.name)	// future-proofing template in case other fields are added
			return;

		Template.parentData(1).parameterValues.set(template.data.name, event.target.value);	// notify parent template of the value change
	}
});
