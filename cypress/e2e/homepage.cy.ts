describe("Test in homepage", () => {
  it("Render the login page", () => {
    cy.visit("/");
    cy.contains("p", "智会平台");
  });
});
