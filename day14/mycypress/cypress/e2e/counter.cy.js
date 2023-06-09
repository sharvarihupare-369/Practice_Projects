
const url = "http://localhost:3000"

describe('Test counter', () => {
  it('Vist the app', () => {
    cy.visit(url);
  })

  //check if counter is rendered 

  it(`Counter should render` , () => {
    cy.visit(url);
    cy.get(".App").should("exist")
    cy.get("[data-testid=counter]").should("exist")
    cy.get("[data-testid=add-button]").should("exist")
    // cy.get(".App")
  })

  //initial value of counter should be 0
  // it(`Initial value of counter should be zero`, () => {
  //   cy.visit('http://localhost:3000');
  //   cy.get("[data-testid=counter]").should("have.text", "Counter: 0")
  // })

  //Add&Reduce
  // it(`On clicking of counter value should change`, () => {
  //   cy.visit('http://localhost:3000');
  //   cy.get("[data-testid=add-button]").click()
  //   cy.get("[data-testid=counter]").should("have.text", "Counter: 1")
  //   cy.get("[data-testid=add-button]").click()
  //   cy.get("[data-testid=counter]").should("have.text", "Counter: 2")
  //   cy.get("[data-testid=reduce-button]").click()
  //   cy.get('[data-testid="counter"]').should("have.text" , "Counter: 1")
  //   cy.get("[data-testid=reduce-button]").click()
  //   cy.get('[data-testid="counter"]').should("have.text" , "Counter: 0")
  // })

  it(`Should render the initial counter value from the server`, () => {
     cy.visit(url)
     cy.intercept("GET", "**/counter" , {value: 10}).as("getRequest");
     cy.wait("@getRequest")
     cy.get("[data-testid=counter]").should("have.text", "Counter: 10")
  })

  it(`Should render the initial counter value from the server`, () => {
    cy.visit(url)
    cy.intercept("POST", "**/counter" , {value: 12}).as("postRequest");
    cy.get("[data-testid=add-button]").click()
    cy.wait("@postRequest")
    cy.get("[data-testid=counter]").should("have.text", "Counter: 12")
 })

})