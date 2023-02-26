describe("Smoke test", () => {
  it("generally works", () => {
    cy.visit("/").get("h1").contains("AgileVentures")
  })
})
