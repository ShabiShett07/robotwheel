var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var mecanum_wheeled = require( './../lib' );

var radius  = discreteUniform( 1, 5 );
var wheelbase = discreteUniform( 1, 10 );
var trackwidth = discreteUniform( 1, 10 );
var x0 = discreteUniform( 0, 1 );
var y0 = discreteUniform( 0, 1 );
var psi0 = discreteUniform( 0, 360 );
var x1 = discreteUniform( 0, 1 );
var y1 = discreteUniform( 0, 1 );
var psi1 = discreteUniform( 0, 360 );
var time = discreteUniform( 1, 10 );

wheel_velocity = mecanum_wheeled( radius, wheelbase, trackwidth, x0, y0, psi0, x1, y1, psi1, time );
console.log( "Velocity of wheel 1: " + wheel_velocity[ 0 ] + " rad/s" );
console.log( "Velocity of wheel 2: " + wheel_velocity[ 1 ] + " rad/s" );
console.log( "Velocity of wheel 3: " + wheel_velocity[ 2 ] + " rad/s" );
console.log( "Velocity of wheel 4: " + wheel_velocity[ 3 ] + " rad/s" );
