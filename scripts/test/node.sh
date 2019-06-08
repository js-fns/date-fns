#!/bin/bash

# The script runs the test suite using Jest in different Node.js versions.
#
# It's a part of the test process.

set -ex

export PATH="$(yarn bin):$PATH"

for version in 8 9 10 11 12
do
  echo "Running tests using Node.js $version"
  nvm install $version
  npm rebuild
  jest
done