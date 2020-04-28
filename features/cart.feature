@cart
Feature: Shopping Cart feature

Scenario: Verify the Shopping Cart tracks items correctly

	Given Load the homepage
	When user enter black dress text in search text box and enter
	Then add first dress in cart
	And add second dress in cart
	And search for Cart and click on  Proceed to checkout and navigate to shopping cart page
	And update the quantity of second dress to 2
	And Remove the first dress from Cart
	And Click on Proceed to checkout button and navigate to next page
