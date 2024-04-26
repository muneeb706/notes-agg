describe('Home Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('POST', '/accounts/logout', { fixture: 'logout.json' }).as(
      'logoutApi',
    );
  });

  it('should render the CustomNavbar', () => {
    cy.get('.bg-body-tertiary').should('exist');
  });

  it('should contain the brand name', () => {
    cy.get('.bg-body-tertiary .navbar-brand').should('have.text', 'Notes Agg');
  });

  it('should contain a dropdown with the username', () => {
    cy.get('.bg-body-tertiary #basic-nav-dropdown').should('exist');
  });

  it('should perform logout when logout option is clicked', () => {
    cy.get('.bg-body-tertiary #basic-nav-dropdown').click();
    const logoutButton = cy.get(
      '.bg-body-tertiary .dropdown-menu .dropdown-item',
    );
    logoutButton.should('be.visible').and('have.text', 'Logout');
    cy.get('.bg-body-tertiary .dropdown-menu .dropdown-item').click();
    cy.wait('@logoutApi')
      .its('response.body')
      .should('have.property', 'location', '/login');
    // should redirect to login page
    cy.url().should('include', '/login');
  });
});
