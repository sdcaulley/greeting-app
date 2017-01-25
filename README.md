# README

## Usage
At a command prompt, enter the following command
```
$ node lib/greet.js 
hello stranger

$ node lib/greet.js john
hello john 

```

## Set Up
For installation, at a command prompt enter
```
$ npm install

```
## Coding Standards
For tests we use the mocha library.  
It is included as part of the installation.
```
$ npm run test 
$ npm run test:watch

```

For linting, we use eslint.
It is inclued as part of the installation and a configuration
file is also included (`.eslintrc`).
```
$ npm run lint 

```