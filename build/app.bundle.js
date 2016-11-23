webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);
	var app = angular.module('yandriSanchez', [__webpack_require__(3), __webpack_require__(5)]);
	app.config(configFunction);

	//configuration of routes.
	function configFunction($routeProvider, $locationProvider) {

	  $routeProvider.when('/', {
	    template: __webpack_require__(7),
	    controller: 'mainCtrl'
	  }).when('/profile', {
	    template: __webpack_require__(8),
	    controller: 'mainCtrl'
	  }).when('/profile', {
	    template: __webpack_require__(9),
	    controller: 'mainCtrl'
	  }).when('/contact', {
	    template: __webpack_require__(10),
	    controller: 'mainCtrl'
	  });
	}

	//this automatically requires the index.js file inside these folders.
	//thats how everything is linked and readable.
	__webpack_require__(11);
	__webpack_require__(13);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n  <header class=\"col-sm-6\">\n    <h1>Hello there</h1>\n    <h1>I'm Yandri</h1>\n    <h2>Software Engineer</h2>\n  </header>\n  <nav class=\"col-sm-6\">\n    <ul id=\"nav-items\">\n      <li id=\"{{item.id}}\" ng-repeat=\"item in nav\">\n        <img ng-src=\"{{item.img}}\" alt=\"{{item.alt}}\">\n        <div class=\"nav-item-mask\"></div>\n        <div class=\"content\">\n          <div class=\"circle\">\n            <div class=\"icon\"></div>\n          </div>\n          <div class=\"\">\n            <h2>{{item.name[0]}}<span>{{item.name[1]}}</span>{{item.name[2]}}</h2>\n            <h3>{{item.info}}</h3>\n          </div> \n        </div> <!-- content -->\n      </li> \n    </ul>\n  </nav>\n</div> <!-- main-container -->\n"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('yandriSanchez').controller('mainCtrl', __webpack_require__(12));

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	function MainCtrl($scope) {
	  $scope.nav = [{
	    id: "profile",
	    name: ["Pr", "o", "file"],
	    info: "a little about me",
	    img: "",
	    alt: "profile button image"
	  }, {
	    id: "portfolio",
	    name: ["Port", "f", "olio"],
	    info: "all my work...",
	    img: "",
	    alt: "portfolio button image"
	  }, {
	    id: "blog",
	    name: ["Bl", "o", "g"],
	    info: "all my stories",
	    img: "",
	    alt: "blog button image"
	  }, {
	    id: "contact",
	    name: ["Co", "n", "tact"],
	    info: "reach out to me...",
	    img: "",
	    alt: "contact button image"
	  }];
	}

	module.exports = MainCtrl;

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);