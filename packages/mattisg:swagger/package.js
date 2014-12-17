Package.describe({
	name: 'mattisg:swagger',
	summary: 'An alternative UI for Swagger APIs.',
	version: '0.0.1',
	git: 'git://github.com/MattiSG/meteor-swagger-ui'
});

/** Creates an array-creating function, facilitating the addition of many files in the same directory.
*
*@param	{String}	directory	Prefix for the paths. The trailing slash will be inserted for you, don't add it.
*@param	{String}	extension	Suffix for the paths. The leading dot will be inserted for you, don't add it.
*@returns	{<Array<String>>Function<String>}	A function taking a space-separated string listing all files within the given directory and with the given extension.
*/
function all(directory, extension) {
	return function(filenames) {
		return filenames.split(' ').map(function(filename) {
			return directory + '/' + filename + '.' + extension;
		});
	}
}

Package.onUse(function(api) {
	api.versionsFrom('1.0.1');
	api.use([ 'templating' ], 'client');
	api.use('tap:i18n@1.2.1');
	api.addFiles('mattisg:swagger.js');
	api.addFiles(all('templates', 'html')('parameter path response swagger'));
	api.addFiles(all('i18n', 'fr.i18n.json')('helpers swagger path'));
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('mattisg:swagger');
	api.addFiles('mattisg:swagger-tests.js');
});
