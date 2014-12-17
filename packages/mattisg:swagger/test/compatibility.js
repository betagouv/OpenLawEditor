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
