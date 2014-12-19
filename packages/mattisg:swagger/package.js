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
	// api.use('nooitaf:semantic-ui@1.2.1', { weak: true });
	api.addFiles(all('lib', 'js')('compatibility transformers'));
	api.addFiles(all('client/templates', 'html')('parameter path response info swagger'), 'client');
	api.addFiles(all('client/templates', 'js')('path swagger'), 'client');
	api.addFiles(all('i18n', 'fr.i18n.json')('helpers swagger path'));
});

Package.onTest(function(api) {
	api.use('coffeescript');
	api.use('tinytest');
	api.use('peterellisjones:describe');
	api.use('mattisg:swagger');
	api.addFiles(all('lib', 'js')('compatibility transformers'));
	api.addFiles(all('test', 'coffee')('compatibility transformers'));
});
