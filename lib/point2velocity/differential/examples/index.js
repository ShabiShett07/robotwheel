var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var differential = require( './../lib' );

var radius  = discreteUniform( 1, 5 );
var wheelbase = discreteUniform( 1, 10 );
var x0 = discreteUniform( 0, 1 );
var y0 = discreteUniform( 0, 1 );
var psi0 = discreteUniform( 0, 5 );
var x1 = discreteUniform( 0, 1 );
var y1 = discreteUniform( 0, 1 );
var psi1 = discreteUniform( 0, 5 );
var time = discreteUniform( 1, 10 );

export const wheel_velocity = differential( radius, wheelbase, x0, y0, psi0, x1, y1, psi1, time );
console.log( "Velocity of wheel 1: " + wheel_velocity[ 0 ] + " rad/s" );
console.log( "Velocity of wheel 2: " + wheel_velocity[ 1 ] + " rad/s" );