import loginPage from "../helpers/lesson19/loginPage";

const login = new loginPage();

describe("template spec", () => {
  it("passes", () => {
    login.navigate();
    cy.get("a.header_logo").should("have.attr", "href", "/");
    cy.get("a.header-link").should("contain", "Home");
    cy.get("button").eq(0).should("contain", "About");
    cy.get("button").eq(1).should("contain", "Contacts");
    cy.get("button.-guest").should("contain", "Guest log in");
    cy.get("button.header_signin").should("contain", "Sign In");
    //footer
    cy.get(
      '#contactsSection a[href*="https://www.facebook.com/Hillel.IT.School"]',
    ).should("exist");
    cy.get('#contactsSection a[href*="https://t.me/ithillel_kyiv"]').should(
      "exist",
    );
    cy.get(
      '#contactsSection a[href*="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]',
    ).should("exist");
    cy.get(
      '#contactsSection a[href*="https://www.instagram.com/hillel_itschool/"]',
    ).should("exist");
    cy.get(
      '#contactsSection a[href*="https://www.linkedin.com/school/ithillel/"]',
    ).should("exist");
    cy.get('#contactsSection a[href*="https://ithillel.ua"]')
      .should("exist")
      .and("contain", "ithillel.ua");
    cy.get("a.footer_logo").should("have.attr", "href", "/");
  });
});
