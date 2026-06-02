/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario navega a {string}", function (string) {
  cy.visit(string);
});

Then("debería ver el input de filtro por rótulo", () => {
  cy.get('input#filtro-rotulo', { timeout: 10000 }).should('be.visible');
});

When("el usuario escribe {string} en el filtro de rótulo", (texto) => {
  cy.get('input#filtro-rotulo').clear().type(texto);
});

Then("el filtro debería contener {string}", (texto) => {
  cy.get('input#filtro-rotulo').should('have.value', texto);
});