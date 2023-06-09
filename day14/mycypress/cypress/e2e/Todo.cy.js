
const url = "https://example.cypress.io/todo"
describe('Test Todo', () => {
    it('Vist the app', () => {
      cy.visit(url);
    })

    it(`should have a input box`, () => {
        cy.visit(url)
        cy.get("input").should("exist")
    })

    it('User should be able to add a new Todo' , ()=> {
     cy.visit(url)
     cy.get(".todo-list").children().should("have.length", 2);
     cy.get(".new-todo").type("Learn React testing{enter}");
     cy.get(".todo-list").children().should("have.length", 3);


    })

})