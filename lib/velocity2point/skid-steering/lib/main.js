// MODULES //
var Float64Array = require( '@stdlib/array/float64' );
var sin  = require('@stdlib/math/base/special/sin');
var cos = require('@stdlib/math/base/special/cos');
var deg2rad = require('@stdlib/math/base/special/deg2rad');
var format = require( '@stdlib/string/format' );
var dgemm = require('@stdlib/blas/base/dgemm');
var dscal = require('@stdlib/blas/base/dscal');
var daxpy = require('@stdlib/blas/base/daxpy');

// MAIN //
function skid_steering(radius, wheelbase, x0, y0, psi0, wheel_velocity_1, wheel_velocity_2, wheel_velocity_3, wheel_velocity_4, time) {
    var state_vector;
    var initial_state_vector;
    var initial_position_matrix;
    var rotation_matrix;
    var wheel_velocity_matrix;
    var transformation_matrix;
    var d;

    psi0 = deg2rad( psi0 );

    wheel_velocity_matrix = new Float64Array( [ wheel_velocity_1, wheel_velocity_2, wheel_velocity_3, wheel_velocity_4 ] );

    initial_position_matrix = new Float64Array( [ x0, y0, psi0 ] );

    initial_state_vector = new Float64Array( 3 );

    state_vector = new Float64Array( 3 );

    if ( radius <= 0 ) {
        throw new RangeError( format( 'invalid argument. First argument must be a positive integer. Value: `%d`.', radius ) );
    }
    if ( wheelbase <= 0 ) {
        throw new RangeError( format( 'invalid argument. Second argument must be a positive integer. Value: `%d`.', wheelbase ) );
    }

    d = wheelbase / 2;

    rotation_matrix = new Float64Array([
        cos(psi0), -sin(psi0), 0,
        sin(psi0), cos(psi0), 0,
        0, 0, 1
    ]);

    transformation_matrix = new Float64Array([
        (radius / 4), (radius / 4), (radius / 4), (radius / 4),
        0, 0, 0, 0,
        ( -(radius / ( 4 * d )) ), ( -(radius / ( 4 * d )) ), ( (radius / ( 4 * d )) ), ( (radius / ( 4 * d )) )
    ]);

    dgemm('row-major', 'no-transpose', 'no-transpose',
        3, 1, 4,
        1,
        transformation_matrix, 4,
        wheel_velocity_matrix, 1,
        0,
        initial_state_vector, 1);

    dgemm('row-major', 'no-transpose', 'no-transpose',
        3, 1, 3,
        1,
        rotation_matrix, 3,
        initial_state_vector, 1,
        0,
        state_vector, 1);

    dscal( 3, time, state_vector, 1 );

    daxpy( 3, 1, initial_position_matrix, 1, state_vector, 1 );

    return state_vector;
}


// EXPORTS //
module.exports = skid_steering;