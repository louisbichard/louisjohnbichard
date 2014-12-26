portfolio.directive("scroll", function() {
    var element_unhidden = false;
    return function(scope, element, attrs) {
        var oTop = element.offset().top - window.innerHeight;
        var eHeight = $('body').height();

        angular.element(window).bind("scroll", function() {
            var pTop = $('body').scrollTop();

            if ((pTop > (oTop + (eHeight * 1.5))) && !element_unhidden) {
                element_unhidden = true;
                console.log('in view');
                element
                    .removeAttr('ng-show')
                    .show()
                    .width('99.9%')
                    .removeClass('ng-hide');

                element_unhidden = true;
            }

            scope[attrs.scroll] = true;
            scope.$apply();
        });
    };
});
