'use strict'

function iconsInfo() {
  return [
  {
    icon: "html.png",
    text: 'HTML'
  }, 
  {
    icon: "css.png",
    text: 'CSS'
  },
  {
    icon: "javascript.png", 
    text: 'JAVASCRIPT'
  },
  {
    icon: "jquery.png",
    text: 'JQUERY' 
  },
  {
    icon: "less.png",
    text: 'LESS'
  },
  {
    icon: "sass.png",
    text: 'SASS'
  },
  {
    icon: "node.png",
    text: 'NODE'
  },
  {
    icon: "socketio.png",
    text: 'SOCKET IO'
  },
  {
    icon: "webpack.png",
    text: 'WEBPACK'
  },
  {
    icon: "angular.png",
    text: 'ANGULAR'
  },
  {
    icon: "react.png",
    text: 'REACT'
  },
  {
    icon: "git.png",
    text: 'GIT'
  },
  {
    icon: "bootstrap.png",
    text: 'BOOTSTRAP'
  },
  {
    icon: "mongodb.png",
    text: 'MONGO DB'
  },
  {
    icon: "oauth.png",
    text: 'oAUTH'
  },
  {
    icon: "maya.png",
    text: 'MAYA'
  },
  {
    icon: "nuke.png",
    text: 'NUKE'
  },
  {
    icon: "photoshop.png",
    text: 'PHOTOSHOP'
  }];
}

function TechIconsDirective() {
  return {
    scope: true,
    link: iconsInfo,
    restrict: "EA",
    template: require('../../../templates/techIcons.html'),  
  }
}

module.exports = TechIconsDirective;