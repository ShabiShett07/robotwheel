// MODULES //
var Float64Array = require( '@stdlib/array/float64' );
var sin  = require('@stdlib/math/base/special/sin');
var cos = require('@stdlib/math/base/special/cos');
var dgemm = require('@stdlib/blas/base/dgemm');

// MAIN //
function differential( radius, wheelbase, x0, y0, psi0, x1, y1, psi1, time ) {
    var xd;
    var yd;
    var psid;
    var global_velocity_vector;
    var rotation_matrix;
    var local_velocity_vector;

    d = wheelbase / 2;
    xd = ( x1 - x0 ) / time;
    yd = ( y1 - y0 ) / time;
    psid = ( psi1 - psi0 ) / time;

    global_velocity_vector = new Float64Array( [ 0, 0, 0 ] );
    rotation_matrix = new Float64Array( [ cos( psi0 ), sin( psi0 ), 0,
                                        -sin( psi0 ), cos( psi0 ), 0,
                                        0, 0, 1 ] );
    local_velocity_vector = new Float64Array( [ xd, yd, psid ] );

    dgemm( 'row-major', 'no-transpose', 'no-transpose',
         3, 1, 3,
         1,
         rotation_matrix, 3,
         local_velocity_vector, 1,
         0,
         global_velocity_vector, 1);
    console.log("Global Velocity Vector:", global_velocity_vector);
    console.log("Local Velocity Vector:", local_velocity_vector);
}
differential(0.1, 0.4, 1, 0.5, Math.PI / 6, 3, 1, Math.PI / 5, 5);
