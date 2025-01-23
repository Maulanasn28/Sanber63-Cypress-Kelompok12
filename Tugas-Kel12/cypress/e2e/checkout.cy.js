const credentials = require('../fixtures/credentials.json');
const checkout = require('../fixtures/checkout.json');
import checkoutPage from '../support/pageObject/checkoutPage.js';

describe('Processed Checkout', () => {
    beforeEach(() => {
      cy.visit('');
      cy.login(credentials.email, credentials.password);

      checkoutPage.selectProduct();
      checkoutPage.selectSize();
      checkoutPage.selectColor();
      checkoutPage.addToCart();

      // Klik ikon keranjang dengan selektor spesifik
      cy.wait(5000);
      checkoutPage.openCart();

      checkoutPage.proceedToCheckout();
      cy.wait(5000);
    })

    //Scenario for new account
    it.skip('positive - Checkout success for a new account by filling in the shipping address', () => {        
        //Enter Shipping Details
        checkoutPage.verifyShippingTitle(checkout.shippingAddress.shipping_title);
        checkoutPage.verifyShippingUrl(checkout.shippingAddress.shipping_url);

        checkoutPage.inputCompany(checkout.shippingAddress.company);
        checkoutPage.inputStreet(checkout.shippingAddress.street_address);
        checkoutPage.inputCity(checkout.shippingAddress.city);
        checkoutPage.inputState(checkout.shippingAddress.state);
        checkoutPage.inputPostcode(checkout.shippingAddress.postal_code);
        checkoutPage.inputCountry(checkout.shippingAddress.country);
        checkoutPage.inputTelephone(checkout.shippingAddress.phone_number);
        
        // Pilih metode pengiriman
        checkoutPage.selectShippingMethod();   

        // Klik tombol submit
        checkoutPage.submitShipping();
        cy.wait(6000);


        //Review & Payments
        checkoutPage.verifyPaymentTitle(checkout.shippingAddress.payment_title);
        checkoutPage.verifyPaymentUrl(checkout.shippingAddress.payment_url);
        checkoutPage.checkBillingSameAsShipping();
        checkoutPage.clickPlaceOrder();

        //Finished Order
        checkoutPage.verifyOrderSuccessMessage1(checkout.shippingAddress.verifySuccess_1);
        checkoutPage.verifyOrderSuccessMessage3(checkout.shippingAddress.verifySuccess_3);
        checkoutPage.verifyOrderSuccessUrl(checkout.shippingAddress.success_url);

        checkoutPage.clickContinueShopping();
    })

    it.only('positive - Checkout success by adding a new address', () => {  
      //Enter Shipping Details
      checkoutPage.verifyShippingTitle(checkout.shippingAddress.shipping_title);
      checkoutPage.verifyShippingUrl(checkout.shippingAddress.shipping_url);

      checkoutPage.clickNewAddress();
      checkoutPage.verifyAddressTitle(checkout.shippingAddress.shipping_title);

      checkoutPage.inputCompany(checkout.newAddress.company);
      checkoutPage.inputStreet(checkout.newAddress.street);
      checkoutPage.inputCity(checkout.newAddress.city);
      checkoutPage.inputState(checkout.newAddress.state);
      checkoutPage.inputPostcode(checkout.newAddress.postcode);
      checkoutPage.inputCountry(checkout.newAddress.country);
      checkoutPage.inputTelephone(checkout.newAddress.phone);
      checkoutPage.checkSaveAddress();

      checkoutPage.clickShipHere();
      checkoutPage.verifyNewAddress(checkout.shippingAddress.city2);

      
      // Pilih metode pengiriman
      checkoutPage.selectShippingMethod();   

      // Klik tombol submit
      checkoutPage.submitShipping();
      // cy.wait(6000);


      //Review & Payments
      checkoutPage.verifyPaymentTitle(checkout.shippingAddress.payment_title);
      checkoutPage.verifyPaymentUrl(checkout.shippingAddress.payment_url);
      checkoutPage.checkBillingSameAsShipping();
      checkoutPage.clickPlaceOrder();

      //Finished Order
      checkoutPage.verifyOrderSuccessMessage1(checkout.shippingAddress.verifySuccess_1);
      checkoutPage.verifyOrderSuccessMessage3(checkout.shippingAddress.verifySuccess_3);
      checkoutPage.verifyOrderSuccessUrl(checkout.shippingAddress.success_url);

      checkoutPage.clickContinueShopping();
  })

  it('positive - Checkout success by add another address', () => {  
    //Enter Shipping Details
    checkoutPage.verifyShippingTitle(checkout.shippingAddress.shipping_title);
    checkoutPage.verifyShippingUrl(checkout.shippingAddress.shipping_url);

    checkoutPage.clickNewAddress();
    checkoutPage.verifyAddressTitle(checkout.shippingAddress.shipping_title);

    checkoutPage.inputCompany(checkout.anotherAddress.company);
    checkoutPage.inputStreet(checkout.anotherAddress.street);
    checkoutPage.inputCity(checkout.anotherAddress.city);
    checkoutPage.inputState(checkout.anotherAddress.state);
    checkoutPage.inputPostcode(checkout.anotherAddress.postcode);
    checkoutPage.inputCountry(checkout.anotherAddress.country);
    checkoutPage.inputTelephone(checkout.anotherAddress.phone);
    checkoutPage.checkSaveAddress();

    checkoutPage.clickShipHere();
    checkoutPage.verifyNewAddress(checkout.shippingAddress.city2);

    checkoutPage.selectShippingMethod();   

    checkoutPage.submitShipping();
    
    checkoutPage.verifyPaymentTitle(checkout.shippingAddress.payment_title);
    checkoutPage.verifyPaymentUrl(checkout.shippingAddress.payment_url);
    checkoutPage.checkBillingSameAsShipping();
    checkoutPage.clickPlaceOrder();

    checkoutPage.verifyOrderSuccessMessage1(checkout.shippingAddress.verifySuccess_1);
    checkoutPage.verifyOrderSuccessMessage3(checkout.shippingAddress.verifySuccess_3);
    checkoutPage.verifyOrderSuccessUrl(checkout.shippingAddress.success_url);

    checkoutPage.clickContinueShopping();
})

  it('positive - Checkout success by selecting a saved address', () => {
    checkoutPage.verifyShippingTitle(checkout.shippingAddress.shipping_title);
    checkoutPage.verifyShippingUrl(checkout.shippingAddress.shipping_url);

    checkoutPage.clickAddress();
    
    // Pilih metode pengiriman
    checkoutPage.selectShippingMethod();   

    // Klik tombol submit
    checkoutPage.submitShipping();
    // cy.wait(6000);


    //Review & Payments
    checkoutPage.verifyPaymentTitle(checkout.shippingAddress.payment_title);
    checkoutPage.verifyPaymentUrl(checkout.shippingAddress.payment_url);
    checkoutPage.checkBillingSameAsShipping();
    checkoutPage.clickPlaceOrder();

    //Finished Order
    checkoutPage.verifyOrderSuccessMessage1(checkout.shippingAddress.verifySuccess_1);
    checkoutPage.verifyOrderSuccessMessage3(checkout.shippingAddress.verifySuccess_3);
    checkoutPage.verifyOrderSuccessUrl(checkout.shippingAddress.success_url);

    checkoutPage.clickContinueShopping();
  })

  it('Negative - Checkout failed with empty fields', () => {        
    //Enter Shipping Details
    checkoutPage.verifyShippingTitle(checkout.shippingAddress.shipping_title);
    checkoutPage.verifyShippingUrl(checkout.shippingAddress.shipping_url);

    checkoutPage.clickNewAddress();
    checkoutPage.verifyAddressTitle(checkout.shippingAddress.shipping_title);

    // checkoutPage.inputCompany(checkout.newAddress.company);
    // checkoutPage.inputStreet(checkout.newAddress.street);
    // checkoutPage.inputCity(checkout.newAddress.city);
    // checkoutPage.inputState(checkout.newAddress.state);
    // checkoutPage.inputPostcode(checkout.newAddress.postcode);
    // checkoutPage.inputCountry(checkout.newAddress.country);
    // checkoutPage.inputTelephone(checkout.newAddress.phone);
    // checkoutPage.checkSaveAddress();

    checkoutPage.clickShipHere();
    checkoutPage.verifyErrorField(checkout.shippingAddress.errorField);
  })

  it.only('Negative - Checkout failed with empty city', () => {        
   //Enter Shipping Details
   checkoutPage.verifyShippingTitle(checkout.shippingAddress.shipping_title);
   checkoutPage.verifyShippingUrl(checkout.shippingAddress.shipping_url);

   checkoutPage.clickNewAddress();
   checkoutPage.verifyAddressTitle(checkout.shippingAddress.shipping_title);

   checkoutPage.inputCompany(checkout.newAddress.company);
   checkoutPage.inputStreet(checkout.newAddress.street);
   checkoutPage.inputState(checkout.newAddress.state);
   checkoutPage.inputPostcode(checkout.newAddress.postcode);
   checkoutPage.inputCountry(checkout.newAddress.country);
   checkoutPage.inputTelephone(checkout.newAddress.phone);
   checkoutPage.checkSaveAddress();

   checkoutPage.clickShipHere();

   checkoutPage.verifyErrorField(checkout.shippingAddress.errorField);
  })  
})