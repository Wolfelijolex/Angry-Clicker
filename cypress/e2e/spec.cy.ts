/// <reference types="cypress" />

describe("AngryClicker", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the title", () => {
    cy.contains("Become angry");
  });

  it("should display the counter", () => {
    cy.contains("0 angry");
  });

  it("should increment the counter", () => {
    cy.get(".TA-manual-click").click();
    cy.contains("1 angry");
  });
});

describe("ShopComponent", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the shop", () => {
    cy.contains("Angry Shop");
  });

  it("should not let you buy shop items without enough money", () => {
    cy.get(".TA-shop-item-angryBird").click();
    cy.get(".TA-shop-item-angryBird").should("contain.text", "0");
  });

  it("should let you buy shop items with enough money", () => {
    for (let i = 0; i < 10; i++) {
      cy.get(".TA-manual-click").click();
    }

    cy.get(".TA-shop-item-angryBird").click();
    cy.get(".TA-shop-item-angryBird").should("contain.text", "1");
  });
});
