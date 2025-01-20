class checkoutPage {
    product_1 = '.product-item a'
    size_product = '#option-label-size-143-item-167'
    color_product = '#option-label-color-93-item-50'
    addToCart_btn = '#product-addtocart-button'
    cart_btn = '.showcart'
    proceedCheckout_btn = '#top-cart-btn-checkout'
    shippingAdd_title = '#shipping > .step-title'
    company = '[name="company"]'
    street = '[name="street[0]"]'
    city = '[name="city"]'
    state = '[name="region_id"]'
    postCode = '[name="postcode"]'
    country = '[name="country_id"]'
    telephone = '[name="telephone"]'
    shipping_method = 'input[type="radio"][value="flatrate_flatrate"]'
    next_btn = '.button'
    payment_title = '.payment-group > .step-title'
    billingAdd_checkbox = '#billing-address-same-as-shipping-checkmo'
    placeOrder_btn = '.payment-method-content > :nth-child(4) > div.primary > .action'
    successOrder_1 = '.base'
    successOrder_2 = '.message-success > div'
    successOrder_3 = '.checkout-success > :nth-child(1)'
    continueShpg_btn = '.checkout-success > .actions-toolbar > div.primary > .action'
    newAddress_btn = '.new-address-popup > .action'
    shipAddress_title = '#modal-title-11'
    shipHere_btn = '.modal-footer > .primary'
    selectAddress = '[class="shipping-address-item selected-item"]'
    selectedAddress = '.action-select-shipping-item'
    saveAddress = '[id="shipping-save-in-address-book"]'
    error = '[data-bind="text: element.error"]'


    selectProduct() {
        cy.get(this.product_1).first().click();
    }
    
    selectSize() {
        cy.get(this.size_product).click();
    }

    selectColor() {
        cy.get(this.color_product).click();
    }

    addToCart() {
        cy.get(this.addToCart_btn).click();
    }

    openCart() {
        cy.get(this.cart_btn).click({forche:true});
    }
    
    proceedToCheckout() {
        cy.get(this.proceedCheckout_btn).click();
    }

    verifyShippingTitle(title) {
        cy.get(this.shippingAdd_title).should('have.text', title);
    }

    verifyShippingUrl(url) {
        cy.url().should('include', url);
    }

    inputCompany(company) {
        cy.get(this.company).type(company);
    }

    inputStreet(street) {
        cy.get(this.street).type(street);
    }

    inputCity(city) {
        cy.get(this.city).type(city);
    }

    inputState(state) {
        cy.get(this.state).select(state);
    }

    inputPostcode(postalCode) {
        cy.get(this.postCode).type(postalCode);
    }

    inputCountry(country) {
        cy.get(this.country).select(country);
    }

    inputTelephone(telephone) {
        cy.get(this.telephone).type(telephone);
    }
    
    selectShippingMethod() {
        cy.get(this.shipping_method).check();
    }

    submitShipping() {
        cy.get(this.next_btn).click();
    }

    verifyPaymentTitle(title) {
        cy.get(this.payment_title).should('have.text', title);
    }

    verifyPaymentUrl(url) {
        cy.url().should('include', url);
    }

    checkBillingSameAsShipping() {
        cy.get(this.billingAdd_checkbox).check();
    }

    clickPlaceOrder() {       
        cy.get(this.placeOrder_btn).click();
    }

    verifyOrderSuccessMessage1(expectedMessage) {
        cy.get(this.successOrder_1).should('have.text', expectedMessage);
    }
    
      
    verifyOrderSuccessMessage2(expectedMessage) {
        cy.get(this.successOrder_2).should('contain', expectedMessage);
    }
    
    verifyOrderSuccessMessage3(expectedMessage) {
        cy.get(this.successOrder_3).should('contain', expectedMessage);
    }

    verifyOrderSuccessUrl(url) {
        cy.url().should('include', url);
    }
    
    clickContinueShopping() {
        cy.get(this.continueShpg_btn).click();
    }

    clickNewAddress() {
        cy.get(this.newAddress_btn).click();
    }

    verifyAddressTitle(title) {
        cy.get(this.shipAddress_title).should('contain', title);
    }

    clickShipHere() {
        cy.get(this.shipHere_btn).click();
    }

    verifyNewAddress(city) {
        cy.get(this.selectAddress).should('exist').contains(city);
    }

    clickAddress() {
        cy.get(this.selectedAddress).eq(1).click();
    }

    checkSaveAddress() {
        cy.get(this.saveAddress).check({force: true});
    }

    verifyErrorField(message) {
        cy.get(this.error).should('include.text', message);
    }
    

}

module.exports = new checkoutPage()