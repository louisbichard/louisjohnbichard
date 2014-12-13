portfolio.controller('mainController', function($scope, $location) {
   
    // USED FOR THE ACTIVE TABS ON THE DASHBOARD
    $scope.$on('$locationChangeSuccess', function() {
        $scope.location = $location.path()
            .split('/')[1];
    });
});