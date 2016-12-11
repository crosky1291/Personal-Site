'use strict'

function FooterDirective() {
  return {
    restrict: "EA",
    template: require('../../../templates/footer.html'),
    scope: {},
    link: function(scope, element, attributes) {
      scope.year = new Date().getFullYear();
    }
  }
}

module.exports = FooterDirective;