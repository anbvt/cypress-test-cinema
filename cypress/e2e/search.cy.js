describe('Search home', () => {
  it('Search movie', () => {
    cy.visit('https://zuhot-cinema.vercel.app/')
    cy.get('input[type="text"]').type('Yêu');
    cy.get('.ant-btn').click();
    cy.get('#\\30  > .ant-card > .ant-card-body > :nth-child(1) > .text-center > .text-sm')
        .should('include.text', 'YÊU');
  })

  it('Search by country', () => {
    cy.visit('https://zuhot-cinema.vercel.app/')
    cy.get('#country').select('THÁI LAN');
    cy.get('.mt-6 > .w-full').click();
    cy.get('#\\30 > .ant-card > .ant-card-body > :nth-child(1) > .text-center > .text-sm')
        .should('include.text', 'ÁC QUỶ MA SƠ II');
  })

  it('Search by type of movie', () => {
    cy.visit('https://zuhot-cinema.vercel.app/')
    cy.get('#movieType').select('TÌNH CẢM');
    cy.get('.mt-6 > .w-full').click();
    cy.get('#\\30 > .ant-card > .ant-card-body > :nth-child(1) > .text-center > .text-sm')
          .should('include.text', 'CHẠM VÀO HẠNH PHÚC');
  })

  it('Search by branch', () => {
    cy.visit('https://zuhot-cinema.vercel.app/')
    cy.get('#branch').select('TÂN PHÚ');
    cy.get('.mt-6 > .w-full').click();
    cy.get('#\\30 > .ant-card > .ant-card-body > :nth-child(1) > .text-center > .text-sm')
        .should('include.text', 'ÁC QUỶ MA SƠ II');
  })

  it('Movie is showing', () => {
    cy.visit('https://zuhot-cinema.vercel.app/')
    cy.get('#type_0').click();
    cy.getCookie('statusId').then((cookie) => {
      expect(cookie?.value).to.equal('0');
    });
    cy.get('#\\30 > .ant-card > .ant-card-body > :nth-child(1) > .text-center > .text-sm')
        .should('include.text', 'HẠ CÁNH KHẨN CẤP');
  })

  it('Upcomming movie', () => {
    cy.visit('https://zuhot-cinema.vercel.app/')
    cy.get('#type_1').click();
    cy.getCookie('statusId').then((cookie) => {
      expect(cookie?.value).to.equal('1');
    });
    cy.get('#\\30 > .ant-card > .ant-card-body > :nth-child(1) > .text-center > .text-sm')
        .should('include.text', 'ĐỊA ĐÀNG SỤP ĐỔ');
  })
})