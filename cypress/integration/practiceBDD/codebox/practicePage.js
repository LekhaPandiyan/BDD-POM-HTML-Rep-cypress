
class PracticePage{

    static Loadvisit(){
        cy.visit('https://codenboxautomationlab.com/');
        cy.url().should('include', 'codenbox');
    }

    static ClickPractice(){
        cy.scrollTo('bottom')
        cy.contains('Practice').should('be.visible')
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.url().should('include','practice')
    }

    static getTitle(pageTitle){
        cy.get('.page-title').invoke('text').then((text1) =>{
            expect(text1.trim()).to.equal(pageTitle)
        })
    }

    static getDropdown(){
        cy.get('#dropdown-class-example').should('not.be.disabled')
    }

    static getSeleniumFromOption(){
        cy.get('#dropdown-class-example').select('Selenium').should('have.value','option1');
    }


}
export default PracticePage;