Cypress.Commands.add(
  "login",
  (email = "a@coma.com", password = Cypress.env("userPassword")) => {
    cy.visit("/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.get("button.header_signin").click();
    cy.get("#signinEmail").type(email);
    cy.get("#signinPassword").type(password, { sensitive: true });
    cy.contains("button", "Login").click();
  },
);

Cypress.Commands.overwrite("type", (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false;
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: "type",
      message: "*".repeat(text.length),
    });
  }

  return originalFn(element, text, options);
});
