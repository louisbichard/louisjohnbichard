
## Who is this article for? 
For a while I have now being using the libraries Lodash.js and Underscore.js. If you've never heard of these before, or maybe you've heard of them a little then this will be for you. This is not for more advanced programmers and those with a lot of knowledge about functional programming or Lodash/Underscore (which I will now refer to as underscore, it just sounds nicer, even though I recommend Lodash).

Lets get to the meat of this then. If you're the kind of developer that finds themselves using lots of loops and storing lots of temporary variables then this might just rock your world. I really wish I had some of my older code ... good lord how it has changed since I started. 

I'm going to take a stab at trying to explain thoroughly and simply the power of lodash and how you can leverage it in your applications. 

I will explain the 3 (in my opinion) of THE most powerful functions in lodash, these are in reverse order, culminating in the most powerful. The reason I am choosing to do this is because it's a lot easier to grasp them in this order. 

Don't be scared if it doesn't all make sense, try to get through the full article as at the end I will discuss the reasons, situations and purposes of using each of these functions. Ultimately my goal is to change the way you think about how you write your loops in javascript. If your paradigm hasn't changed, or you're like, damn Lou I don't see any benefit from this ... ultimately I have failed. You should be itching to use underscore by the end and writing __significantly__ better code, __significatnly__. Seriously. 

The three functions of my choice are `_.each`, `_.map` and `_.reduce`. In this order. A particular order. For a particular reason. 

For all these examples, we shall be assuming to manipulate a typical dataset, which is an array of objects, a very common data set to returned in an API (a database call, in this instance ... probably). 

It would look something like this:

    [
        {
            something: "some_string"
            date: 20/17/2015
            id: 234234
        }, 
        // etc, etc
    ]

### Some ground work

Before we begin, as I'm intending this article to be for relative beginners, we shall cover a couple of pieces real quick. If you want, take your time to play with these functions. Simple open your console (I recommend Chrome developer tools) and play around with the code in the 'console' section. If you don't know what the hell I'm talking about now. Google 'Chrome developer tools' and come back to this when you've had a quick play at that too. 

Anyway ... 

#### Console logging

So one pre-requisite of knowledge we will be requiring is the basic log

    conosole.log('hello world');
    
    var something = "test"
    console.log(something);

    console.log(1, 2, 3, 4, 5); // TO INFINITY! ... AND BEY...

This simply takes any number of parameters and echos the responses to your dev tools console. A nice little debugging tool. Have a play. 

* Call it with a string
* Call it with many strings
* Call it with numbers. 
* Define a variable and then call the variable name with it. 
* Just. Play.

#### Anonymous functions

When used within a function often referred to as _callbacks_. An anonymous function is just one that is not stored, or given a name. This is a big part of functional programming. Often times there is no need to store the function itself, we will use it at run time, then get rid of it, there's no need to hang onto it. 

You will usually just see these as parameters in the underscore library and they look like this:

    function(){

    }

__Note:__ This will not work if you just use that syntax, it has to be used in certain places, I just wanted to isolate it, as the syntax can look a little weird when put into a function call like so:

    _.each(test, function(){
         // SOME CODE HERE 
    });

Hopefully you can now pick out the anonymous function here. 

Anyway ... on with the show. 

#### _.each

I think _.each is the easiest to get your head around. You pass it your data, and it performs the callback function for as many elements are in the data you passed. Assume you pass it an array that is of 5 objects, the callback function will be called 5 times. 
    
    var some_array = new Array(5); // CREATE A NEW ARRAY OF UNDEFINED VALUES
    
    _.each(some_array, function(){
        console.log('test');
    });

What do you think will happen? Try to work this out before continuing. 

If you take this code and run it in your console you will see that it echos out the test string 5 times. I hope this is what you expected. The only problem with _.each is that it's usually interacting with things that are outside of it's function. This tends to get really messy. You have a variable sitting outside of the loop, and the loop trying to modify it. You get all kinds of scope issues, and its kinda ugly. 

But nonetheless, have a go with each functions, try manipulating some data maybe. 
    
    _.each([1,2,3], function(curr){
        console.log(curr);
    });

Now what's happening here is the array is being passed as the data to the function and the second parameter (the function), if you like ... the "action" of this function is performed for each item in the array (3 in this case). 

Now, what you will see if you paste this into your console is that the 1, 2, 3 are echoed out. This is because underscore 'magically' puts these variables into the callback function for you to use. The first value in the callback, we called this 'curr' is the current value in the array. The first time the loop is called, it will be 1, the second time it will be 2, the third time it will be 3.

Awesome, again, go away, __have a play__. It really is all just about playing. The best environment for this, is the browser, open it and start typing and getting familiar. It really is your best tool for learning, debugging that is. 

#### _.map 

This is where things get a _little_ more complicated. The problem with `_.each` is that its always modifying things outside of its function, this is very 'procedural' in the development world, and isn't great in an object oriented style (we won't cover this here, we haven't the time ... and this article is huge already). 

What _.map does is it iterates a data set, and the _return_ value of the function will replace the current element in the dataset. 

So ...

    var test = _.map([1,2,3], function(){
        return "ilovemap";
    });

    console.log(test);

If you use this code, you will see that the returned value of the map function is infact a new array, with all the elements replaced with "ilovemap". Not really that useful. But hopefully this highlights the main advantage of map. It takes a variable, modifies it and then shoves it back in the variables place. This, this is really cool. If you can't tell why now, you will when you start __playing with it__. 

Now, to get more advanced, taking our example data set from right at the start (scroll if you need). I am going to show you the power of map (however replacing a lot of the code with comments ... for simplicity).
    
    _.map(data, function(curr){
        curr.date.split('/').reverse();
        return curr;
    });

Now assuming that the data set has a property date, that is a string like 'MM/DD/YYYY' what is going to happen is that each element in the array's property date, is going to be applied with the function, and then the whole current object is returned.

This. Is. Power. Play with this.


#### Reduce

So last but not least, the daddy. The alpha, the omega. The god. There is pretty much no data manipulation that cannot be done in a reduce function. It can be used for looping and updating other variables, updating the current dataset, or completing mutating the dataset based on your criteria. 

Before we dive in, let me give you a use case. 

You want to take a complicated data set, say ...

    [{
        name: "blah"
        date: "20/05/1993"
    }]

and you want to concatenate the name and the month together as the property in an object, only where the name is bigger than 3 letters. REALLY random I know, but this kind of manipulation comes up way more than you would imagine. 

    {
        blah05: "woooo!"
    }

like blah05

This is done like so:

    _.reduce(data, function(prev, curr){
        if(prev.name.length > 3) {
            var to_add = {};
            var month = curr.date.split('/')[0];
            to_add[curr.name + ]
        }
        return prev;
    }, []);

Lets disect this...

        if(prev.name.length > 3) {
            var to_add = {};
            var month = curr.date.split('/')[0];
            to_add[curr.name + ]
        }
        return prev;

is called on each element in the array and no matter what, the 'prev' value is passed. This is defined as the 3rd parameter in the original function (after the callback/anonymous function). 

This then allows us to keep modifying and updating this 'prev' value throughout without using any nasty temporary variables. 


#### The paradigm shift. 

I now put it to that every javascript object/array problems can be solved with these three functions alone (infact, probably just with reduce alone).

If you have any code with extensive looping or data manipulation, I would put it you to challenge yourself to replace all of these loops with _ ones. Your code will be more readable, manageable and considerably more clean.

I hope this tutorial in some way has changed the way you approach loops in javascript and encouraged you to take a different approach.

#### How to start thinking about this differently

Fundamentally the purpose of this article is to start SEEING when it is best to use on of these functions, or start solving problems in a fundamentally different manner. 

If you need to modify or ammend a data set ... `_.map` it. If you need to produce an object, array, string, or number from a record set by iterating through it all use `_.reduce`. 

#### Going deeper

A lot of the basic use cases for _.reduce are to filter results. Say you want all records in a dataset where the date is today? Or the year maybe? This is actually best solved using a `_.filter` function. 

Sorting functions, yup underscore got those too. 

Start with the ones I've mentioned and then begin to explore and widen your underscore arsenal ... it will be worth it. 










