portfolio.controller('blogController', function($scope) {
    $scope.posts = [
        //"blog/brogrammer_targets.md",
        {
            author: 'Louis John Bichard',
            date: '14th December 2014',
            path: "blog/brogrammer_nutrient_timing.md",
            title: 'The Brogrammer: Nutrient timing',
            tags: ['Javascript', 'Brogrammer', 'Nutrients']
        }, {
            author: 'Louis John Bichard',
            path: "blog/javascriptunittestexplained.md",
            date: '14th December 2014',
            title: 'Javascript Unit Tests Spies Explained',
            tags: ['Brogrammer', 'Javascript', 'Unit testing', 'testing', 'Development', 'Programming', 'Efficiency']
        }, {
            author: 'Louis John Bichard',
            date: '14th December 2014',
            path: "blog/brogrammer_patience.md",
            title: "The Brogrammer: Patience",
            tags: ['Brogrammer']
        }
    ];

    $scope.setTagSearch = function(tag) {
        $scope.searchByTag = tag;
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
