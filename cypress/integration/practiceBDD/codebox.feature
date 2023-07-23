Feature: practice function for application

    As a user I am enable to use all the functions in practice page

    Scenario: As a user, I should able to see the title of the page
        Given I successfull land to the application 
        When I click on practice button  
        Then I should see the title of the page is 'Automation Practice'

    Scenario: As a user, I should able to select from stactic dropdown
        When I click on static dropdown
        Then I should able to select selenium options
        
