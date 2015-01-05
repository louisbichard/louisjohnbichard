portfolio.controller('blogController', function($scope, $location, $route) {

    $scope.searchText = $route.current.params.blog_title;

    $scope.posts = [{
        author: 'Louis John Bichard',
        date: '5th January 2015',
        path: "blog/productivitytools.md",
        title: "Top 16 developer productivity tools",
        tags: ['Effectivness', 'Productivity']
    }, {
        author: 'Louis John Bichard',
        date: '2nd January 2015',
        path: "blog/circles.md",
        title: "The Brogrammer series: Circle of Concern",
        tags: ['Brogrammer', 'Circle of Concern', 'Stress', 'Effectiveness', 'Efficiency']
    }, {
        author: 'Louis John Bichard',
        date: '1st January 2015',
        path: "blog/triggerpoint.md",
        title: 'The Brogrammer series: Trigger point therapy',
        tags: ['Trigger point therapy', 'Brogrammer', 'SMFR']
    }, {
        author: 'Louis John Bichard',
        date: '1st January 2015',
        path: "blog/hypomania.md",
        title: 'The Brogrammer series: Exercise induced hypomania',
        tags: ['Fartlek training', 'Brogrammer', 'HIIT training']
    }, {
        author: 'Louis John Bichard',
        date: '23rd December 2014',
        path: "blog/patternanalysis.md",
        title: 'The Brogrammer series: Pattern analysis',
        tags: ['Pattern Analysis', 'Brogrammer']
    }, {
        author: 'Louis John Bichard',
        date: '23rd December 2014',
        path: "blog/parkinsonslaw.md",
        title: 'The Brogrammer series: Parkinsons Law',
        tags: ['Brogrammer', 'Success', 'Parkinsons Law']
    }, {
        author: 'Louis John Bichard',
        date: '14th December 2014',
        path: "blog/aggregate_animations.md",
        title: 'Aggregating CSS animations for elegant transitions',
        tags: ['CSS', 'Styles', 'Animations']
    }, {
        author: 'Louis John Bichard',
        date: '14th December 2014',
        path: "blog/blog_tags.md",
        title: 'Angular: How I made the blog tags functionality for this site',
        tags: ['Functional', 'Javascript', 'lodash', 'Underscore', 'Chaining', 'Angular']
    }, {
        author: 'Louis John Bichard',
        date: '14th December 2014',
        path: "blog/a_template_for_style_guides.md",
        title: 'A template for style guides',
        tags: ['CSS', 'SASS', 'Styles', 'Style guides', 'Material Design', 'Web Design', 'Design', 'Typography']
    }, {
        author: 'Louis John Bichard',
        date: '14th December 2014',
        path: "blog/the_power_of_nosql.md",
        title: 'The Power Of NoSQL',
        tags: ['Javascript', 'NoSQL', 'Databasing', 'New technologies', 'Technology', 'MongoDB']
    }, {
        author: 'Louis John Bichard',
        date: '22th November 2014',
        path: "blog/brogrammer_nutrient_timing.md",
        title: 'The Brogrammer series: Nutrient timing',
        tags: ['Javascript', 'Brogrammer', 'Nutrients']
    }, {
        author: 'Louis John Bichard',
        path: "blog/javascriptunittestexplained.md",
        date: '4th December 2014',
        title: 'Javascript Unit Tests Spies Explained',
        tags: ['Javascript', 'Unit testing', 'Testing', 'Development', 'Programming', 'Efficiency']
    }, {
        author: 'Louis John Bichard',
        date: '14th November 2014',
        path: "blog/brogrammer_patience.md",
        title: "The Brogrammer series: Patience",
        tags: ['Brogrammer', 'Patience']
    }];

    $scope.url = window.location.hostname + '/#blog/';

    // IF ID IN URL, GO STRAIGHT TO IT
    $scope.id = $location.$$search.id;
    if ($location.$$search.id) $scope.searchText = $scope.id;

    $scope.addTagToSearch = function(val) {
        $scope.searchText = val;
    };

    $scope.dates =
        _.chain($scope.posts)
        .map(function(curr) {
            var date_parts = curr.date.split(' ');
            curr.date_month_year = date_parts[2];
            return curr;
        })
        .groupBy('date_month_year')
        .value();

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
        // SORT BY NAME AND DESCEND
        .sortBy(['name']).reverse()
        // SORT BY COUNT AND DESC
        .sortBy(['count']).reverse()
        // GET VALUE
        .value();

    //.slice(0, 15)
});