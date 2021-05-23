# Nightwatch.js Product purchase Flow – Test cases on the e-commerce demo website saucedemo.com

This project contains Product Buy Flow – End to end Test cases for Ecommerce platform with Nightwatch.js.



## Cloning a repository and install prerequisites
1) Clone the repository
2) Run *npm install* from the command line in the root folder.
3) npm install handlebars
4) You can run the test cases in dev or production environments
 
Root folder:
        TaskX\
Source code files:
             \tests\e-storeTests.js
			 \page-objects\saucedemo.js
			 
Configuration file:
			 \nightwatch.json
			 
Reporting related files:
             \html-reporter.js
			 \html-reporter.hbs


			 
 
 
## Running the Nightwatch tests
Tests can be run on dev or production env, accrodinly it will choose the configuration valaues and parameters. 

You can run e-storeTests.js using `nightwatch "./tests/e-storeTests.js"

You can run e-storeTests.js with the `-e` environment flag to inform the test which environment to run against.

To run e-storeTests.js against dev mode use `nightwatch -e dev "./tests/e-storeTests.js"` and use `nightwatch -e production "./tests/e-storeTests.js"` to have the tests run against production.
