'use strict';

var angular = require('angular');


angular.module('yandriSanchez').directive('resize', require('./resize'));
angular.module('yandriSanchez').directive('footerinfo', require('./footer'));
angular.module('yandriSanchez').directive('techicons', require('./techIcons'));
angular.module('yandriSanchez').directive('closebutton', require('./closeButton'));
angular.module('yandriSanchez').directive('projectmodal', require('./projectModal'));