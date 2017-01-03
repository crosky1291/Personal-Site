'use strict'

function ResizeDirective ($window) {

  return function ($scope, element) {

    $scope.getWindowDimensions = function () {
      var width = $window.innerWidth;
      var height = $window.innerHeight;
      var correctWidth = width >= 768 ? (width / 2) : width;
      var correctHeight = height > width ? (height / 2) : height;

      return { 'h': correctHeight, 'w': correctWidth};
    };

    $scope.$watch($scope.getWindowDimensions, function (value) {
      var height = value.h;
      var width = value.w;
     
      $scope.style = function () {
        
        if (width > height) {
          
          return {
            height: 'auto',
            width: 100 + "%"
          }
        }
        
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
ResizeDirective.$inject = ['$window'];
module.exports = ResizeDirective;