/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	alert('it works')
	// var React = require('react');
	// var ReactDom = require('react-dom');


	// var Loginpage = React.createClass({
	//   // getInitialState() {

	//   // }
	//   render: function() {
	//     return <div>hi</div>
	//   }
	// })

	// ReactDOM.render(<Loginpage/>, document.getElementById('app'));
	    // return (
	    //   <div>
	    //     <form>
	    //       <input type="text" name="e-mail address">
	    //       <input type="text" name="password">
	    //       <input type="submit" value="Login">
	    //     </form>
	    //     <form
	    //       <input type="text" name="e-mail address">
	    //       <input type="text" name="password">
	    //       <input type="submit" value="Sign Up">
	    //     </form>
	    //   </div>
	    //   )

/***/ }
/******/ ]);