
/**
 * (page-objects/saucedemo.js)
 *
 * Page object saucedemo.com.
 *
 */

// Initialize variables.
 const logInPage = 'https://www.saucedemo.com/';
 const logOutPage = 'https://www.saucedemo.com/';
 const buyerFirstName = "TestFirstname";
 const buyerLastName = "testLastname";
 const buyerPostcode = "91413";

const saucedemoCommands = {
    pageTitle: function(pageTitle) {
        return this
        .waitForElementVisible('body', 2000)
        .assert.title(pageTitle)
    },

    validUsernamePassword: function(userName, password) {
        return this.fillAndSubmit(userName,password )
    },

    fillAndSubmit: function (userName, password) {
        return this
            .setValue('@userNameSelector', userName)
            .setValue('@passwordSelector', password)
            .click('@loginButton')
            
    },

    successUserLogin: function() {
        return this
        .assert.containsText('@productSelector', 'PRODUCTS')
    },


    //customers add single products to the cart from one page
    singleItemAddToCart: function() {
        return this
        .click('@backpackItem')  
        .click('@shoppingCart')
        .assert.containsText('#item_4_title_link > div', 'Sauce Labs Backpack')
    },
    
    //customers add multiple products to the cart from one page
    multipleItemAddToCart: function() {
        return this
        .click('@backpackItem') 
        .click('@boltTshirtItem') 
        .click('@shoppingCart')
        .assert.containsText('#shopping_cart_container > a > span', '2')
        .assert.containsText('#item_4_title_link > div', 'Sauce Labs Backpack')
        .assert.containsText('#item_1_title_link > div', 'Sauce Labs Bolt T-Shirt')
        
    },
     
    //customers checkout products added to the cart after signing in.
    singleItemCheckout: function() {
        return this
        .click('@cartCheckout') 
        .setValue('@firstName', buyerFirstName)
        .setValue('@lastName', buyerLastName)
        .setValue('@postalCode', buyerPostcode)
        .click('@continueShopping')
        .click('@finishShopping')
        .assert.containsText('h2', 'THANK YOU FOR YOUR ORDER')
    },

     //customers checkout more than one product that was added to his/her cart.
    multipleItetemCheckout: function() {
        return this
        .click('@cartCheckout') 
        .setValue('@firstName', buyerFirstName)
        .setValue('@lastName', buyerLastName)
        .setValue('@postalCode', buyerPostcode)
        .click('@continueShopping')
        .click('@finishShopping')
        .assert.containsText('h2', 'THANK YOU FOR YOUR ORDER')
    },
}

module.exports = {
    url:logInPage,
    commands: [saucedemoCommands],
    elements: {
        userNameSelector: '#user-name',
        passwordSelector: '#password',
        loginButton: '#login-button',
        logoutButton: '#logout_sidebar_link',
        MenuButton: '#react-burger-menu-btn',
        productSelector: '#header_container > div.header_secondary_container > span',
        backpackItem: '#add-to-cart-sauce-labs-backpack',
        boltTshirtItem: '#add-to-cart-sauce-labs-bolt-t-shirt',
        shoppingCart: '#shopping_cart_container',
        cartCheckout: '#checkout',
        firstName:    '#first-name',
        lastName:     '#last-name',
        postalCode: '#postal-code',
        continueShopping: '#continue',
        finishShopping:   '#finish'


    }
}