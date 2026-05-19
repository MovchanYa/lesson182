import loginPage from "../helpers/lesson20/registration";
import "../helpers/lesson20/commands";

const reg = new loginPage();
const longValue = "a".repeat(21);
let uniqueEmail;

describe("name field", () => {
  beforeEach(() => {
    reg.navigate();
    reg.regModal();
  });

  it("emptyField", () => {
    reg.nameField.type("A").clear().blur();
    reg.error.should("have.text", "Name required");
    reg.nameError;
    reg.disabledRegButton;
  });

  it("wrongData", () => {
    reg.nameField.type("!!").blur();
    reg.error.should("have.text", "Name is invalid");
    reg.nameError;
    reg.disabledRegButton;
  });

  it("wrongLengthBelow", () => {
    reg.nameField.type("a").blur();
    reg.nameErrorTextLength;
    reg.nameError;
    reg.disabledRegButton;
  });

  it("wrongLengthAbove", () => {
    reg.nameField.type(`${longValue}`).blur();
    reg.nameErrorTextLength;
    reg.nameError;
    reg.disabledRegButton;
  });

  it("redNameBorder", () => {
    reg.nameField.type("a").blur();
    reg.nameErrorTextLength;
    reg.nameError;
    reg.disabledRegButton;
  });
});

describe("last name field", () => {
  beforeEach(() => {
    reg.navigate();
    reg.regModal();
  });

  it("emptyField", () => {
    reg.lastNameField.type("A").clear().blur();
    reg.error.should("have.text", "Last name required");
    reg.disabledRegButton;
  });

  it("wrongData", () => {
    reg.lastNameField.type("!!").blur();
    reg.error.should("have.text", "Last name is invalid");
    reg.lastNameError;
    reg.disabledRegButton;
  });

  it("wrongLengthBelow", () => {
    reg.lastNameField.type("a").blur();
    reg.lastNameErrorText;
    reg.disabledRegButton;
  });

  it("wrongLengthAbove", () => {
    reg.lastNameField.type(`${longValue}`).blur();
    reg.lastNameErrorText;
    reg.disabledRegButton;
  });

  it("redNameBorder", () => {
    reg.lastNameField.type("a").blur();
    reg.lastNameErrorText;
    reg.lastNameError;
    reg.disabledRegButton;
  });
});

describe("email field", () => {
  beforeEach(() => {
    reg.navigate();
    reg.regModal();
  });

  it("emptyField", () => {
    reg.emailField.type("A").clear().blur();
    reg.error.should("have.text", "Email required");
    reg.disabledRegButton;
  });

  it("wrongData", () => {
    reg.emailField.type("!!").blur();
    reg.error.should("have.text", "Email is incorrect");
    reg.disabledRegButton;
  });

  it("redNameBorder", () => {
    reg.emailField.type("a").blur();
    reg.emailError;
    reg.disabledRegButton;
  });
});

describe("password field", () => {
  beforeEach(() => {
    reg.navigate();
    reg.regModal();
  });

  it("emptyField", () => {
    reg.passwordField.type("A").clear().blur();
    reg.error.should("have.text", "Password required");
    reg.disabledRegButton;
  });

  it("wrongData", () => {
    reg.passwordField.type("!!").blur();
    reg.passwordErrorText;
    reg.disabledRegButton;
  });

  it("redNameBorder", () => {
    reg.passwordField.type("a").blur();
    reg.passwordError;
    reg.disabledRegButton;
  });

  it("wrongDataTooLong", () => {
    reg.passwordField.type("Password123456789").blur();
    reg.passwordErrorText;
    reg.disabledRegButton;
  });

  it("wrongDataNoCapital", () => {
    reg.passwordField.type("password123").blur();
    reg.passwordErrorText;
    reg.disabledRegButton;
  });

  it("wrongDataNoInteger", () => {
    reg.passwordField.type("Password").blur();
    reg.passwordErrorText;
    reg.disabledRegButton;
  });
});

describe("re-Password field", () => {
  beforeEach(() => {
    reg.navigate();
    reg.regModal();
  });

  it("emptyField", () => {
    reg.repeatPasswordField.type("A").clear().blur();
    reg.error.should("have.text", "Re-enter password required");
    reg.disabledRegButton;
  });

  it("passwordsDoNotMatch", () => {
    reg.passwordField.type("Password123");
    reg.repeatPasswordField.type("Password456").blur();
    reg.error.should("have.text", "Passwords do not match");
    reg.disabledRegButton;
  });

  it("redRepeatPasswordBorder", () => {
    reg.repeatPasswordField.type("a").blur();
    reg.repeatPasswordError;
    reg.disabledRegButton;
  });

  it("wrongDataTooLong", () => {
    reg.repeatPasswordField.type("Password123456789").blur();
    reg.repeatPasswordError;
    reg.disabledRegButton;
  });

  it("wrongDataNoCapital", () => {
    reg.repeatPasswordField.type("password123").blur();
    reg.repeatPasswordError;
    reg.disabledRegButton;
  });

  it("wrongDataNoInteger", () => {
    reg.repeatPasswordField.type("Password").blur();
    reg.repeatPasswordError;
    reg.disabledRegButton;
  });
});

describe("registration functionality", () => {
  beforeEach(() => {
    reg.navigate();
    reg.regModal();
  });

  it("should register successfully with valid credentials", () => {
    uniqueEmail = reg.generateEmail();
    reg.nameField.type("John");
    reg.lastNameField.type("Doe");
    reg.emailField.type(uniqueEmail);
    reg.passwordField.type("Smyle333");
    reg.repeatPasswordField.type("Smyle333");
    reg.activeRegButton;
    reg.activeRegButton.click();
    cy.url().should("include", "/panel/garage");
  });
});

describe("Login Functionality", () => {
  describe("registration functionality", () => {
    beforeEach(() => {
      reg.navigate();
      reg.regModal();
    });

    it("should login successfully with valid credentials", () => {
      cy.login(uniqueEmail);
      cy.url().should("include", "/panel/garage");
    });
  });
});
