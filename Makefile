NODE ?= node
BUILDTYPE ?= Release
TESTS = "test/**/*.js"
TEST_REPORTER =
TEST_OUTPUT =
PREFIX = /opt/vfw-web

ESLINT_FILES = $(wildcard src/**/*.js src/**/*.jsx test/**/*.js)

PACKAGE = $(shell node -pe 'require("./package.json").name.split("/")[1]')
VERSION = $(shell node -pe 'require("./package.json").version')

.PHONY: all clean distclean webpack

all: webpack test

lint: eslint

eslint: node_modules/.dirstamp
	@./node_modules/.bin/eslint $(ESLINT_FILES)

webpack: node_modules/.dirstamp
	@webpack

node_modules/.dirstamp: package.json
	@npm update --loglevel warn
	@touch $@

test: node_modules/.dirstamp
	@echo 'testing'
	# @./node_modules/.bin/mocha $(TEST_REPORTER) $(TESTS) $(TEST_OUTPUT)

clean: node_modules/.dirstamp
	@rm -rf public

all: webpack

distclean: clean
