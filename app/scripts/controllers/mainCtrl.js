'use strict'

function MainCtrl($scope) {
  $scope.nav = [
  {
    id: "profile",
    name: ["Pr", "o", "file"],
    info: "a little about me",
    img: "",
    alt: "profile button image"
  },
  {
    id: "portfolio",
    name: ["Port", "f", "olio"],
    info: "all my work...",
    img: "",
    alt: "portfolio button image"
  },
  {
    id: "blog",
    name: ["Bl", "o", "g"],
    info: "all my stories",
    img: "",
    alt: "blog button image"
  },
  {
    id: "contact",
    name: ["Co", "n", "tact"],
    info: "reach out to me...",
    img: "",
    alt: "contact button image"
  }];
}

module.exports = MainCtrl;