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
    cy.get('[data-testid="manual-clicker"]').click();
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
    cy.get('[data-testid="shop-item-angryBird"]').click();
    cy.get('[data-testid="shop-item-angryBird"]').should("contain.text", "0");
  });

  it("should let you buy shop items with enough money", () => {
    cy.get('[data-testid="infinite-clicker"]').click({ force: true });

    cy.get('[data-testid="shop-item-angryBird"]').click();
    cy.get('[data-testid="shop-item-angryBird"]').should("contain.text", "1");
  });

  it("should make items exponentially more expensive", () => {
    cy.get('[data-testid="infinite-clicker"]').click({ force: true });

    cy.get('[data-testid="shop-item-angryBird"]').click();
    cy.get('[data-testid="shop-item-angryBird"]').click();
    cy.get('[data-testid="shop-item-angryBird"]').click();
    cy.get('[data-testid="shop-item-angryBird"]').click();
    cy.get('[data-testid="shop-item-angryBird"]').click();

    cy.get('[data-testid="shop-item-angryBird"]').should("contain.text", "5");
    cy.get('[data-testid="shop-item-angryBird"]').should("contain.text", "€20");
  });
});

describe("Stock Market", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the stock market", () => {
    cy.contains("ANGRY Coin");
  });

  it("should not let you buy stock without enough money", () => {
    cy.get('[data-testid="stockmarket-buy"]').should("be.disabled");
  });

  it("should let you buy stock with enough money", () => {
    cy.get('[data-testid="infinite-clicker"]').click({ force: true });

    cy.get('[data-testid="stockmarket-buy"]').click();
    cy.get('[data-testid="stockmarket"]').should("contain.text", "owned: 1");
  });
});
