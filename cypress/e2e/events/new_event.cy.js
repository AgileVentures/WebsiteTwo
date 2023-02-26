describe("Events test", () => {
  it("creating a new event works", () => {
    cy.visit("/events/new")

    cy.get("#name").type("My New Event").should("have.value", "My New Event")

    cy.get("#description")
      .type("A good new event.")
      .should("have.value", "A good new event.")

    cy.get("#category")
      .select("Scrum")
      .get("#duration")
      .type(30)
      .get("#repeats")
      .select("weekly")
      .get("#monday")
      .check()
      .get("#wednesday")
      .check()
      .get("#save-btn")
      .click()
  })
})
