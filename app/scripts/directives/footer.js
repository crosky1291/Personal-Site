'use strict'

function FooterDirective() {
  return {
    restrict: "EA",
    template: require('../../../templates/footer.html'),
    scope: {
      year: '=year'
    }
  }
}

module.exports = FooterDirective;