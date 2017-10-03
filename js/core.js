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

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

initHamburger();
// Логика основного меню
(function () {
  var nav = document.querySelector('.header-nav');

  if (!nav) {
    return;
  }

  nav.addEventListener('click', function (e) {
      //e.preventDefault();
      var navItem = e.target.parentNode;
      var subList = navItem.querySelector('.header-nav__sub-list');

      if (subList) {
        e.preventDefault();
        openSubList(subList);
      }
  });

  // Открыть подменю и скрыть остальные
  function openSubList(subList) {
    var subListAll = nav.querySelectorAll('.header-nav__sub-list');

    for (var i = 0; i < subListAll.length; i++) {

      if (subListAll[i] == subList) {
        continue;
      }

      subListAll[i].classList.remove('header-nav__sub-list--open');
    }

    subList.classList.toggle('header-nav__sub-list--open');
  }
})();

function initHamburger() {
  var hamburger = document.querySelector(".hamburger");

  if (!hamburger) return;

  var resize = function(e){
    if (document.documentElement.clientWidth > 1024) {
      if (!!document.querySelector(".hamburger--open")) {
        hamburger.classList.toggle("hamburger--open");
        menu.classList.toggle("header__menu-open");
      }
    }
  };

  (function(){
    var time;
    window.onresize = function(e){
      if (time)
      clearTimeout(time);
      time = setTimeout(function(){
        resize(e);
      },100);
    }
  })();

  if (document.documentElement.clientWidth > 1024) {
    console.log(document.documentElement.clientWidth);
  }

  var menu = document.querySelector(".header__wrap-nav");
  
  hamburger.addEventListener('click', function () {
    if (!document.querySelector(".hamburger--open")) {
      hamburger.classList.toggle("hamburger--open");
      menu.classList.toggle("header__menu-open");
    } else {
      hamburger.classList.toggle("hamburger--open");
      menu.classList.toggle("header__menu-open");
    }

  });

}


// function initHamburger() {
//   var $hamburger = $('.hamburger');
//   var $main = $('.main');
//
//   var mainControl = $('.main-control');
//   var pageHeight;
//   var headerHeight;
//   var panelSaleHeight;
//   var panelHeight;
//   var heightTop;
//
//   if ($hamburger) {
//     $(document).on('click', '.hamburger', function (e) {
//
//       $('.main-control').toggleClass('main-control--show');
//
//       if ($('.main-control').hasClass('main-control--show')) {
//         $('body').css('overflow', 'hidden');
//         $('body').css('position', 'fixed');
//         $('body').css('top', '0');
//         $('body').css('left', '0');
//         $('body').css('width', '100vw');
//         $('body').css('margin', '0');
//         $('.hamburger').addClass('hamburger--open');
//       } else {
//         $('body').css('overflow', 'initial');
//         $('body').css('position', 'initial')
//         $('.hamburger').removeClass('hamburger--open');
//       }
//
//       if ($(window).height() > 700) {
//         if ( $('.main-control').hasClass('main-control--show') ) {
//           if ( $('.header').length ) {
//             headerHeight = $('.header').outerHeight();
//           } else {
//             headerHeight = 0;
//           }
//
//           if ( $('.panel-sale').length ) {
//             panelSaleHeight = $('.panel-sale').outerHeight();
//           } else {
//             panelSaleHeight = 0;
//           }
//
//           if ( $('#panel').length ) {
//             panelHeight = $('#panel').outerHeight();
//           } else {
//             panelHeight = 0;
//           }
//
//           pageHeight = $(window).outerHeight();
//           heightTop = pageHeight - headerHeight - panelSaleHeight - panelHeight;
//           mainControl.css('height', heightTop);
//         } else {
//           mainControl.css('height', '100vh');
//         }
//
//       }
//
//
//
//       ga('send', 'event', 'btn_menu', 'btn_menu');
//
//
//     });
//   }
//
//   if (!$main.hasClass('main--full')) {
//     $('body').addClass('page-full');
//   }
// }



/***/ })
/******/ ]);