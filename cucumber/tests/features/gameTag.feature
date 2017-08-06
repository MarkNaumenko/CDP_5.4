Feature: Multiplayer feature
    As a user
    I want F1 2016 has multiplayer feature

	@important
	Scenario Outline: Check <game> has multiplayer
    	Given I am on the market page
    	When I will input '<game>' in the search field
    	Then I will go to the page of this '<game>' game
    	Then check '<game-tag>' feature
    	Then I will wait a bit
        Then take screenshot

		Examples:
    		| game    | game-tag     |
    		| F1 2016 | Multi-player |
    		| F1 2015 | Multi-player |
