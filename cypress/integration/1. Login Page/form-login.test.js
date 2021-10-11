/// <reference types="cypress" />

describe("Page Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Validate Form Login", () => {
    cy.get("form");
    cy.get("form input[type=text][name=username]");
    cy.get("form input[type=password][name=password]");
    cy.get("form button[type=submit]");
  });

  describe("Test Login", () => {
    it("Empty Username & Password", () => {
      cy.get("form");
      cy.get("form input[type=text][name=username]");
      cy.get("form input[type=password][name=password]");
      cy.get("form button[type=submit]").click();
      cy.get("form input[type=text][name=username]")
        .closest(".ant-form-item")
        .get(".ant-form-item-explain-error")
        .should("exist");
      cy.get("form input[type=password][name=password]")
        .closest(".ant-form-item")
        .get(".ant-form-item-explain-error")
        .should("exist");
      cy.location().should((loc) => {
        expect(loc.pathname).to.not.equal("/dashboard");
        expect(loc.pathname).to.equal("/login");
      });
    });

    it("Valid Username & Password", () => {
      cy.get("form");
      cy.get("form input[type=text][name=username]").type("valid-username");
      cy.get("form input[type=password][name=password]").type("valid-password");
      cy.get("form button[type=submit]").click();
      cy.get("form input[type=text][name=username]")
        .closest(".ant-form-item")
        .get(".ant-form-item-explain-error")
        .should("not.exist");
      cy.get("form input[type=password][name=password]")
        .closest(".ant-form-item")
        .get(".ant-form-item-explain-error")
        .should("not.exist");
      cy.location().should((loc) => {
        expect(loc.pathname).to.equal("/dashboard");
      });
    });
  });
});
