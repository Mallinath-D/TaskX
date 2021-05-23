/**
 * (tests/e-storeTests.js)
 *
 * Product purchase Flow – Test cases on the e-commerce demo website saucedemo.com...
 * Optimized test class using Nightwatch.js's Page Object.
 */

 module.exports = {
    tags: ['test'],
    before: (browser) => console.log('Test is started...'),
    
    after: (browser) => console.log('Test is finished...'),
   
    // Verify that the customer able purchage products added to the cart after signing in to the application. 
  'Test Case-1: Should be able to buy products ': (browser) => {
     
     browser.page.saucedemo()
        .navigate()
        .pageTitle('Swag Labs')
        .validUsernamePassword(browser.globals.username, browser.globals.password)
        .successUserLogin()
        .singleItemAddToCart()
        .singleItemCheckout()
    },
  
    //Verify that the customer can successfully buy more than one product that was added to his/her cart.
    'Test Case-2: Should be able to buy one or more products ': (browser) => {
      browser.page.saucedemo()
         .navigate()
         .validUsernamePassword(browser.globals.username, browser.globals.password)
         .successUserLogin()
         .multipleItemAddToCart()
         .multipleItetemCheckout()
     },
     after: (browser, done) => {
        browser.end();
        done();
    },
  };