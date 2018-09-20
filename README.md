# Code splitting with webpack 4

Webpack 4 has very powerful and easy to use code splitting functionality, using which we can always ship the least amount of code that user needs to use our applications.

## Pros/cons
For user:

* [+] Better caching, faster loads on subsequent visits
* [+] Faster initial loads (ship only code that user currently needs)

For developers:
* [+] Enforces better code organization, less coupling
* [-] More complex builds
## When to use

* Large app
* App with many different features

## When to consider avoiding

* Small app (smaller chunks reduce compression efficiency)
* You don't have HTTP2 server
* Your user don't have HTTP2 capable browsers



## Links
https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/
https://github.com/smooth-code/loadable-components
https://github.com/vybu/async-redux-store-enhancer
