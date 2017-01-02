'use strict'

function MainCtrl($scope, $location, $window, $timeout, $http, $httpParamSerializerJQLike) {

  $scope.checkMobile = function() {
    var width = $window.innerWidth;
    if (width >= 992) return $scope.mobile = false;
    $scope.mobile = true;
  }

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
    },
    {
      name: "Stack Overflow",
      url: "http://stackoverflow.com/users/6304879/yandri?tab=profile",
      iconClass: "fa fa-stack-overflow"
    }
  ]

  $scope.idx = 0;
  $scope.photos = ['../images/yandri1.jpg', '../images/yandri2.jpg'];
  $scope.profilePhoto = $scope.photos[$scope.idx];


  $scope.increment = function() {
    if ($scope.idx === 1) {
      $scope.idx = 0;
    } else {

      return $timeout(function() {
        $scope.idx++
        $scope.hello();
      }, 3200); 
    }

    $scope.hello();
  }

  $scope.hello = function() {
    
    $timeout(function() {

      $scope.profilePhoto = $scope.photos[$scope.idx];
      $scope.increment();
    }, 1300);
  };


  $scope.nav = [
  {
    id: "profile",
    name: ["PR", "O", "FILE"],
    info: "A little about me...",
    img: "../images/nav_profile.jpg",
    icon: "../images/profile2.png",
    alt: "profile button image"
  },
  {
    id: "portfolio",
    name: ["PORT", "F", "OLIO"],
    info: "Some of my work...",
    img: "../images/nav_portfolio.jpg",
    icon: "../images/protfolio2.png",
    alt: "portfolio button image"
  },
  {
    id: "blog",
    name: ["BL", "O", "G"],
    info: "My personal tech blog...",
    img: "../images/nav_blog.jpg",
    icon: "../images/blog2.png",
    alt: "blog button image"
  },
  {
    id: "contact",
    name: ["CO", "N", "TACT"],
    info: "Come say hello!",
    img: "../images/nav_contact.jpg",
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

  $scope.formData; //an object with what user filled up.
  $scope.submitForm = function(formData) {
    $http({
      method  : 'POST',
      url     : '../../../contact.php',
      data    : $httpParamSerializerJQLike(formData),  //param method from jQuery
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
    })
    .then(function(res){
      var data = res.data;

      if(data === "success") {
        $scope.contactInfoClass = "form-success";

        $timeout(function() {
          $scope.contactInfoClass = "";
        }, 3000);

      } else if (data === "invalid email") {
        $scope.contactInfoClass = "invalid-email";
      } else if (data === "invalid name") {
        $scope.contactInfoClass = "invalid-name";
      } else {
        $scope.contactInfoClass = "form-error";

        $timeout(function() {
          $scope.contactInfoClass = "";
        }, 3000);
      }
    })
  }

  $scope.selected = 'all';
  $scope.select = function(item) {
    $scope.selected = item;  
  };

  $scope.isActive = function(item) {
    return $scope.selected === item;
  };

  $scope.contactInfoClass;
}

module.exports = MainCtrl;