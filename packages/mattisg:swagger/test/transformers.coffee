describe 'makePathsIterable', ->
	it 'should unwrap paths and methods', (test) ->
		paths =
			"/first":
				get:
					operationId: "first"
			"/second":
				post:
					operationId: "second"

		expected = [
			{
				"path": "/first"
				"method": "get"
				"operationId": "first"
			}, {
				"path": "/second"
				"method": "post"
				"operationId": "second"
			}
		]

		test.equal makePathsIterable(paths), expected

	it 'should leave alone inner declarations', (test) ->
		paths =
			"/first":
				get:
					operationId: "first"
					parameters: [
						{
							name: "param"
						}
					]
					responses:
						200:
							schema:
								type: "number"

		expected = [ {
			"path": "/first"
			"method": "get"
			"operationId": "first"
			"parameters": [
				{
					name: "param"
				}
			]
			"responses":
				200:
					schema:
						type: "number"
		} ]

		test.equal makePathsIterable(paths), expected


describe 'makeResponsesIterable', ->
	it 'should inline HTTP status code', (test) ->
		responses =
			200:
				"description": "Salaire net en euros."
				"schema":
					"type": "number"
					"minimum": 0
				"examples":
					"application/json": "112043"

		expected = [ {
			"code": "200"
			"description": "Salaire net en euros."
			"schema":
				"type": "number"
				"minimum": 0
			"examples":
				"application/json": "112043"
		} ];

		test.equal makeResponsesIterable(responses), expected

	# it 'should resolve schema references', (test) ->	# pending
		responses =
			"400":
				"description": "Aucun salaire spécifié."
				"schema":
					"$ref": "#/definitions/validationError"

		expected = [ {
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
				"required": [ "message" ]
			}
		} ]

	#	test.equal makeResponsesIterable(responses), expected	# pending
