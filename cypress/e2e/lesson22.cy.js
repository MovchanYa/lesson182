import regPage from "../helpers/lesson20/registration";
import loginPage from "../helpers/lesson21/login";
import addCar from "../helpers/lesson21/addCar";
import carCheck from "../helpers/lesson22/carCheck";
import "../helpers/lesson20/commands";
import "../helpers/lesson22/commands22";

const reg = new regPage();
const log = new loginPage();
const add = new addCar();
const car = new carCheck();
let uniqueEmail;
let carId;
const password = Cypress.env("userPassword");
const todayDate = new Date().toISOString().split("T")[0];
const expectedUIDate = new Date().toLocaleDateString("uk-UA");

describe("car creation with post check", () => {
  beforeEach(() => {
    reg.navigate();
  });

  it("add a car", () => {
    uniqueEmail = reg.register(); // wow
    cy.intercept({
      url: "https://qauto.forstudy.space/api/cars",
      method: "POST",
    }).as("carIdRequest");

    add.addCar();

    cy.wait("@carIdRequest").then((interception) => {
      expect(interception.response.statusCode).to.equal(201);
      carId = interception.response.body.data.id;
      console.log(carId);
      console.log("just marker", interception.response.body);
    });

    cy.get(".car-list").should("have.length", 1);
  });

  it("check carId in carList", () => {
    log.loginViaUI(uniqueEmail, password);
    cy.url().should("include", "/panel/garage"); // тут я пішов до ші бо виявляється get запит йде занадто швидко
    cy.request("GET", "/api/cars").then((response) => {
      const carIds = response.body.data.map((car) => car.id);
      expect(carIds).to.include(carId);
      console.log(carIds);
      console.log(response.body);
    });
  });

  it("add expenses via api", () => {
    log.loginViaUI(uniqueEmail, password);
    cy.url().should("include", "/panel/garage");

    cy.fixture("example").then((data) => {
      cy.addExpenseViaAPI(carId).then((response) => {
        console.log("marker2", response);
        expect(response.status).to.equal(200);
        const expenseData = response.body.data;

        expect(expenseData.carId).to.equal(carId);
        expect(expenseData.id).to.exist;
        expect(expenseData.liters).to.equal(data.liters);
        expect(expenseData.mileage).to.equal(data.mileage);
        expect(expenseData.reportedAt).to.equal(todayDate);
        expect(expenseData.totalCost).to.equal(data.totalCost);
      });
    });
  });

  it("displayed expenses changes", () => {
    cy.fixture("example").then((data) => {
      log.loginViaUI(uniqueEmail, password);
      car.fuelButton.click();
      cy.url().should("include", "/panel/expenses");
      car.carSelector.should("contain.text", "BMW");
      console.log("я взагалі не люблю бмв");
      car.tableDate.should("contain.text", expectedUIDate);
      car.tableMiles.should("contain.text", data.mileage);
      car.tableLiters.should("contain.text", data.liters);
      car.tableCost.should("have.text", `${data.totalCost}.00 USD`);
    });
  });
});
