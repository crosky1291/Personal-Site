'use strict'

function CloseButtonDirective() {
  return {
    restrict: "EA",
    template: require('../../../templates/closeButton.html'),
    scope: {
      changepage: '&'
    }
  }
}

module.exports = CloseButtonDirective;