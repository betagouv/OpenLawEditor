/** Checks that the given Swagger resource declaration is supported by this library.
*
*@throws	{RangeError}	If the Swagger version is not supported.
*/
function check(swagger) {
	var SUPPORTED_VERSION = 2;

	if (swagger.swagger.split('.')[0] != SUPPORTED_VERSION)
		throw new RangeError('Only Swagger v' + SUPPORTED_VERSION + ' is supported');
}

function transform(swagger) {
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

		if (response.schema.$ref)
			console.error('$ref in responses are not resolved yet');	// TODO

		result.push(response);
	}

	return result;
}
