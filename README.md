# Serverless testing with Mocha

This will briefly guide you on how to carry out testing with serverless lambda.

### Installation

The following dependencies is required:

```bash
# Install the mocha test framework globally
$ npm i -g mocha

# Install the serverless-mocha-plugin as development dependencies
$ npm i --save-dev serverless-mocha-plugin

```

### Add Test Plugin

Once you have the mocha and the plugin installed, then add the following line to your `serverless.yml`:

```yml
# Code not shown due to brevity
functions:
  hello:
    handler: handler.hello

plugins:
  - serverless-mocha-plugin

```

Run `$ sls` to see a list of available commands. You should be able to see additional commands available for testing, namely:

1. create test
2. invoke test


### Create Test

Let's say you have a handler:

```javascript

module.exports.hello = (event, context, callback) => {
	// Code not shown due to brevity
}
```

In order to create a test for `hello` function, type the following in your terminal:

```bash
$ sls create test --function hello
# or short
$ sls create test -f hello
```

A test folder with the file `hello.js` will be created.

### Run the test

Now you can run the test with the command:
```bash
# Invokes the test
$ sls invoke test
```

