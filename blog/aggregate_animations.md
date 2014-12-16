This is a quick and dirty blog post about how to make elegant transitional animations using the [animate.css](http://daneden.github.io/animate.css/) library. 

##What is animate.css?

Animate.css is a simple library for css animations


###How does it work? 

Simply include their CSS file in your project and add 'animated' and a style such as 'fadeIn' to an element and __voila!__

Example: 

	<div class="animated fadeInRight"></div>


##Aggregating animations

The real purpose of this article was for this one piece. Rather than just animate your content to slide in, or fade. Add animations to a couple of elements and have them slide in from the left right and down (depending on location) for real impact on your site. 

##Extending animate.css for cool delays. 

Sometimes having an element move into frame after page load can lead to a real dramatical effect. To see this in action just visit the my [home page](#home). 

Notice how the element appear after my name, this is conscious to ensure that my name is the center piece and that the others are secondary to this, it creates a really nice impactful landing page. 

I got this idea initially from the [openfin](https://www.openfin.co/) homepage, who at the time of writing had a large banner slide in from the top for impact, and then secondary content come in from the left and bottom after that, leaving a real impact and adding dynamicism to the site. 

The following could be added to your style sheet and simply add the class 'delay-1' to your element and watch it appear 1 second later than the others, feel free to play and have different elements come in at different time. 

	.animated.delay-1 {
	    -webkit-animation-delay: 1s;
	    animation-delay: 1s;
	}
	.animated.delay-2 {
	    -webkit-animation-delay: 2s;
	    animation-delay: 2s;
	}

__Warning:__ your animations should be elegant, but also should look deliberate. You don't want to fall in the trap of having your elements look like they are just your website being slow and unresponsive. 