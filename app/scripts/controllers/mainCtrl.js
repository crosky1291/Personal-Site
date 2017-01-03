'use strict'


function MainCtrl($scope, $location, $window, $timeout, $http, $httpParamSerializerJQLike) {

  //all the nav items of the home page.
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

  //all the social media profiles shown in the home page
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

  //changes site pages and manages change page animations..
  $scope.slideOutLeft;
  $scope.slideOutRight;
  $scope.changePage = function(path) {
    $scope.slideOutLeft = 'slideoutleft';
    $scope.slideOutRight = 'slideoutright';

    if (path === 'home') {
      $scope.gomid = true;
      return $location.path('/');
    }

    if (path === "blog") return $window.location.href = "https://medium.com/@yandrisanchez"
    $location.path("/" + path);
  }


  $scope.sitepage;
  $scope.currentPage = function() {
    var path = $location.path();

    if (path === '/') {
      $scope.sitepage = 'home';
      $scope.slideOutLeft = 'leftin';
      $scope.slideOutRight = 'rightin';
    } else if (path === '/profile') {
      $scope.sitepage = 'profile';
    } else {
      $scope.sitepage = 'contact';
    }
  }()

  ////////// PROFILE PAGE STARTS HERE //////////////

  $scope.photoIdx = 0;
  $scope.profilePhotos = ['../images/yandri1.jpg', '../images/yandri2.jpg'];
  $scope.currentPhoto = $scope.profilePhotos[$scope.photoIdx];


  $scope.animateProfilePhoto = function() {
    
    //eyes move back quicker...
    $timeout(function() {
      $scope.currentPhoto = $scope.profilePhotos[$scope.photoIdx];
      $scope.nextPhoto();
    }, 1300);
  };

  $scope.nextPhoto = function() {
    if ($scope.photoIdx === 1) {
      $scope.photoIdx = 0;
    } else {

      return $timeout(function() {
        $scope.photoIdx++
        $scope.animateProfilePhoto();
      }, 4500); 
    }

    $scope.animateProfilePhoto();
  }

////////// PROFILE PAGE ENDS HERE //////////////



////////// PORTFOLIO PAGE STARTS HERE //////////////

  $scope.selectedButton = 'all';
  $scope.changeSelected = function(button) {
    $scope.selectedButton = button;  
  };

  $scope.isActive = function(button) {
    return $scope.selectedButton === button;
  };


////////// PORTFOLIO PAGE ENDS HERE //////////////


///////////    CONTACT PAGE STARTS HERE    //////////

  //being used to show send button in different placement depending on device
  $scope.checkMobile = function() {
    var width = $window.innerWidth;
    if (width >= 992) return $scope.mobile = false;
    $scope.mobile = true;
  }

  //form submission
  $scope.formData; //an object with what user filled up.
  $scope.contactInfoClass; //this holds the error responses
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
}
//must explicitly inject what I'm using in order to minify code for production
//the reason is if $scope is only as a parameter in the controller function it gets turned into
//a one letter parameter when minified //then hell breaks loose...
//must do this everywhere something is injected on directives or controller.
MainCtrl.$inject = ['$scope', '$location', '$window', '$timeout', '$http', '$httpParamSerializerJQLike'];
module.exports = MainCtrl;