/// <reference types="cypress" />

describe("Table Pengajuan KPR Test", function () {
  // test case
  it("Test Table", function () {
    cy.loginAsPetugas();
    cy.visit("/dashboard/pengajuan");
    cy.get("table > thead > tr").contains("th", "No.").should("be.visible");
    cy.get("table > thead > tr")
      .contains("th", "Tanggal Pengajuan")
      .should("be.visible");
    cy.get("table > thead > tr").contains("th", "Nama").should("be.visible");
    cy.get("table > thead > tr").contains("th", "Status").should("be.visible");
    cy.get("table > thead > tr")
      .contains("th", "Rekomendasi")
      .should("be.visible");
  });
});
