Package.describe({
	name: 'mattisg:swagger',
	summary: 'An alternative UI for Swagger APIs.',
	version: '0.0.1',
	git: 'git://github.com/MattiSG/meteor-swagger-ui'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.1');
	api.use([ 'templating' ], 'client');
	api.use('tap:i18n@1.2.1');
	api.addFiles([ 'mattisg:swagger.js', 'swagger.html' ]);
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('mattisg:swagger');
	api.addFiles('mattisg:swagger-tests.js');
});
