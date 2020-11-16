class OLX{
    goToMainURL(){
        cy.visit('https://www.olx.ua');
    };
    clickItemWithText(text){
        cy.contains(text).click();
    };
    serchForTextOnTheMainPage(text) {
        cy.get('[data-cy=homepage_input_textsearch]').type(text);
        clickFirstAutosuggestion();
        cy.get('div.content table').should('be.visible') 
    };
    searchForText(text){
        cy.get('[data-cy=search_results_input_textsearch]').type(text);
        clickFirstAutosuggestion();
    };
}

function clickFirstAutosuggestion(){
    cy.get('div#autosuggest-div a').first().click();
};

export default OLX