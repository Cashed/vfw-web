#!/bin/sh

# Clean the existing package if it exists
rm -f packaging/debian/*.{md5,deb} 2> /dev/null

# Build the debian packager
echo 'Building packager container...'
docker build -t 'cashed/vfw-web-builder' -f packaging/debian/Dockerfile . || exit $?

# Run the docker image to build the RPM
docker run -it -v $(pwd)/packaging/debian:/BUILD 'cashed/vfw-web-builder' || exit $?
