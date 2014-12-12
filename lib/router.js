Router.configure({
	layoutTemplate		: 'layout',
	notFoundTemplate	: 'notFound'
});

Router.plugin('dataNotFound');

Router.route('/', { name: 'entryList' });
Router.route('/:_id', {
	name: 'entryShow',
	data: function() { return Taxes.findOne(this.params._id) }
});

