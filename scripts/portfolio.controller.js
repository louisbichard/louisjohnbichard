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
        }],
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

    $scope.data = {
        core: {
            series: [],
            data: [{
                x: "JavaScript",
                y: [5],
            }, {
                x: "HTML",
                y: [5]
            }, {
                x: "CSS",
                y: [5]
            }, {
                x: "PHP",
                y: [4]
            }, {
                x: "UNIX",
                y: [4]
            }]
        },
        secondary: {
            series: [],
            data: [{
                x: "SQL",
                y: [4],
            }, {
                x: "NoSQL",
                y: [4]
            }, {
                x: "MongoDB",
                y: [4]
            }]
        },
        concepts: {
            series: [],
            data: [{
                x: "TDD/BDD",
                y: [4],
            }, {
                x: "Agile",
                y: [4]
            }, {
                x: "SPA",
                y: [5]
            }, {
                x: "Security",
                y: [4],
            }, ]
        },
        libraries: {
            series: [],
            data: [{
                x: "NodeJS",
                y: [5],
            }, {
                x: "Git",
                y: [5],
            }, {
                x: "JQuery",
                y: [5],
            }, {
                x: "SASS/LESS",
                y: [4],
            }, {
                x: "Underscore",
                y: [5]
            }, {
                x: "Angular",
                y: [4]
            }]
        }
    };

});

/* ,{
            title: "Team Projects",
            description: "University module group task LAMP stack timetabling dashboard",
            img: "../img/projects/final_year_project/close_up.jpg",
            url: "##"
        }*/