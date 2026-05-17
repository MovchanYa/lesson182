import basePage from "./basePage";

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
}
