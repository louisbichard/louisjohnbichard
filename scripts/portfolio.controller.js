portfolio.controller('portfolioController', function($scope) {

    // PORTFOLIO PROJECTS
    $scope.sections = [{
        name: 'Development',
        projects: [{
            title: "Survivors United",
            description: "Survivors United is a full Javascript MEAN dashboard application stack",
            img: "../img/projects/final_year_project/coffeehouse_laptop.jpg",
            url: "#survivors_united"
        }, {
            title: "Absenteeism booking",
            description: "A demo application for booking absenteeism (Angular)",
            img: "../img/projects/absenteeism_booking/system2.png",
            url: "#absenteeism_booking"
        }, {
            title: "XML based Site",
            description: "University module to create a web page using XML and XSLT technologies",
            img: "../img/projects/xml/home.png",
            url: "#xml_site"
        }, {
            title: "Lisa Jane Griffin",
            description: "One page scrolling website for Inspirational Speaker and Consultant",
            img: "../img/projects/lisajanegriffin/home.png",
            url: "#lisajanegriffin"
        }, {
            title: "Moon penny",
            description: "HTML/CSS Website designed and created from Scratch for Moon Penny.",
            img: "../img/projects/moonpenny/landing.png",
            url: "#moonpenny"
        }, {
            title: "Flovigo",
            description: "Angular based app for personal development (prototype) ",
            img: "../img/projects/flovigo/flovigo.png",
            url: "#flovigo"
        }],
    }, {
        name: 'Presentations / Talks',
        projects: [{
            title: "Lodash / Functional-esque programming talk",
            description: "A fairly low level short talk given on the context of functional programming and levarage / usage of Lodash methods (hosted on github)",
            img: "../img/projects/presentations/functional.png",
            url: "http://louisbichard.github.io/lodash-talk"
        }, {
            title: "Precompilers talk",
            description: "An introduction given on the benefits and issues with precompilers in relation to JS in particular. Covers the usage of CoffeeScript, TypeScript and ES2015 (Babel specifically)",
            img: "../img/projects/blogs/code.png",
            url: "http://louisbichard.github.io/precompilers-talk/#/"
        }]
    }, {
        name: 'Content',
        projects: [{
            title: "Reading",
            description: "Notable books I have read",
            img: "../img/projects/reading/javascriptthegoodparts.png",
            url: "#reading"
        }]
    }, {
        name: 'Courses',
        projects: [{
            title: "Thinkful: Front End Web Development",
            description: "Demo's from the Thinkful course Front End Web Development",
            img: "../img/projects/fewd/thinkful_logo.png",
            url: "#front_end_web_development"
        }]
    }, {
        name: 'Design',
        projects: [{
            title: "Survivors United Designs",
            description: "Survivors United is a full Javascript application stack",
            img: "../img/projects/final_year_project/mock.jpg",
            url: "#survivors_united_designs"
        }]
    }, {
        name: 'Plugins',
        projects: [{
            title: "Angular Progress Bar",
            description: "Angular-progress bar is a directive based plugin for simple and elegant progress bars with a material design twist",
            img: "../img/projects/angular-percentagebar/percentagebar1.png",
            url: "#angular_percentagebar"
        }, {
            title: "Angular blog",
            description: "Angular blog is a simple blog directive for parsing and creating markdown based blogs ",
            img: "../img/projects/angular-blog/angular-blog.png",
            url: "#angular_blog"
        }]
    }, {
        name: 'Authored Work',
        projects: [{
            title: "The Brogrammer",
            description: "An online series of blog posts that exemplify successful traits in projects and in life, exemplified through the use of weightlifting and programming",
            img: "../img/projects/brogrammer/brogrammericon.png",
            url: "#brogrammer"
        }, {
            title: "Anonymous functions as code comments",
            img: "../img/projects/blogs/code.png",
            url: "https://louisjohnbichard.wordpress.com/2015/11/15/anonymous-functions-as-code-comments/"
        }, {
            title: "Fixing performance on large angular models with debounce",
            img: "../img/projects/blogs/debounce.png",
            url: "https://louisjohnbichard.wordpress.com/2015/11/01/fixing-performance-on-large-angular-models-with-debounce/"
        }, {
            title: "_.every as a clean up for boolean operators",
            img: "../img/projects/blogs/every.png",
            url: "https://louisjohnbichard.wordpress.com/2015/10/09/_-every-as-a-clean-up-for-boolean-operators/"
        }]
    }, {
        name: 'Theoretical',
        projects: [{
            title: "Project Euler",
            description: "Project Euler is a collection of mathmatical based problems to be solved through programming. The following are my solutions in varying languages",
            img: "../img/euler.jpg",
            url: "//github.com/louisbichard/project_euler"
        }]
    }];
    // COMPETENCIES
    $scope.config = {
        tooltips: false,
        yAxisTickFormat: 's', //refer tickFormats in d3 to edit this value
        colors: ['#F06292'],
        labels: false,
        mouseover: function() {},
        mouseout: function() {},
        click: function() {},
        legend: {
            display: false,
            //could be 'left, right'
            position: 'right'
        }
    };
});
