var VERSION_SHOULD_THROW = {
	''		: true,
	'2'		: false,
	'2.0'	: false,
	'2.0.0'	: false,
	'2.0.1'	: false,
	'1.2'	: true,
	'3.0'	: true,
	'a'		: true
}

Object.keys(VERSION_SHOULD_THROW).forEach(function(version) {
	Tinytest.add('check() should ' + (VERSION_SHOULD_THROW[version] ? '' : 'not ') + 'accept "' + version + '"', function(test) {
		var threw = false;

		try {
			check({
				swagger: version
			})
		} catch (err) {
			threw = true;
		}

		test.equal(threw, VERSION_SHOULD_THROW[version]);
	});
});

Tinytest.add('transformResponses should inline HTTP status code', function(test) {
	var responses = {
		"200": {
			"description": "Salaire net en euros.",
			"schema": {
				"type": "number",
				"minimum": 0
			},
			"examples": {
				"application/json": "112043"
			}
		}
	},
	expected = {
		"code": "200",
		"description": "Salaire net en euros.",
		"schema": {
			"type": "number",
			"minimum": 0
		},
		"examples": {
			"application/json": "112043"
		}
	};

	test.equal(transformResponses(responses), expected);
});

Tinytest.add('transformResponses should resolve schema references', function(test) {
	var responses = {
		"400": {
			"description": "Aucun salaire spécifié.",
			"schema": {
				"$ref": "#/definitions/validationError"
			}
		}
	},
	expected = {
		"code": "400",
		"description": "Aucun salaire spécifié.",
		"schema": {
			"type": "object",
			"properties": {
				"statusCode": {
					"type": "integer",
					"description": "HTTP status code"
				},
				"error": {
					"type": "string",
					"description": "HTTP error name"
				},
				"message": {
					"type": "string",
					"description": "Human-readable validation error"
				},
				"validation": {
					"type": "object",
					"description": "Location of validation error",
					"example": {
						"source": "query",
						"keys": [
							"brut"
						]
					}
				}
			},
			"required": [
				"message"
			]
		}
	};

	test.equal(transformResponses(responses), expected);
});
