Feature: Buy a game in Steam market
    As a user
    I can buy a game in Steam market.

    Background: 
        Given I am on the market page
    @notimportant
    Scenario: Steam login
	   Then I will log in
	   Then I will wait a bit

    Scenario: Buy F1 2016 game
        When I will input 'F1 2016' in the search field
        Then I will go to the page of this 'F1 2016' game
        Then I will add game to the cart
        Then purchase game for my self
        Then I will wait a bit