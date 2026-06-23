Cypress.Commands.add("addExpenseViaAPI", (carId) => {
  const todayDate = new Date().toISOString().split("T")[0];

  return cy.fixture("example").then((data) => {
    return cy.request({
      method: "POST",
      url: "/api/expenses",
      body: {
        carId: carId,
        reportedAt: todayDate,
        mileage: data.mileage,
        liters: data.liters,
        totalCost: data.totalCost,
        forceMileage: data.forceMileage,
      },
    });
  });
}); // а тут я заблуквав в скобках
