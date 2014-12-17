/**
*@param	{Object}	paths	A Swagger-compliant paths object.
*@returns	{Array}	The paths descriptions, with the path and method inlined in each path description object, under the `path` and `method` keys, respectively.
*/
makePathsIterable = function makePathsIterable(paths) {
	var result = [];

	for (var path in paths) {
		if (! Object.prototype.hasOwnProperty.call(paths, path))
			continue;

		for (var method in methods) {
			if (! Object.prototype.hasOwnProperty.call(methods, method))
				continue;

			var description = EJSON.clone(paths[path][method]);

			description.path = path;
			description.method = method;

			result.push(description);
		}
	}

	return result;
}


/**
*@param	{Object}	responses	A Swagger-compliant responses object.
*@param	{Object}	[schemas]	Additional schema definitions within which to resolve references.
*@returns	{Array}	The responses, with schema references resolved and status codes inlined in each response description object, under the `code` key.
*/
transformResponses = function transformResponses(responses, schemas) {
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
