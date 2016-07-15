portfolio.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: '../views/home.html'
    })

    .when('/home', {
        templateUrl: '../views/home.html'
    })

    .when('/portfolio', {
        controller: 'portfolioController',
        templateUrl: '../views/portfolio.html'
    })

    .when('/blog', {
        templateUrl: '../views/blog.html',
        controller: 'blogController'
    })

    .when('/reading', {
        templateUrl: '../views/reading.html'
    })

    .when('/blog/:blog_title', {
        templateUrl: '../views/blog.html',
        controller: 'blogController'
    })

    .when('/styleguide', {
        templateUrl: '../views/styleguide.html'
    })

    .when('/about', {
        templateUrl: '../views/about.html'
    })

    .when('/vision', {
        templateUrl: '../views/vision.html'
    })

    .when('/skills', {
        templateUrl: '../views/skills.html'
    })

    .when('/contact_me', {
        templateUrl: '../views/contact_me.html'
    })

    // #PROJECTS 
    .when('/angular_blog', {
        templateUrl: '../views/projects/angular_blog.html'
    })

    .when('/xml_site', {
        templateUrl: '../views/projects/xml_site.html'
    })

    .when('/lisajanegriffin', {
        templateUrl: '../views/projects/lisajanegriffin.html'
    })

    .when('/moonpenny', {
        templateUrl: '../views/projects/moonpenny.html'
    })

    .when('/flovigo', {
        templateUrl: '../views/projects/flovigo.html'
    })

    .when('/front_end_web_development', {
        templateUrl: '../views/projects/front_end_web_development.html'
    })

    .when('/absenteeism_booking', {
        templateUrl: '../views/projects/absenteeism_booking.html'
    })

    .when('/brogrammer', {
        templateUrl: '../views/projects/brogrammer.html'
    })

    .when('/survivors_united', {
        templateUrl: '../views/projects/survivors_united.html'
    })

    .when('/survivors_united_designs', {
        templateUrl: '../views/projects/survivors_united_designs.html'
    })

    .when('/angular_percentagebar', {
        templateUrl: '../views/projects/angular_percentagebar.html'
    })

    .when('/not_found', {
        templateUrl: '../views/not_found.html'
    })

    // #DEFAULT REDIRECT
    .otherwise({
        redirectTo: '/not_found'
    });
});
