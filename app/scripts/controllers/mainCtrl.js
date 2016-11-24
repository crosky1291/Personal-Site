'use strict'

function MainCtrl($scope) {
  $scope.nav = [
  {
    id: "profile",
    name: ["Pr", "o", "file"],
    info: "a little about me",
    img: "http://demos.seekerinfinity.com/demo/insta/preview/images/menu/profile_btn.jpg",
    alt: "profile button image"
  },
  {
    id: "portfolio",
    name: ["Port", "f", "olio"],
    info: "all my work...",
    img: "http://demos.seekerinfinity.com/demo/insta/preview/images/menu/portfolio_btn.jpg",
    alt: "portfolio button image"
  },
  {
    id: "blog",
    name: ["Bl", "o", "g"],
    info: "all my stories",
    img: "http://demos.seekerinfinity.com/demo/insta/preview/images/menu/resume_btn.jpg",
    alt: "blog button image"
  },
  {
    id: "contact",
    name: ["Co", "n", "tact"],
    info: "reach out to me...",
    img: "http://demos.seekerinfinity.com/demo/insta/preview/images/menu/contact_btn.jpg",
    alt: "contact button image"
  }];
}

module.exports = MainCtrl;