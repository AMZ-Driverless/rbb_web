# RBB Web
This repository contains the web interface to the [Rosbag Bazaar (RBB)](https://github.com/AMZ-Driverless/rbb_core).

## Build
To build the rbb-web container simpy execute the `build-container.sh` script. It will build the image `amzracing/rbb-web:latest`.

## Running locally
To run the web interface locally use `yarn start`. It will be accessible on localhost:2222.

## Configuration
The address of the API server can be configured in `webpack/dev.config.js`.
