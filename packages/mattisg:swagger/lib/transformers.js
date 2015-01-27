/**
*@param	{Object}	paths	A Swagger-compliant paths object.
*@returns	{Array}	The paths descriptions, with the path and method inlined in each path description object, under the `path` and `method` keys, respectively.
*/
makePathsIterable = function makePathsIterable(paths) {
	var result = [];

	for (var path in paths) {
		if (! Object.prototype.hasOwnProperty.call(paths, path))
			continue;

		var methods = paths[path];

		for (var method in methods) {
			if (! Object.prototype.hasOwnProperty.call(methods, method))
				continue;

			result.push(inlineOperation(paths, path, method));
		}
	}

	return result;
}

/**
*@param	{Object}	operationsDescription	A Swagger [paths object](https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md#paths-object-).
*@param	{String}	path	A path.
*@param	{String}	method	An HTTP method, lowercase.
*@returns	{Object}	The description for the given operation, with path and method inlined.
*@throws	{ReferenceError}	If the given operation does not exist in the given description.
*/
inlineOperation = function inlineOperation(operationsDescription, path, method) {
	if (! (operationsDescription && operationsDescription[path] && operationsDescription[path][method]))
		throw new ReferenceError('The description of an operation with HTTP method "' + method + '" on path "' + path + '" could not be found in ' + JSON.stringify(operationsDescription));

	var result = EJSON.clone(operationsDescription[path][method]);

	result.path = path;
	result.method = method;

	return result;
}


/**
*@param	{Object}	responses	A Swagger-compliant responses object.
*@param	{Object}	[schemas]	Additional schema definitions within which to resolve references.
*@returns	{Array}	The responses, with schema references resolved and status codes inlined in each response description object, under the `code` key.
*/
makeResponsesIterable = function makeResponsesIterable(responses, schemas) {
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
