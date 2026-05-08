describe("template spec", () => {
  it("passes", () => {
    cy.visit("www.youtube.com");
    cy.get(`[class="ytSearchboxComponentSearchForm"]`)
      .type(`Yang gravy`)
      .type(`{enter}`);
    cy.get(`[title="Yung Gravy - oops! (Official Video)"]`).click();
  });
});
