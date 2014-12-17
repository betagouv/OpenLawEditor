describe 'check()', ->
	VERSION_SHOULD_THROW =
		''		: true,
		'2'		: false,
		'2.0'	: false,
		'2.0.0'	: false,
		'2.0.1'	: false,
		'1.2'	: true,
		'3.0'	: true,
		'a'		: true


	for own version, shouldThrow of VERSION_SHOULD_THROW
		context version, ->
			it 'should be ' + (if shouldThrow then 'rejected' else 'accepted'), (test) ->
				threw = false

				try
					check { swagger: version }
				catch
					threw = true

				test.equal threw, shouldThrow
