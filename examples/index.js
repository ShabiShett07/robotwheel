var robotwheel =  require( './../lib' );

// Compute the value of differential:
var y = robotwheel.point2velocity.differential( 0.1, 0.4, 0.0, 0.0, 0.0, 5.0, 5.0, 1.0 );
console.log( y );
