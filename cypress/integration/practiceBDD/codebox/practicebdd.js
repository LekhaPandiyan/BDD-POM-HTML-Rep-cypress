/// <reference types="cypress" />

import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import codebox from './practicePage'
import PracticePage from './practicePage'

Given('I successfull land to the application', () => {
    PracticePage.Loadvisit() 
})

When('I click on practice button', () => {
    PracticePage.ClickPractice()
})

Then('I should see the title of the page is {string}', pageTitle => {
    PracticePage.getTitle(pageTitle)   
})

When('I click on static dropdown', () =>{
    PracticePage.getDropdown()   
})

Then('I should able to select selenium options', ()=>{
    PracticePage.getSeleniumFromOption()
})