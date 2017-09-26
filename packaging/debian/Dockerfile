FROM debian:stretch

# Install dependencies
RUN apt-get update && \
	apt-get install -y build-essential \
	debhelper

# Install build dependencies
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

# Install node js
RUN apt-get install -y nodejs

# Install webpack and eslint
RUN npm install --global webpack eslint

# Create the temporary package directory
RUN mkdir -p /tmp/package/vfw-web

# Use it as the working directory
WORKDIR /tmp/package

# Mount it so stuff can be exported
VOLUME /BUILD

# Create DEBIAN folder.
RUN mkdir vfw-web/DEBIAN

# Create the bin directory
RUN mkdir -p vfw-web/usr/local/bin

# Create the application directory
RUN mkdir -p vfw-web/opt/vfw

# Copy the entire project to source dir outside the package dir
COPY . /tmp/package

# Move debian file to root
RUN mv packaging/debian .

# Create the package and move it to the build volume
CMD dpkg-buildpackage -us -uc && \
	md5sum vfw-web.deb > /BUILD/vfw-web.md5 && \
	mv vfw-web.deb /BUILD/vfw-web.deb
