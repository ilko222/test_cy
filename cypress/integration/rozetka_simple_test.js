// describe('Usernavigates to the Rozetca page from the Iphone-6 device', function() {
//     it('Launch browser as Iphone-6 vertical', function() {
//         cy.viewport('iphone-6');
//         cy.visit('https://rozetka.com.ua/');
//         // cy.pause();
//         cy.get("input[name='search']")
//             .type('ботиночки')
//             .should('have.value', 'ботиночки')
//             .type('{enter}');

//         // Should be on a new URL which includes '/commands/actions'
//         cy.url().should('eq', 'https://rozetka.com.ua/search/?text=%D0%B1%D0%BE%D1%82%D0%B8%D0%BD%D0%BE%D1%87%D0%BA%D0%B8')

//         // Get an input, type into it and verify that the value has been updated
//         // cy.pause();
//         cy.get('.search-tools-text')
//             .should('have.value', 'ботиночки')
//     })
// });