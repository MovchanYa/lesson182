import { yutubeSearch, cySearch } from "../helpers/searchQuerys";

describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get(`[class="ytSearchboxComponentSearchForm"]`)
      .type(`${yutubeSearch}`)
      .type(`{enter}`);
    cy.get(`[title="Yung Gravy - oops! (Official Video)"]`).click();
    cy.wait(500);
  });

  it("scrollIntoView", () => {
    cy.visit("https://docs.cypress.io/app/get-started/why-cypress");
    cy.wait(5000);
    cy.contains("Search ⌘K").click();
    cy.get(`[placeholder="Search docs"]`).type(`${cySearch}`).type(`{enter}`);
    cy.get("#Requirements").scrollIntoView({ duration: 2000 });
  });
});
