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
    cy.get("input#tanggal_lahir").trigger("mousedown");
    cy.get(".ant-picker-date-panel [title='2021-09-27']").click();
    cy.get("input#tanggal_lahir").should("have.value", '2021-09-27');
    cy.get("form input[type=text][name=pekerjaan]").type("mahasiswa");
    cy.get("form input[name=pendapatan_perbulan").type("2000000"); 
    cy.get("form input[id=selfie]"); 
    cy.get("form input[id=slip_gaji]"); 
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
