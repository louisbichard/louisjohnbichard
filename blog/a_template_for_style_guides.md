In this blog post I am going to quickly discuss a template that I use for creating website style guides to give your styling some structure. 

##Why you should care?

Styles can quicly get out hand, a bit here, a bit there, add a bit to this selector, add some new selectors here and the next minute __BOOM__ complete chaos. 

Sound familiar?

Anyone who has done any serious work with CSS will have seen this. Whilst it is not a massive problem, it does drastically reduce maintenance time and help you to not pull your hair out over styling errors. 

##The inspiration

A lot of my templating is based from googles [Material Design](http://www.google.com/design/spec/material-design/introduction.html) document. If you're not familiar with it, go read it now. At least read the first sections regarding what material design is. This was the first document that I came across that really explained in very fine detail how to recreate those seemingly complex interfaces that really __POP__. 

##The breakdown

The way you break down your stylesheets is up to you. In my stylesheets I will tend to use SASS or LESS for compilation in almost any project with over a few lines of CSS it can be really useful. 

###1) Shadows

Create 3 variables for low medium and high shadow, this helps to define the levels at which elements appear. Elements that scroll under another need to be lower than the object it is under, to give the user the appearance that the item is above without that 3D, non-flat kinda clunky interface. 

###2) Colours

Pick 3 colours to start: 

A __primary colour__ (usually for your masthead or navigation bar at the top). 

A lighter shade __secondary colour__ which should be the same colour as the first but a few clicks lighter, this will be used for other elements on the page: Titles, Headings, anything that really needs it. 

Lastly pick an __accent colour__. This will be for those elements that really need to POP and stand out of the page. Google use this for call to action buttons etc. 

Note: You can maybe add another primary colour if you must, but be sparing less really is more, and if you really really have to then pick a shade of one of the other colours that you've already designed. 


###3) Responsive viewport sizes

Finally, choose some responsive window sizes. Since I'm using [twitter bootstrap](http://getbootstrap.com/) more often than not, I go with the pixel sizes that match their xs, sm, md and lg widths (if you want to know these, just wait until the end of the article).

	@media only screen and (min-width: $window-sm) and (max-width: $window-md) {
	    div.content {
	        margin-top: 50px;
	    }
	}

###4) Typography

Whilst this is not something I will put in my 'core file' this is a consideration at this stage and I recommend you spend some time really thinking about the types of fonts you want. My personal favourite is Googles Roboto, as when thinned it looks a lot like Helvetica Nue and is really easy to read and very pleasing on the eye. Even more awesome is that it's available on [Google fonts](http://www.google.com/fonts) alongside a wealth of others. You have no excuse now to not have beautiful typography! 

##Pulling it all together

When you've got this down, it should look something like this: (Note I'm using SASS here)

	// #COLOURS
	$color-main: #2196F3;
	$color-main-light: #64B5F6;
	$color-accent: #F06292;
	// #SHADOWS
	$shadow-high: 0 2px 2px rgba(0, 0, 0, 0.3);
	$shadow-mid: 0 1px 2px rgba(0, 0, 0, 0.16);
	$shadow-low: 0 1px 1px rgba(0, 0, 0, 0.05);
	// #VIEWPORT SIZES
	$window-xs: 0px;
	$window-sm: 768px;
	$window-md: 992px;
	$window-lg: 1200px;
	// #IMPORTS 
	// Any other files you want to include
	@import 'components.scss';
	@import 'typography.scss';

You should now have a really good starting point for creating a style guide that really makes sense for your site.

If your curious head over to the styleguide for this site which can be found [here](#/styleguide).