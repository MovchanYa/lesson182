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

  regModal() {
    cy.get("button.header_signin").click();
    cy.get("button.btn-link").contains("Registration").click();
  }

  get nameField() {
    return cy.get("#signupName");
  }
  get nameError() {
    return this.nameField.should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
  }

  get error() {
    return cy.get(".invalid-feedback");
  }

  get registerButton() {
    return cy.contains("button", "Register");
  }
  get disabledRegButton() {
    return this.registerButton.should("be.disabled");
  }
  get activeRegButton() {
    return this.registerButton.should("not.be.disabled");
  }

  get deactivate() {
    return cy.get(".modal-title").contains("Registration").click();
  }

  get lastNameField() {
    return cy.get("#signupLastName");
  }
  get lastNameError() {
    return this.lastNameField.should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
  }
  get nameErrorTextLength() {
    return this.error.should(
      "have.text",
      "Name has to be from 2 to 20 characters long",
    );
  }
  get lastNameErrorText() {
    return this.error.should(
      "have.text",
      "Last name has to be from 2 to 20 characters long",
    );
  }

  get emailField() {
    return cy.get("#signupEmail");
  }
  get emailError() {
    return this.emailField.should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
  }
  get passwordField() {
    return cy.get("#signupPassword");
  }
  get passwordError() {
    return this.passwordField.should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
  }

  get passwordErrorText() {
    return this.error.should(
      "have.text",
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    );
  }

  get repeatPasswordField() {
    return cy.get("#signupRepeatPassword");
  }
  get repeatPasswordError() {
    return this.repeatPasswordField.should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
  }

  generateEmail() {
    const uniqueNumber = Date.now();
    return `a+${uniqueNumber}@koma.com`;
  }
}
