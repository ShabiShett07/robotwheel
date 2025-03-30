// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace robotwheel
*/
var robotwheel = {};

/**
* @name point2velocity
* @memberof robotwheel
* @readonly
* @type {Namespace}
* @see {@link module:robotwheel/point2velocity}
*/
setReadOnly( robotwheel, 'point2velocity', require( 'robotwheel/point2velocity' ) );

/**
* @name point2velocity
* @memberof robotwheel
* @readonly
* @type {Namespace}
* @see {@link module:robotwheel/velocity2point}
*/
setReadOnly( robotwheel, 'velocity2point', require( 'robotwheel/velocity2point' ) );


// EXPORTS //

module.exports = robotwheel;