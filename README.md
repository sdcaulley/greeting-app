# README

## Usage
This is a light weight command line application that greets a user.  A user can specify their name, a greeting and whether they want
the response in plain text.
```
$ node cli.js --name:stephanie --greeting:hi --plain
hi, stephanie!

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