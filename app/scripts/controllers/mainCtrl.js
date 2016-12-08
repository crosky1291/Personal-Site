'use strict'

function MainCtrl($scope, $location, $window, $timeout) {

  $scope.socialMedia = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/yandri.sanchez",
      iconClass: "fa fa-facebook"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yandri91",
      iconClass: "fa fa-twitter"
    },
    {
      name: "Google+",
      url: "https://plus.google.com/115312159049844240238",
      iconClass: "fa fa-google-plus"
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/yandri-sanchez-96071378",
      iconClass: "fa fa-linkedin"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/crosky09",
      iconClass: "fa fa-instagram"
    },
    {
      name: "IMDB",
      url: "http://www.imdb.com/name/nm6977429/",
      iconClass: "fa fa-imdb"
    },
    {
      name: "Github",
      url: "https://github.com/crosky1291",
      iconClass: "fa fa-github"
    }
  ]


  $scope.nav = [
  {
    id: "profile",
    name: ["PR", "O", "FILE"],
    info: "a little about me",
    img: "http://demos.seekerinfinity.com/demo/insta/preview/images/menu/profile_btn.jpg",
    icon: "../images/profile2.png",
    alt: "profile button image"
  },
  {
    id: "portfolio",
    name: ["PORT", "F", "OLIO"],
    info: "all my work...",
    img: "http://demos.seekerinfinity.com/demo/insta/preview/images/menu/portfolio_btn.jpg",
    icon: "../images/protfolio2.png",
    alt: "portfolio button image"
  },
  {
    id: "blog",
    name: ["BL", "O", "G"],
    info: "all my stories",
    img: "http://demos.seekerinfinity.com/demo/insta/preview/images/menu/resume_btn.jpg",
    icon: "../images/blog2.png",
    alt: "blog button image"
  },
  {
    id: "contact",
    name: ["CO", "N", "TACT"],
    info: "reach out to me...",
    img: "http://demos.seekerinfinity.com/demo/insta/preview/images/menu/contact_btn.jpg",
    icon: "../images/contact2.png",
    alt: "contact button image"
  }];

  $scope.changePage = function(path) {
        $scope.class2 = 'left';
        $scope.class3 = 'right';
  
      if (path === 'home') {
        $scope.gomid = true;
        return $location.path('/');
      }

      if (path === "blog") return $window.location.href = "https://medium.com/@yandrisanchez"
      $location.path("/" + path);
  }

  $scope.testclass;
  $scope.currentPage = function() {
    var path = $location.path();

    if (path === '/') {
      $scope.testclass = 'home';
      $scope.class2 = 'leftin';
      $scope.class3 = 'rightin';
    } else if (path === '/profile') {
      $scope.testclass = 'profile';
    } else {
      $scope.testclass = 'contact';
    }
  }()

  $scope.currentYear = '2015';
  $scope.class2;
  $scope.class3;
  
}

module.exports = MainCtrl;