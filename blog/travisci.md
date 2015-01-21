This is a quick one on Travis CI, what it is and why it, quite frankly is really awesome. It's just to give you a quick taste of what it is and why you should use it.

### Continuous integration

For those of your unfamiliar with the concept of continuous integration, this is a development based concept that means to streamline integration. Whereas the concept is usually used in large teams to ensure there is no divergence from a master branch too much it is useful right down to a developer on their own (enter myself).

### What is it?

To cut what Travis CI is, is that it will allow you to automate some of your processes so that they are run automatically. For a recent project, this means running my front end unit testing, and some cyclomatic complexity tests. This ensures that the complexity of the code is always below 5 (in essence an arbritrary target, but a good one nonetheles). 

The real essence of what makes Travis awesome though is the setup. All you need to do is tell it the type of project you're running, in my case node. All it requires is that you add a small configuration file, like this one below:

    language: node_js
    node_js:
      - "0.10"
    before_script:
      - cr ./scripts  --format json --maxcyc 5 --logicalor --silent
      - npm install -g bower
      - bower install

All this does is say:
* I am using node so use version 0.10 
* Before running the node test command (npm test) to check the cyclomatic complectity is lower than 5 using [Complexity Report](https://www.npmjscom/package/complexity-report) a beautiful and straightforward complexity reporter 
* And finally install [bower](http://bower.io/) using [npm](https://www.npmjs.com/), then install all dependencies (to make sure the tests are setup and ready to run)

## Why is this so cool?

Travis will hook into all of your commit posts up to GitHub, so when you make a change to your repository Travis will fire up a Linux server with your code, run your commands (before scripts) and then run the test command to make sure that everything is okay. Providing that nothing exits with a 1, then you're doing good. Travis will then send you back to Github and advise you that the code is good, and you can raise a pull or merge into your main branch with confidence. 

This:
* Saves time
* Gives you confidence
* Stops you needing to run tests all the time on local
* Gives transparency in teams
* Makes testing that little bit easier (so you're less likely to come up with excuses!)

### Additional reading

* [The official travis site](https://travis-ci.org/getting_started)
* [The official travis blog](http://blog.travis-ci.com/)
* [A neat tutorial by tuts+](http://code.tutsplus.com/tutorials/travis-ci-what-why-how--net-34771)