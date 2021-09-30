/// <reference types="cypress" />

describe("Page Login", () => {
  it("Render Page", () => {
    cy.visit("/login");
    describe("Validate Form Login", () => {
      cy.get("form");
      cy.get("form input[type=text][name=username]");
      cy.get("form input[type=password][name=password]");
      cy.get("form button[type=submit]");
    });
  });

  describe("Test Login", () => {
    it("Valid Username & Password", () => {
      cy.visit("/login");
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

    it("Empty Username & Password", () => {
      cy.visit("/login");
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
  });
});
