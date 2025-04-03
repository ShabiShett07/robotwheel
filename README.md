# Robot Wheel Configuration using stdlib

This particular repository focuses on providing the wheeled robot configuration based on simple user inputs and aims to provide a easier and better options for the folks who are working wheeled robots to go with their calculations.

## What is the need of such a repository

- The main motive of this repository is to reduce the burden of manual calculation of robot's parameters by pre-defined functions that can handle the major types of wheeled robots.
- As stdlib is used in this repository, the calculations are highly precise and accurate leading to a high performing robot structure.
- Opening more opportunities for innovation in wheeled robots by reducing the work in the foundational task i.e., calculations.


#### How to use?

Currently this is just a simple strucute of a package and not a well established one. So there are no customized scripts or commands that can be used to run a particular package.

Also currently we are not able to use the packages out of this repository.

To use this repository locally,

```bash
$ git clone https://github.com/ShabiShett07/robotwheel.git
```

To check how a package works we can run examples of the corresponding package.

For example, if we want to see the example of `differential` wheel package of the `point2velocity` package,

```bash
node lib/node_modules/robotwheel/point2velocity/differential/examples/index.js
```

Currently, we cannot add any custom inputs seperately so I have included in the main file of each package where you can test the package with your custom inputs and run the main file to see the output.

For example, if we want to see the output of `differential` wheel package of the `point2velocity` package from your custom input,

```bash
node lib/node_modules/robotwheel/point2velocity/differential/lib/main.js
```

So keep exploring the fusion of robotic movements with the mathematical mysteries of `stdlib`.