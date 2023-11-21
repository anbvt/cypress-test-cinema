describe('Order Ticket', () => {
    beforeEach(() => {
        cy.visit('https://zuhot-cinema.vercel.app/')
    })

    it('Login', () => {
        // Đăng nhập
        cy.get('.mr-1 > a').click()
        cy.get('input[type="email"]').type("doan@gmail.com")
        cy.get('input[type="password"]').type("12345678")
        cy.get('button').click()

        //Chọn Phim
        cy.get('.ant-card > .ant-card-body > :nth-child(1) > .text-center > .text-sm')
            .contains('CÙ LAO').click()
        cy.wait(3000)
        //Chọn lịch chiếu
        cy.get('.inline-block').click()
        cy.wait(3000)
        //Chọn ghế
        cy.get(':nth-child(5) > .grid > :nth-child(1)').click()
        cy.get('.ant-card-body > .bg-black').click()
        //Chọn Topping
        cy.get(':nth-child(4) > .justify-center > .ant-input-number > .ant-input-number-handler-wrap > .ant-input-number-handler-up').click()
        cy.get('.border-t > .bg-black').click()
        //Thanh Toán
        // cy.get('div[class*="paypal-button"]').click()
        cy.wait(3000)
        cy.get('td.p-5 > .bg-black').click()
        // cy.get(':nth-child(2) > .ant-radio-wrapper > :nth-child(2) > .flex').click()
    })
})