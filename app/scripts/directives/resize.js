'use strict'

function ResizeDirective ($window) {

  return function ($scope, element) {

    $scope.getWindowDimensions = function () {
      return { 'h': $window.innerHeight, 'w': $window.innerWidth / 2 };
    };

    $scope.$watch($scope.getWindowDimensions, function (value) {
      var height = value.h;
      var width = value.w;
      
      $scope.style = function () {
        
        if (width > height) {
          console.log("hi");
          
          return {
            height: 'auto',
            width: 100 + "%"
          }
        }
        console.log('no');
        return {
          "height": "100%",
          "width": 'auto'
        }
      };

    }, true);

    angular.element($window).bind('resize', function () {
      $scope.$apply();
    });
  }
}

module.exports = ResizeDirective;