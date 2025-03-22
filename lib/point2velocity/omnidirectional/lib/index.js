var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );

var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	omni_directional = main;
} else {
	omni_directional = tmp;
}

module.exports = omni_directional;