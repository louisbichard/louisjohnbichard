portfolio.config(function($routeProvider) {
    $routeProvider


        .when('/', {
        templateUrl: '../views/portfolio.html'
    })

    .when('/blog', {
        templateUrl: '../views/blog.html'
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

    // #DEFAULT REDIRECT
    .otherwise({
        redirectTo: '/'
    });
});