import basePage from "../lesson19/basePage";

const url = "/";

export default class extends basePage {
  constructor() {
    super(url);
  }

  addCar() {
    this.addCarButton.click();
    cy.get("#addCarBrand", { timeout: 10000 }).select(1);
    cy.get("#addCarModel", { timeout: 10000 }).select(1);
    cy.get("#addCarMileage").type("1").clear().blur();
    this.error.should("have.text", "Mileage cost required");
    cy.get("#addCarMileage").type("200");
    cy.get(".modal-footer").contains("button", "Add").click();
  }

  get error() {
    return cy.get(".invalid-feedback");
  }
  get addCarButton() {
    return cy.contains("button", "Add car");
  }

  get disabledAddCarButton() {
    return this.addCarButton.should("be.disabled");
  }

  addMileage() {
    return cy.get("#addExpenseMileage");
  }

  addFuel() {
    cy.contains(".car-item", "BMW 5").find(".car_add-expense").click();
  }

  litersField() {
    return cy.get("#addExpenseLiters");
  }
  costField() {
    return cy.get("#addExpenseTotalCost");
  }

  addButton() {
    return cy.get(".modal-footer").contains("button", "Add").click();
  }
}
