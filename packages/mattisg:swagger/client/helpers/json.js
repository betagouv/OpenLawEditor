/** Dump a JSON object wrapped in a <pre> tag.
* Call with triple brackets to prevent HTML escapes!
*
*@param	{Object}	data	The object to serialize.
*@param	{Function}	[replacer]	A replacer function, as defined in `JSON.stringify`.
*@returns	{String}	HTML
*
**@example {{{json myObject}}}
*/
Template.registerHelper('json', function(data, replacer) {
	return '<pre>' + JSON.stringify(data) + '</pre>';
});
