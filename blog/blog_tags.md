
This is a short guide showing some nifty functional code that I used for creating the blog tags section you see to the right of this blog post. Assuming you're not reading this too far in the future, you can have a dive into the source for the controller to see the live running version of this code for a real world example. 

##Functional

The code I'm about to show you is what is commonly refferred to as 'functional'. For a long time I was under the impression that this meant that it was functional, just as a ladder is functional for getting ontop of something. This is not what functional means. Functional is the type of programming that is given to us in JavaScript by its powerful __'first class objects'__ concept. I won't go into great detail about this, but in many other language it is not possible to do the cool things you can do in JavaScript such as passing a function as a parameter to another, or returning a function in a function. 

This ability is what allows us to create some really really syntactically awesome javascript. 

If you want to learn more about Underscore, Lodash or functional programming, one of my favourite books regarding it is [functional javascript](http://shop.oreilly.com/product/0636920028857.do) by Michael Fogus. Micheal goes through a lot of underscore functions to explain an describe the true power of functional programming, and how 'synthesising functions' leads to some __amazing__ syntax. 

Please do read on ...

##The code

So I'm going to just go ahead and show you the code, I'll then go into a bit of detail in what's really going on here. 

Note: This is written as an angular controller. Don't fear, it doesn't make much difference, this could be easily done by replacing the scope object with some other object it is the idea I am after showing, not the specific implementation. 

	portfolio.controller('blogController', function($scope, $location) {
	    $scope.posts = [
	        {
	            path: "blog/blog_tags.md",
	            title: 'Angular',
	            tags: ['functional', 'javascript']
	        }, {
	            path: "blog/a_template_for_style_guides.md",
	            title: 'Style guides',
	            tags: ['CSS', 'SASS']
	        },        
	    ];

	    $scope.tags =
	        _.chain($scope.posts)
	        // CREATE ARRAY OF ALL TAGS
	        .reduce(function(prev, curr) {
	            return prev.concat(curr.tags);
	        }, [])
	        // CREATE GROUPS BY TAG NAME
	        .countBy()
	        // CONVERT TO OBJECT TO BE SORTED
	        .reduce(function(prev, val, key) {
	            prev.push({
	                name: key,
	                count: val
	            });
	            return prev;
	        }, [])
	        // SORTS IN ASCENDING WHICH IS INCORRECT
	        .sortBy('count')
	        // REVERSE TO MAKE USEFUL ORDERED OBJECT
	        .reverse()
	        // GET VALUE
	        .value();
	}     

##So what's going on?

__The goal__: First we have a defined array of objects posts which for each post, has an array of tags. We want to extract these tags, count the occurences of each one (so as to define their importance). Hopefully you've got your head around the object literal at the top, as I'm only going to describe the chained function below!


###Setup the chain.

First we want to tell underscore we want to chain our methods. This is so we don't get into a mess of nested functions that can soon get ugly. By doing so each returned value has access to the other underscore methods so you can go right ahead and chain another function on without having to tell underscore the variable to perform actions upon (or make a temporary variable for that matter).

	_.chain($scope.posts)

###Aggregate all the arrays
Now here we're using reduce, which takes a collection and 'reduces' it down to a specific value. The starting value is the second parameter and underscore loops over each item in the collection providing the aggregate result and the current values, from this we just push the tag array from each object into the aggregate value to get a long array of all the tags. 

    .reduce(function(prev, curr) {
        return prev.concat(curr.tags);
    }, [])

###Count and group occurences of tag name
This is a simple conversion of the occurences of each tag, it will provide an object with the key as the name of the tag and the value as the occurences of the tag.

    .countBy()

###Format the counted results
Next we need to format the count function back into an array so it's reduce again. Here we're iterating the enumerable properties of the object to extract the key and value (if you're not too sure what enumerable properties are, have a quick look and get right back in here).

    .reduce(function(prev, val, key) {
        prev.push({
            name: key,
            count: val
        });
        return prev;
    }, [])

###Sort
Now we're nearing complete, we want to say that using the count property from the array of objects we just contructed, use the count property to sort by, therefore ordering by counted values. 
	.sortBy('count')

###Reverse 
Unfortunately the sort function comes back in the wrong order so we're going to have to turn that around for it to be useful

    .reverse()
	     
###Grab the value	     
Lastly grab the value (not returning the underscore chain method anymore) and pass this to the template for rendering!
	.value();


##How this could be extended

This could be extended with some alphabetical sorting aswell as weighting and I will look to implement this at some time in the future possibly. 

This could also do some character case checking and replacement. Checking for similar words based on case, or replacing all terms so that the first letter is capitalised (However this wouldn't work for acronyms) but there is some way to do it I'm sure! 

##Final words

I really hope this didn't go too far over your head, if it did, you might need to spend a little more time getting cosy with functional, underscore and the fundamentals of javascript before coming back to tackle this (admittedly) complex solution to what is a common problem of data format. 