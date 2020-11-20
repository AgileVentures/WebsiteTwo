describe("Smoke test", () => {
  it("generally works", () => {
    cy.visit("/").get("h2").contains("Agile Ventures")
  })
})
