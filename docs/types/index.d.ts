import point2velocity = require( 'robotwheel/point2velocity' );
import velocity2point = require( 'robotwheel/velocity2point' );

/**
* Interface describing the `robotwheel` namespace.
*/
interface Namespace {
    /**
    * Computes the wheel velocities of differential wheeled robots given final orientation of the robot.
    */
    point2velocity: typeof point2velocity;

    /**
    * Computes the wheel velocities of differential wheeled robots given final orientation of the robot.
    */
    velocity2point: typeof velocity2point;
}

/**
* Final position to wheel angular velocity computation
*/
declare var ns: Namespace;

// EXPORTS //

export = ns;