// MODULES //
var Float64Array = require( '@stdlib/array/float64' );
var sin  = require('@stdlib/math/base/special/sin');
var cos = require('@stdlib/math/base/special/cos');
var deg2rad = require('@stdlib/math/base/special/deg2rad');
var format = require( '@stdlib/string/format' );
var dgemm = require('@stdlib/blas/base/dgemm');
var dscal = require('@stdlib/blas/base/dscal');

// MAIN //
function mecanum_wheeled(radius, wheelbase, trackwidth, x0, y0, psi0, x1, y1, psi1, time) {
    var xd;
    var yd;
    var psid;
    var global_velocity_vector;
    var rotation_matrix;
    var local_velocity_vector;
    var transformation_matrix;
    var initial_velocity_vector;
    var d;
    var l;

    psi0 = deg2rad( psi0 );
    psi1 = deg2rad( psi1 );

    d = wheelbase / 2;
    l = trackwidth / 2;

    if ( radius <= 0 ) {
        throw new RangeError( format( 'invalid argument. First argument must be a positive integer. Value: `%d`.', radius ) );
    }
    if ( wheelbase <= 0 ) {
        throw new RangeError( format( 'invalid argument. Second argument must be a positive integer. Value: `%d`.', wheelbase ) );
    }
    if ( trackwidth <= 0 ) {
        throw new RangeError( format( 'invalid argument. Third argument must be a positive integer. Value: `%d`.', wheelbase ) );
    }

    xd = (x1 - x0) / time;
    yd = (y1 - y0) / time;
    psid = (psi1 - psi0) / time;

    initial_velocity_vector = new Float64Array([0, 0, 0]);
    global_velocity_vector = new Float64Array([0, 0, 0, 0]);

    rotation_matrix = new Float64Array([
        cos(psi0), sin(psi0), 0,
        -sin(psi0), cos(psi0), 0,
        0, 0, 1
    ]);

    local_velocity_vector = new Float64Array([xd, yd, psid]);

    transformation_matrix = new Float64Array([
        1, -1, -( l + d ),
        1, 1, -( l + d ),
        1, -1, ( l + d ),
        1, 1, ( l + d ),
    ]);

    transformation_matrix = dscal( transformation_matrix.length, ( 1 / radius ), transformation_matrix, 1 );

    dgemm('row-major', 'no-transpose', 'no-transpose',
        3, 1, 3,
        1,
        rotation_matrix, 3,
        local_velocity_vector, 1,
        0,
        initial_velocity_vector, 1);

    dgemm('row-major', 'no-transpose', 'no-transpose',
        4, 1, 3,
        1,
        transformation_matrix, 3,
        initial_velocity_vector, 1,
        0,
        global_velocity_vector, 1);

    return global_velocity_vector;
}


// EXPORTS //
module.exports = mecanum_wheeled;