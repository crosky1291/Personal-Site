'use strict'


function MainCtrl($scope, $uibModal, $location, $window, $timeout, $http, $httpParamSerializerJQLike) {

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
  $scope.projectInfoIndex;
  $scope.isActive = function(button) {
    return $scope.selectedButton === button;
  };

  $scope.projects = [
    {
      name: "BANDLPETCARE.COM",
      image: "bandlpetcare.png",
      type: "web-dev",
      button1: "fa fa-info-circle",
      button2: ["fa fa-windows", "https://bandlpetcare.com"],
      description: "An E-Commerce Site, that allows users to book reservations for they're pets. A Hotel for pets.",
      highlights: [
        "Responsible for the design and development of the site, primarily build using Javascript, PHP, and MySQL.",
        "Architected online booking functionality using Javascript, and PHP to implement CRUD operations on to MySQL DB.",
        "Integrate Square-Up Payment System, allowing customers to securely pay for services without compromising their credit card information.",
        "Automated real-time price calculation for clients, taking advantage of Google’s Map geolocation to calculate the distance between given coordinates.",
        "Built a secure login area, requiring valid server authentication credentials to allow site Admin to manage bookings, records of clients and update the business availability calendar in a friendly UI that interacts with MySQL."
      ],
      links: [
        {
          text: "Check out the site at ",
          platform: "BandLPetCare.com",
          url: "https://bandlpetcare.com"
        }
      ]
    },
    {
      name: "COPERNICUS",
      image: "copernicus.png",
      type: "web-dev",
      button1: "fa fa-info-circle",
      button2: ["fa fa-github", "https://github.com/crosky1291/Main"],
      description: "A project for the students of Newport Mesa School District, its intention was to teach students kinematics, and physics in a game-like environemt to make it fun.",
      highlights: [
        "Integrated Three.js with physics Web Workers to build a reactive and responsive 3D gameplay environment.",
        "Created tracking algorithm for Object-Tracker.js to compute only specific pixels from the canvas, improving translation of user actions into game actions, and increasing processing speed by 78%.",
        "Enabled reliable, instantaneous data transfer using WebRTC data channels and STUN/TURN server technology to ensure a smooth multiplayer experience.",
        "Leveraged Mocha/Chai testing framework according to TDD and unit testing best practices in support of continuous integration / continuous release to improve app stability and debugging.",
        "Deployed on AWS to allow for efficient scaling in response to load events."
      ],
      links: [
        {
          text: "See the code on ",
          platform: "Github",
          url: "https://github.com/theCopernicusGame/Main"
        },
        {
          text: "Play the game at ",
          platform: "TheCopernicusGame.com",
          url: "https://www.thecopernicusgame.com"
        },
      ]
    },
    {
      name: "EASY RAID-FINDER",
      image: "easyraidfinder.png",
      type: "web-dev",
      button1: "fa fa-info-circle",
      button2: ["fa fa-github", "https://github.com/crosky1291/Easy-RaidFinder"],
      description: "A Forum for casual World of Warcraft players to easily find a raid before logging-in to the game. You Sign up for raids using your WoW account characters, thanks to oAuth authentication.",
      highlights: [
        "Built on Angular.js utilizing oAuth 2.0 to authorize players from the Blizzard game servers.",
        "Stored players’ character data and forum posts on to MongoDB using an Express server."
      ],
      links: [
        {
          text: "Check out the project on ",
          platform: "Github",
          url: "https://github.com/crosky1291/Easy-RaidFinder"
        }
      ]
    },
    {
      name: "ANIMATION DEMO REEL",
      image: "animation.png",
      type: "3d",
      button1: "fa fa-info-circle",
      button2: ["fa fa-youtube-play", "https://www.youtube.com/watch?v=SfnJ13Qh7BE"],
      description: "A video of some of my 3d animations, they were animated, rigged, and textured using Autodesk Maya, Photoshop, and composited using Nuke.",
      links: [
        {
          text: "See the reel on ",
          platform: "YouTube",
          url: "https://www.youtube.com/watch?v=SfnJ13Qh7BE"
        }
      ]
    },
    {
      name: "VFX DEMO REEL",
      image: "vfx.png",
      type: "3d",
      button1: "fa fa-info-circle",
      button2: ["fa fa-youtube-play", "https://www.youtube.com/watch?v=Mru23onz-Ms"],
      description: "A video of some of my VFX 3D convertions, mostly done while working at Stereo D, the company was not allowed to give us the depth maps, so all you see is the final work of some of the shots I got to work on.",
      links: [
        {
          text: "See the reel on ",
          platform: "YouTube",
          url: "https://www.youtube.com/watch?v=Mru23onz-Ms"
        }
      ]
    }, 
  ];

  $scope.openModal = function(id) {
    $scope.projectInfoIndex = id;
    var test = $scope.projects[id];
    var modalInstance;
    var modalScope = $scope.$new();
    modalScope.ok = function () {
            modalInstance.close(modalScope.selected);
    };
    modalScope.cancel = function () {
            modalInstance.dismiss('cancel');
    };      
    
    modalInstance = $uibModal.open({
      template: '<projectmodal></projectmodal>',
      scope: modalScope,
      link: function (scope, element, attributes) {
        scope.projecti = test;
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      
    });
  };


////////// PORTFOLIO PAGE ENDS HERE //////////////


///////////    CONTACT PAGE STARTS HERE    //////////

  //being used to show send button in different placement depending on device
  $scope.checkMobile = function() {
    var width = $window.innerWidth;
    if (width >= 992) return $scope.mobile = false;
    $scope.mobile = true;
  };

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
    });
  };
}
//must explicitly inject what I'm using in order to minify code for production
//the reason is if $scope is only as a parameter in the controller function it gets turned into
//a one letter parameter when minified //then hell breaks loose...
//must do this everywhere something is injected on directives or controller.
MainCtrl.$inject = ['$scope', '$uibModal', '$location', '$window', '$timeout', '$http', '$httpParamSerializerJQLike'];
module.exports = MainCtrl;