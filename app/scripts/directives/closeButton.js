'use strict'

function CloseButtonDirective() {
  return {
    restrict: "EA",
    template: require('../../../templates/closeButton.html')
  }
}

module.exports = CloseButtonDirective;