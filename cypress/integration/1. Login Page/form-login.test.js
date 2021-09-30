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

  it("Valid Username & Password", () => {
    cy.visit("/login");
    cy.get("form");
    cy.get("form input[type=text][name=username]").type("valid-username");
    cy.get("form input[type=password][name=password]").type("valid-password");
    cy.get("form button[type=submit]").click();
  });

  describe("Invalid Username/Password", () => {
    it("Empty Username & Password has Error Feedback", () => {
      cy.visit("/login");
      cy.get("form");
      cy.get("form input[type=text][name=username]");
      cy.get("form input[type=password][name=password]");
      cy.get("form button[type=submit]").click();
      cy.get("form input[type=text][name=username]")
        .closest(".ant-form-item")
        .get(".ant-form-item-explain-error")
        .contains("exist");
      cy.get("form input[type=password][name=password]")
        .closest(".ant-form-item")
        .get(".ant-form-item-explain-error")
        .should("exist");
    });
  });
});
