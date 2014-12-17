Template.swagger.created = function() {
	try {
		check(this.data);
	} catch(err) {
		console.error(err, 'We will still render. Please report any layout issues you get.');
	}
}

Template.swagger.helpers({
	paths: function() {
		return transformResponses(Template.instance().data.paths);
	}
});

/** Checks that the given Swagger resource declaration is supported by this library.
*
*@param	{Object}	resourceDeclaration	The Swagger resource declaration.
*@throws	{RangeError}	If the Swagger version is not supported.
*/
function check(resourceDeclaration) {
	var SUPPORTED_VERSION = 2;

	if (! resourceDeclaration.swagger || resourceDeclaration.swagger.split('.')[0] != SUPPORTED_VERSION)
		throw new RangeError('Only Swagger v' + SUPPORTED_VERSION + ' is supported');
}

/**
*@param	{Object}	responses	A Swagger-compliant responses object.
*@param	{Object}	[schemas]	Additional schema definitions within which to resolve references.
*@returns	{Array}	The responses, with schema references resolved and status codes inlined in each response description object, under the `code` key.
*/
function transformResponses(responses, schemas) {
	var result = [];

	for (var code in responses) {
		if (! Object.prototype.hasOwnProperty.call(responses, code))
			continue;

		var response = EJSON.clone(responses[code]);

		response.code = code;

		if (response.schema && response.schema.$ref)
			console.error('$ref in responses are not resolved yet');	// TODO

		result.push(response);
	}

	return result;
}
