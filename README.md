# Code splitting with webpack 4

Webpack 4 has very powerful and easy to use code splitting functionality, using which we can always ship the least amount of code that user needs to use our applications.

## Pros/cons
For user:

* [+] Better caching, faster loads on subsequent visits
* [+] Faster initial loads (ship only code that user currently needs)

For developers:
* [+] Enforces better code organization, less coupling
* [-] More complex builds

## When to consider avoiding
* Small app (smaller chunks reduce compression efficiency)
* You don't have HTTP2 server
* Your users don't have HTTP2 capable browsers

## Links
https://www.npmjs.com/package/webpack-bundle-analyzer 
https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/  
https://github.com/smooth-code/loadable-components  
https://github.com/vybu/async-redux-store-enhancer  
https://medium.com/@asyncmax/the-right-way-to-bundle-your-assets-for-faster-sites-over-http-2-437c37efe3ff  
