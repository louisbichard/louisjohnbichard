#Javascript unit test spies explained

Below is a quick introduction and explanation of what test spies are using an example from the Jasmine test library and how you can use them in your own code.

##What is a spy?
A spy is essentially a function that wraps another function, so that instead of calling the original, the new wrapped function is called.

##Why do I need a spy?
A spy therefore allows you to know when, how often and with what parameters a function is called without calling the function itself. This is really useful as in pretty much all cases, you don’t actually want to call the other function, just know that it has been called.

##How to spy?
To take the example from the Jasmine website.

	// Here the object is passed as the first parameter. With the objects property (that is the reference to a function) is passed in second. Now when the foo.setBar() function is called, Jasmine knows how many times and with what parameters the function has been called with. 
	spyOn(foo, 'setBar');

	// Now the function is called, but remember it is the jasmine wrapped function, not the original that is called here.
	foo.setBar(123);

	// Lastly you can use the test to make sure that the function has been called when expected, or that it hasn't been called if not expected. 
	expect(foo.setBar).toHaveBeenCalled();