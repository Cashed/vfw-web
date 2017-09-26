FROM debian:stretch

# Install dependencies
RUN apt-get update && \
	apt-get install -y build-essential

# Create the temporary package directory
RUN mkdir -p /tmp/package/vfw-web

# Use it as the working directory
WORKDIR /tmp/package

# Mount it so stuff can be exported
VOLUME /BUILD

# Create DEBIAN folder.
RUN mkdir vfw-web/DEBIAN

# Copy the control file
COPY packaging/debian/control vfw-web/DEBIAN
COPY packaging/debian/rules vfw-web/DEBIAN
COPY packaging/debian/compat vfw-web/DEBIAN
COPY packaging/debian/control vfw-web/DEBIAN
COPY packaging/debian/vfw-web.install vfw-web/DEBIAN

# Create the bin directory
RUN mkdir -p vfw-web/usr/local/bin

# Create the application directory
RUN mkdir -p vfw-web/opt/vfw

# Copy the entire project to source dir
COPY . /tmp/package/vfw-web

RUN ls vfw-web

# Create the package and move it to the build volume
CMD dpkg-deb --build vfw-web && \
	md5sum vfw-web.deb > /BUILD/vfw-web.md5 && \
	mv vfw-web.deb /BUILD/vfw-web.deb
