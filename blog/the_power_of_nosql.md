Every now and again I come across some really neat code that really speaks for itself. This is not really a blog post describing anything, but more the sheer power that can come from no sql and by running a database library that speaks in the format that you use in your API's (JSON). 

The real power comes in the simplicity, no need to convert JSON payloads into SQL queries

##The code itself

	module.exports = function(req, res) {
	    var respond = require('../utilities/utilities.respond.js')({
	        req: req,
	        res: res,
	        file: __dirname + __filename
	    });

	    return database.find('tasks', [req.GET_params])
	        .then(respond.success)
	        .caught(_.partialRight(respond.failure, 'Could not list all tasks', err));
	};

##What's going on

* A request is made and the express front controller will decide which file to route to, dependent on the API endpoint
* This file is loaded
* The respond variable is defining a response object based on a response utility file that I have for responding to API's for a nice standard format
* The database 'tasks' is queried using the object of get parameters passed to it

## Why is this cool?
This is particularly cool as you can fire a payload such as at the endpoint to get the correct task,

	{
		id: '123'
	}

 or you could do something more advanced such as:

	{
		id: '123',
		assignee: 'Bob'
	}

or even 

	{ qty: 
		{ $gt: 25 } 
	} 

Without the need to procedurally construct a query string, the object payload IS the query and imortantly, this leads to really really nice and clean code. Cleaner code is less buggy and easy to maintain, a big bonus for NoSQL developers. 