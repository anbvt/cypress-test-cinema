describe('Create Showtime', () => {
    beforeEach(() => {
        cy.visit('https://admin-zuhot.vercel.app/')
    })

    it('Login & Insert Showtime', () => {
        // Đăng nhập
        // cy.get('input[type="email"]').type("lam@gmail.com")
        // cy.get('input[type="password"]').type("12345678")
        cy.get('button').click();
        // Handle đặt xuất chiếu
        cy.get(':nth-child(3) > .ant-menu-item-group-list > .ant-menu-item > .ant-menu-title-content > a').click();
        cy.get('.mx-2 > .ant-btn-primary').click();
        cy.get('#insertForm_roomId').click()
        cy.get('.ant-select-item-option-content').contains('Phòng 1').click()
        cy.get('#insertForm_languageOfMovieId').click()
        cy.get('.ant-select-item-option-content').contains('10 - CÙ LAO XÁC SỐNG (Tiếng Việt)').click()
        cy.get('#insertForm_dimensionId').click()
        cy.get('.ant-select-item-option-content').contains('Full HD').click()
        cy.get('#insertForm_showDate').click()
        cy.get('.ant-picker-today-btn').contains('Hôm nay').click()
        cy.get('#insertForm_startTime').click()
        cy.get('#insertForm_startTime').type('07:00:00')
        cy.get('span').contains('OK').click()
        cy.get('#insertForm_price').type('70000')
        // Mở cái click() dưới là thêm dữ liệu
        cy.wait(3000)
        cy.get('.ant-form-item-control-input-content > .ant-btn-primary > span').click()
    })
})