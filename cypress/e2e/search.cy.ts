describe('Search home', () => {
  it('Search movie', () => {
    cy.visit('');
    cy.get('input[type="text"]').type('Yêu');
    cy.get('.ant-btn').click();
  })

  it('Search by country', () => {
    cy.visit('');
    cy.get('#country').select('THÁI LAN');
    cy.get('.mt-6 > .w-full').click();
  })

  it('Search by type of movie', () => {
    cy.visit('');
    cy.get('#movieType').select('TÌNH CẢM');
    cy.get('.mt-6 > .w-full').click();
  })

  it('Search by branch', () => {
    cy.visit('');
    cy.get('#branch').select('TÂN PHÚ');
    cy.get('.mt-6 > .w-full').click();
  })

  it('Movie is showing', () => {
    cy.visit('');
    cy.get('#type_0').click();
    cy.getCookie('statusId').then((cookie) => {
      expect(cookie?.value).to.equal('0');
    });
  })

  it('Upcomming movie', () => {
    cy.visit('');
    cy.get('#type_1').click();
    cy.getCookie('statusId').then((cookie) => {
      expect(cookie?.value).to.equal('1');
    });
  })
})