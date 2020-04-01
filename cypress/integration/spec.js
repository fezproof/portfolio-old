describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit("/portfolio");
  });

  it("has the correct <h1>", () => {
    cy.contains("h1", "Great success!");
  });

  it("navigates to /", () => {
    cy.visit("/portfolio/contact");
    cy.get("nav a")
      .contains("home")
      .click();
    cy.url().should("include", "/");
    cy.url().should("not.include", "/contact");
  });
  it("navigates to /blog", () => {
    cy.get("nav a")
      .contains("blog")
      .click();
    cy.url().should("include", "/blog");
  });
  it("navigates to /projects", () => {
    cy.get("nav a")
      .contains("projects")
      .click();
    cy.url().should("include", "/projects");
  });
  it("navigates to /contact", () => {
    cy.get("nav a")
      .contains("contact")
      .click();
    cy.url().should("include", "/contact");
  });
  it("navigates to /dnd", () => {
    cy.get("nav a")
      .contains("dnd")
      .click();
    cy.url().should("include", "/dnd");
  });
});
