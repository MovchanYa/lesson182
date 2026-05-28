import basePage from "../lesson19/basePage";

const url = "/";

export default class extends basePage {
  constructor() {
    super(url);
  }

  navigate() {
    cy.visit(this._url, {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  }
  logout() {
    cy.get(".icon-logout").click();
  }
  logModal() {
    cy.get("button.header_signin").click();
  }
  enterEmail() {
    return cy.get("#signinEmail");
  }
  enterPassword() {
    return cy.get("#signinPassword");
  }
  clickLogin() {
    cy.contains("button", "Login").click();
  }

  loginViaUI(email, password) {
    this.navigate();
    this.logModal();
    this.enterEmail().type(email);
    this.enterPassword().type(password, { sensitive: true });
    this.clickLogin();
  }
}
