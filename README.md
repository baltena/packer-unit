packer-e2e
==========
The unit plugin runs all javascript unit tests. The scripts are located in the folder /test/unit. Common for unit testing is that the same sturcture is used as the app folder. For every source file a coresponding test file is specified. The test files will be indicated with the .spec.js suffix. e.g. /app/controllers/IndexController.js will have its unit test file /test/unit/controllers/IndexController.spec.js

Unit test are specified with Jasmine and will run with Karma. Jasmine is a behaviour driven testing tool where tests can be specified in a structured way. Karma runs the test cases against different browsers to eliminate cross browser dependensies.

After running the tests a Istanbul coverage report is generated and placed in the /coverage folder.

Unit tests can be runt by run the 'grunt unit' command. During development of the unit test it can be nice to have auto watch enabled. Auto watch can be started by running 'grunt unit:watch'.

Grunt Modules
------------

- grunt-karma: 0.8.3,
- karma: ^0.12.0,
- karma-jasmine: 0.2.2,
- karma-coverage: 0.2.4,
- karma-chrome-launcher: ~0.1.4,
- packer-core: ~0.0.1


Grunt Task
----------

- unit
- unit:run

More information
----------------
http://packerjs.io
