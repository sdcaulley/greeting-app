<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Greeting App
===

You've just inherited the fledgling `greeting-app` product. 
Below are a series of changes requests you receive over time.
You need to do the steps sequentially, and update the `CHANGELOG.md`
appropriately.

### week 1

The head of engineering would like to put more structure 
around the build process and project:
* Decide on a coding standard and enforce with `.eslintrc`
* Add a `package.json`, including scripts for
    * test (should run linting before testing)
    * test:watch
    * lint
* Add a README.md that has:
  * Demonstrated use of the app
  * Developer build instructions 
  * Coding standards
* Add a CHANGELOG.md and mark this as version 1.0.0

### week 2

Product Management says we're loosing business to greets-r-us because 
they have a smiley face who says all the greetings: `:) - hello person!`.
After researching the issue, you recommend using [cowsay](https://www.npmjs.com/package/cowsay)
and offer a cow saying the greeting. 
* They love the idea, and say go for it!
* But there are some legacy customers who are change adverse and so they want you 
to check for a `--plain` flag which will preserve the current behavior
of plain text

### week 3

Head of engineering would like to refactor the project so that 
the creating the greeting is a function exported from a module.
  * The Console App file should still exists, but only deal with CLI things and should
  delegate to the function to create the greeting
  * Tests should be updated to test the function instead of the CLI. 
  *But* keep the original test as a golden path system integration test

### week 4

Product management would also like the ability to set the greeting word. As part of this 
change, they would like for you to use flags with colons like:
```
> node greet.js --name:marty --greeting:hola --plain
hola marty
```

All of the flags are optional, and can be in any order. 
Default values are name:`partner` greeting:`hello` (not plain is default)

## Stretch Goals

### week 5

Product management wants to add a flag to change the animal, via `--animal:koala` (see the cowsay docs).
They would also like `node greet.js --animals` to list out available animals.

### week 6

Refactor use of command line arguments to use and adhere to standard of `commander` or `minimist`.

## Remember!

* README and CHANGELOG need to be kept up-to-date for each release!

## Rubric *10pts*

* Tests *3pts*
* Correct functionality *1pts*
* Commit History *2pts*
* CHANGELOG: *2pts*
* README: *2pts*


