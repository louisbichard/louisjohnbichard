portfolio.controller('portfolioController', function($scope) {
    $scope.test = "I am the main controller";
    $scope.sections = [{
        name: 'Development',
        projects: [{
            title: "Survivors United",
            description: "Survivors United is a full Javascript MEAN dashboard application stack",
            img: "../img/projects/final_year_project/coffeehouse_laptop.jpg",
            url: "survivors_united"
        }/* ,{
            title: "Team Projects",
            description: "University module group task LAMP stack timetabling dashboard",
            img: "../img/projects/final_year_project/close_up.jpg",
            url: "#"
        }*/]
    }, {
        name: 'Design',
        projects: [{
            title: "Survivors United Designs",
            description: "Survivors United is a full Javascript application stack",
            img: "../img/projects/final_year_project/mock.jpg",
            url: "survivors_united_designs"
        }]
    }, {
        name: 'Plugins',
        projects: [{
            title: "Angular Progress Bar",
            description: "Angular-progress bar is a directive based plugin for simple and elegant progress bars with a material design twist",
            img: "../img/projects/angular-percentagebar/percentagebar1.png",
            url: "angular_percentagebar"
        }, {
            title: "Angular blog",
            description: "Angular blog is a simple blog directive for parsing and creating markdown based blogs ",
            img: "../img/projects/angular-blog/angular-blog.png",
            url: "angular_blog"
        }]
    }, {
        name: 'Authored Work',
        projects: [{
            title: "The Brogrammer",
            description: "An online series of blog posts that exemplify successful traits in projects and in life, exemplified through the use of weightlifting and programming",
            img: "../img/projects/brogrammer/brogrammericon.png",
            url: "brogrammer"
        }]
    }];
});