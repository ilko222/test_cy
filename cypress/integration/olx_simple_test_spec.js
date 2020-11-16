import OLX from './pageObjects/main_olx_page'
const keyWords = require('../fixtures/olx_search_words.json');
const olx = new OLX();


describe('User navigates to the OLX main page and Search for some item', function() {
    it('User navigates to the OLX page', function() {
        olx.goToMainURL();
            cy.get('.subcategories-list').should('not.be.visible') 
        olx.clickItemWithText('Детский');
            cy.get('.subcategories-list').should('be.visible') 
        olx.clickItemWithText('Детская одежда');
            cy.url().should('include', '/detskiy-mir/detskaya-odezhda');
        olx.searchForText(keyWords.singleKey);

    });
})

describe('User navigates to the OLX main page and make some DataDriven search', function () {
    beforeEach(function(){
        olx.goToMainURL();
    })
    keyWords.multikey.forEach((key) => {
        it(`User Navigates to the main page and search for >${key}<`, function () {
            olx.serchForTextOnTheMainPage(key);
        })
    })
});

