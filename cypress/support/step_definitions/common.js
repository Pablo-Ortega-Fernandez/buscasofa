import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario navega a {string}", function (url) {
  cy.visit(url);
});

Given("el usuario navega a la home", function () {
  cy.visit("/");
});

Then("debería ver el texto {string}", function (texto) {
  cy.contains(texto).should("be.visible");
});

Then("debería ver el input de filtro por rótulo", function () {
  cy.get(".loading", { timeout: 15000 }).should("not.exist");
  cy.get("#filtro-rotulo").should("be.visible");
});

When("el usuario escribe {string} en el filtro de rótulo", function (texto) {
  cy.get("#filtro-rotulo").clear().type(texto);
});

Then("el filtro debería contener {string}", function (texto) {
  cy.get("#filtro-rotulo").should("have.value", texto);
});