/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const HouseInfoView = __webpack_require__(1);
const Ajax = __webpack_require__(3);

const app = function () {
  const container = document.querySelector('#root');
  // const houseInfoView = new HouseInfoView();
  let pageNumber = 1;

  const url = `https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=50`;
  const ajax = new Ajax();

  console.log(pageNumber);
  // console.log('Im here');


  // const loadAllData = function() {
  //   while (pageNumber <= 8)
  //   {
  //     ajax.get(`https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=50`, function(data) {
  //       houseInfoView.wordCount(data);
  //       console.log(data);
  //       pageNumber + 1;
  //     }
  //   }
  // }



  //-------------------------------------------------------------------Chart Code.


Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Most popular words in all House Words'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: -45,
      style: {
        fontSize: '8px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Word Count'
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: 'Word Occurs: <b>{point.y:1f} times</b>'
  },
  series: [{
    name: 'Words',
    data: ["Stark", "are"]
    ,
    dataLabels: {
      enabled: false,
      rotation: -90,
      color: 'red',
      align: 'right',
      format: '{point.y:.1f}', // one decimal
      y: 10, // 10 pixels down from the top
      style: {
        fontSize: '8px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  }]
})
}
  document.addEventListener('DOMContentLoaded', app);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {
const HouseInfoView = function(data) {
  this.data = data;
}

HouseInfoView.prototype.render =function (houses) {

}

HouseInfoView.prototype.wordCount = function(houses) {
  var wordCounts = {};
  var ul = document.querySelector('#count');
  houses.forEach(function(house, index){
    allHouseWords = house.words;
    if (allHouseWords === '') {
      return;
    };
    arrayOfWords = allHouseWords.split(/\s+/);
    for (var i = 0; i < arrayOfWords.length; i++) {
      word = arrayOfWords[i];
      if (!wordCounts[word]) {
        wordCounts[word] = 1;
      } else {
        wordCounts[word]++;
      };
    };
  });
};

HouseInfoView.prototype.chartPopulator = function (keyValues) {
  var newArray = Object.keys(keyValues).map(function(data){
    return [data,keyValues[data]];
  });
  return newArray;
};

module.export = HouseInfoView

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const Ajax = function () {}

Ajax.prototype.get = function (url, onComplete) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();

  request.addEventListener('load', function () {
    if (this.status !== 200) return;
    const jsonString = this.responseText;
    const data = JSON.parse(jsonString);
    onComplete(data);
  });
}

module.exports = Ajax;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map