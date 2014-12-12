portfolio.config(function($routeProvider) {
    $routeProvider


        .when('/', {
        templateUrl: '../views/portfolio.html'
    })

    .when('/blog', {
        templateUrl: '../views/blog.html',
        controller: 'blogController'
    })

    .when('/styleguide', {
        templateUrl: '../views/styleguide.html'
    })

    .when('/about', {
        templateUrl: '../views/about.html'
    })

    .when('/contact_me', {
        templateUrl: '../views/contact_me.html'
    })

    // #PROJECTS
    .when('/angular_blog', {
        templateUrl: '../views/projects/angular_blog.html'
    })

    .when('/angular_percentagebar', {
        templateUrl: '../views/projects/angular_percentagebar.html'
    })

    // #DEFAULT REDIRECT
    .otherwise({
        redirectTo: '/'
    });
});