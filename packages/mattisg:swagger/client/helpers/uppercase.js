/**
*@param	{String}	text	The text to uppercase.
*@returns	{String}	The given text, uppercased.
*
**@example {{uppercase myString}}
*/
Template.registerHelper('uppercase', function(text) {
	return text.toLocaleUpperCase();
});
