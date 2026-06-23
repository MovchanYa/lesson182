import basePage from "../lesson19/basePage";

const url = "/";

export default class extends basePage {
  constructor() {
    super(url);
  }

  get fuelButton() {
    return cy.get(".icon-fuel");
  }
  get carSelector() {
    return cy.get("#carSelectDropdown");
  }

  get tableDate() {
    return cy.get("tbody tr").eq(0).find("td").eq(0);
  }

  get tableMiles() {
    return cy.get("tbody tr").eq(0).find("td").eq(1);
  }
  get tableLiters() {
    return cy.get("tbody tr").eq(0).find("td").eq(2);
  }
  get tableCost() {
    return cy.get("tbody tr").eq(0).find("td").eq(3);
  }
}
