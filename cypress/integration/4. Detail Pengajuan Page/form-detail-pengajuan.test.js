describe("Form Pengajuan", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("Test Form Pengajuan", () => {
    cy.get("form");
    cy.get("form input[type=text][name=username]").type("valid-username");
    cy.get("form input[type=password][name=password]").type("valid-password");
    cy.get("form input[type=checkbox]#isPetugas").check();
    cy.get("form button[type=submit]").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.equal("/dashboard");
    });
    cy.visit("/dashboard/pengajuan");
    cy.wait(5000);
    cy.get("table > tbody > tr").first().click();
    cy.location().should((loc) => {
      expect(loc.pathname).be.contain("/dashboard/pengajuan/1");
    });
  });
});
