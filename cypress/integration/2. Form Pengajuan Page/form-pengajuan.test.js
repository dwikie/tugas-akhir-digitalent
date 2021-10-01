///<reference types="cypress" />

describe("Form Pengajuan", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("Test Form Pengajuan", () => {
    cy.get("form");
    cy.get("form input[type=text][name=username]").type("valid-username");
    cy.get("form input[type=password][name=password]").type("valid-password");
    cy.get("form button[type=submit]").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.equal("/dashboard");
    });
    cy.visit("/dashboard/buat-pengajuan");
    cy.get("form");
    cy.get("form input[type=text][name=nik]").type("332707150992002");
    cy.get("form input[type=text][name=nama_lengkap]").type("kevin");
    cy.get("form input[type=text][name=tempat_lahir]").type("Jakarta");
    cy.get("form input[id=tanggal_lahir]").type("2021");
    cy.get("form input[type=text][name=pekerjaan]").type("mahasiswa");
    // cy.get("form input[type=number][name=pendapatan_perbulan"); error
    // cy.get("form input[type=text][id=selfie]"); error
    // cy.get("form input[type=text][id=slip_gaji]"); error
    cy.get("form button[type=submit]").click();
  });
  it("Empty Form", () => {
    cy.get("form");
    cy.get("form input[type=text][name=username]").type("valid-username");
    cy.get("form input[type=password][name=password]").type("valid-password");
    cy.get("form button[type=submit]").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.equal("/dashboard");
    });
    cy.visit("/dashboard/buat-pengajuan");
    cy.get("form");
    cy.get("form button[type=submit]").click();
  });
});
