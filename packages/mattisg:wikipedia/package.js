Package.describe({
	name: 'mattisg:wikipedia',
	summary: 'Display Wikipedia content.',
	version: '0.0.1',
	git: 'git://github.com/MattiSG/meteor-wikipedia'
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
	api.use('templating', 'client');
	api.use('http', 'server');
	api.use('underscore', 'server');
	api.use('reactive-var', 'client');
	api.addFiles(all('client/templates', 'html')('wikipedia'), 'client');
	api.addFiles(all('client/templates', 'js')  ('wikipedia'), 'client');
	api.addFiles(all('server', 'js')('wikipedia'), 'server');
});
