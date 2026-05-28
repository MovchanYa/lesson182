import regPage from "../helpers/lesson20/registration";
import loginPage from "../helpers/lesson21/login";
import addCar from "../helpers/lesson21/addCar";
import "../helpers/lesson20/commands";

const reg = new regPage();
const log = new loginPage();
const add = new addCar();
let uniqueEmail;
const password = Cypress.env("userPassword");

describe("registration functionality", () => {
  beforeEach(() => {
    reg.navigate();
    reg.regModal();
  });

  it("should register successfully with valid credentials", () => {
    uniqueEmail = reg.generateEmail();
    const password = Cypress.env("userPassword");

    reg.nameField.type("John");
    reg.lastNameField.type("Doe");
    reg.emailField.type(uniqueEmail);
    reg.passwordField.type(password);
    reg.repeatPasswordField.type(password);
    reg.activeRegButton;
    reg.activeRegButton.click();
    cy.url().should("include", "/panel/garage");
  });
});

describe("car registration functionality", () => {
  beforeEach(() => {
    reg.navigate();
  });

  it("should logout to login then with valid credentials", () => {
    log.logModal();
    log.enterEmail().type(uniqueEmail);
    log.enterPassword().type(password, { sensitive: true });
    log.clickLogin();
    cy.url().should("include", "/panel/garage");
  });

  it("add a car", () => {
    log.loginViaUI(uniqueEmail, password);
    add.addCar();
    cy.get(".car-list").should("have.length", 1);
  });
});

describe("add fuel expense", () => {
  it("should add fuel expense to the car", () => {
    reg.navigate();
    log.loginViaUI(uniqueEmail, password);
    add.addFuel();
    add.addMileage().clear().type("201");
    add.litersField().type("50");
    add.costField().type("100");
    add.addButton();
    cy.contains(".expenses_table", "Liters used").should("be.visible");
  });
});
