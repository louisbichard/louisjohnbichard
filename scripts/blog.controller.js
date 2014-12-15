portfolio.controller('blogController', function($scope, $location) {
    $scope.posts = [
        //"blog/brogrammer_targets.md",
        {
            id: "BL127",
            author: 'Louis John Bichard',
            date: '14th December 2014',
            path: "blog/a_template_for_style_guides.md",
            title: 'A template for style guides',
            tags: ['CSS', 'SASS', 'Styling', 'Style guides', 'Material Design', 'Web Design', 'Design', 'Typography']
        }, {
            id: "BL126",
            author: 'Louis John Bichard',
            date: '14th December 2014',
            path: "blog/the_power_of_nosql.md",
            title: 'The Power Of NoSQL',
            tags: ['Javascript', 'NoSQL', 'Databasing', 'New technologies', 'Technology', 'MongodB']
        }, {
            id: "BL125",
            author: 'Louis John Bichard',
            date: '22th November 2014',
            path: "blog/brogrammer_nutrient_timing.md",
            title: 'The Brogrammer: Nutrient timing',
            tags: ['Javascript', 'Brogrammer', 'Nutrients']
        }, {
            id: "BL124",
            author: 'Louis John Bichard',
            path: "blog/javascriptunittestexplained.md",
            date: '4th December 2014',
            title: 'Javascript Unit Tests Spies Explained',
            tags: ['Javascript', 'Unit testing', 'Testing', 'Development', 'Programming', 'Efficiency']
        }, {
            id: "BL123",
            author: 'Louis John Bichard',
            date: '14th November 2014',
            path: "blog/brogrammer_patience.md",
            title: "The Brogrammer: Patience",
            tags: ['Brogrammer', 'Patience']
        }
    ];

    $scope.url = window.location.hostname + '/#blog?id=';

    // IF ID IN URL, GO STRAIGHT TO IT
    $scope.id = $location.$$search.id;
    if ($location.$$search.id) $scope.searchText = $scope.id;

    $scope.addTagToSearch = function(tag) {
        $scope.searchText = tag.name;
    };

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
        // SORTS IN ASCENDING WHICH IS INCORRECT
        .sortBy('count')
        // REVERSE TO MAKE USEFUL ORDERED OBJECT
        .reverse()
        // GET VALUE
        .value();
});
