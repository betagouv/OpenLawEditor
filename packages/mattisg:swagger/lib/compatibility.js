/** Checks that the given Swagger resource declaration is supported by this library.
*
*@param	{Object}	resourceDeclaration	The Swagger resource declaration.
*@throws	{RangeError}	If the Swagger version is not supported.
*/
check = function check(resourceDeclaration) {
	var SUPPORTED_VERSION = 2;

	if (! resourceDeclaration.swagger || resourceDeclaration.swagger.split('.')[0] != SUPPORTED_VERSION)
		throw new RangeError('Only Swagger v' + SUPPORTED_VERSION + ' is supported');
}
