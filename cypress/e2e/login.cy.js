describe('Login Page', () => {
  it('Login', () => {
    cy.visit('https://zuhot-cinema.vercel.app/login')
    cy.get('input[type="email"]').type("doan@gmail.com")
    cy.get('input[type="password"]').type("12345678")
    cy.get('button').click()
  })
})