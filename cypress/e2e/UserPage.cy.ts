/// <reference types="cypress" />

describe("UserPage", () => {
  describe("Student role", () => {
    it("displays student calendar", () => {
      cy.visit("http://localhost:3001/?id=3");
      cy.get('[data-test-id="coach-calendar"').should("not.exist");
      cy.get('[data-test-id="student-calendar"').should("exist");
    });
  });

  describe("Coach role", () => {
    it("displays coach calendar", () => {
      cy.visit("http://localhost:3001/?id=1");
      cy.get('[data-test-id="coach-calendar"').should("exist");
      cy.get('[data-test-id="student-calendar"').should("not.exist");
    });
  });
});
