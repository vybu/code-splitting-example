/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/client/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./af\": \"./node_modules/moment/locale/af.js\",\n\t\"./af.js\": \"./node_modules/moment/locale/af.js\",\n\t\"./ar\": \"./node_modules/moment/locale/ar.js\",\n\t\"./ar-dz\": \"./node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-dz.js\": \"./node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-kw\": \"./node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-kw.js\": \"./node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-ly\": \"./node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ly.js\": \"./node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ma\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-ma.js\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-sa\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-sa.js\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-tn\": \"./node_modules/moment/locale/ar-tn.js\",\n\t\"./ar-tn.js\": \"./node_modules/moment/locale/ar-tn.js\",\n\t\"./ar.js\": \"./node_modules/moment/locale/ar.js\",\n\t\"./az\": \"./node_modules/moment/locale/az.js\",\n\t\"./az.js\": \"./node_modules/moment/locale/az.js\",\n\t\"./be\": \"./node_modules/moment/locale/be.js\",\n\t\"./be.js\": \"./node_modules/moment/locale/be.js\",\n\t\"./bg\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bg.js\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bm\": \"./node_modules/moment/locale/bm.js\",\n\t\"./bm.js\": \"./node_modules/moment/locale/bm.js\",\n\t\"./bn\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bn.js\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bo\": \"./node_modules/moment/locale/bo.js\",\n\t\"./bo.js\": \"./node_modules/moment/locale/bo.js\",\n\t\"./br\": \"./node_modules/moment/locale/br.js\",\n\t\"./br.js\": \"./node_modules/moment/locale/br.js\",\n\t\"./bs\": \"./node_modules/moment/locale/bs.js\",\n\t\"./bs.js\": \"./node_modules/moment/locale/bs.js\",\n\t\"./ca\": \"./node_modules/moment/locale/ca.js\",\n\t\"./ca.js\": \"./node_modules/moment/locale/ca.js\",\n\t\"./cs\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cs.js\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cv\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cv.js\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cy\": \"./node_modules/moment/locale/cy.js\",\n\t\"./cy.js\": \"./node_modules/moment/locale/cy.js\",\n\t\"./da\": \"./node_modules/moment/locale/da.js\",\n\t\"./da.js\": \"./node_modules/moment/locale/da.js\",\n\t\"./de\": \"./node_modules/moment/locale/de.js\",\n\t\"./de-at\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de-at.js\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de-ch\": \"./node_modules/moment/locale/de-ch.js\",\n\t\"./de-ch.js\": \"./node_modules/moment/locale/de-ch.js\",\n\t\"./de.js\": \"./node_modules/moment/locale/de.js\",\n\t\"./dv\": \"./node_modules/moment/locale/dv.js\",\n\t\"./dv.js\": \"./node_modules/moment/locale/dv.js\",\n\t\"./el\": \"./node_modules/moment/locale/el.js\",\n\t\"./el.js\": \"./node_modules/moment/locale/el.js\",\n\t\"./en-au\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-au.js\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-ca\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-ca.js\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-gb\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./en-gb.js\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./en-ie\": \"./node_modules/moment/locale/en-ie.js\",\n\t\"./en-ie.js\": \"./node_modules/moment/locale/en-ie.js\",\n\t\"./en-il\": \"./node_modules/moment/locale/en-il.js\",\n\t\"./en-il.js\": \"./node_modules/moment/locale/en-il.js\",\n\t\"./en-nz\": \"./node_modules/moment/locale/en-nz.js\",\n\t\"./en-nz.js\": \"./node_modules/moment/locale/en-nz.js\",\n\t\"./eo\": \"./node_modules/moment/locale/eo.js\",\n\t\"./eo.js\": \"./node_modules/moment/locale/eo.js\",\n\t\"./es\": \"./node_modules/moment/locale/es.js\",\n\t\"./es-do\": \"./node_modules/moment/locale/es-do.js\",\n\t\"./es-do.js\": \"./node_modules/moment/locale/es-do.js\",\n\t\"./es-us\": \"./node_modules/moment/locale/es-us.js\",\n\t\"./es-us.js\": \"./node_modules/moment/locale/es-us.js\",\n\t\"./es.js\": \"./node_modules/moment/locale/es.js\",\n\t\"./et\": \"./node_modules/moment/locale/et.js\",\n\t\"./et.js\": \"./node_modules/moment/locale/et.js\",\n\t\"./eu\": \"./node_modules/moment/locale/eu.js\",\n\t\"./eu.js\": \"./node_modules/moment/locale/eu.js\",\n\t\"./fa\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fa.js\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fi\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fi.js\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fo\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fo.js\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fr\": \"./node_modules/moment/locale/fr.js\",\n\t\"./fr-ca\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ca.js\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ch\": \"./node_modules/moment/locale/fr-ch.js\",\n\t\"./fr-ch.js\": \"./node_modules/moment/locale/fr-ch.js\",\n\t\"./fr.js\": \"./node_modules/moment/locale/fr.js\",\n\t\"./fy\": \"./node_modules/moment/locale/fy.js\",\n\t\"./fy.js\": \"./node_modules/moment/locale/fy.js\",\n\t\"./gd\": \"./node_modules/moment/locale/gd.js\",\n\t\"./gd.js\": \"./node_modules/moment/locale/gd.js\",\n\t\"./gl\": \"./node_modules/moment/locale/gl.js\",\n\t\"./gl.js\": \"./node_modules/moment/locale/gl.js\",\n\t\"./gom-latn\": \"./node_modules/moment/locale/gom-latn.js\",\n\t\"./gom-latn.js\": \"./node_modules/moment/locale/gom-latn.js\",\n\t\"./gu\": \"./node_modules/moment/locale/gu.js\",\n\t\"./gu.js\": \"./node_modules/moment/locale/gu.js\",\n\t\"./he\": \"./node_modules/moment/locale/he.js\",\n\t\"./he.js\": \"./node_modules/moment/locale/he.js\",\n\t\"./hi\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hi.js\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hr\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hr.js\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hu\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hu.js\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hy-am\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./hy-am.js\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./id\": \"./node_modules/moment/locale/id.js\",\n\t\"./id.js\": \"./node_modules/moment/locale/id.js\",\n\t\"./is\": \"./node_modules/moment/locale/is.js\",\n\t\"./is.js\": \"./node_modules/moment/locale/is.js\",\n\t\"./it\": \"./node_modules/moment/locale/it.js\",\n\t\"./it.js\": \"./node_modules/moment/locale/it.js\",\n\t\"./ja\": \"./node_modules/moment/locale/ja.js\",\n\t\"./ja.js\": \"./node_modules/moment/locale/ja.js\",\n\t\"./jv\": \"./node_modules/moment/locale/jv.js\",\n\t\"./jv.js\": \"./node_modules/moment/locale/jv.js\",\n\t\"./ka\": \"./node_modules/moment/locale/ka.js\",\n\t\"./ka.js\": \"./node_modules/moment/locale/ka.js\",\n\t\"./kk\": \"./node_modules/moment/locale/kk.js\",\n\t\"./kk.js\": \"./node_modules/moment/locale/kk.js\",\n\t\"./km\": \"./node_modules/moment/locale/km.js\",\n\t\"./km.js\": \"./node_modules/moment/locale/km.js\",\n\t\"./kn\": \"./node_modules/moment/locale/kn.js\",\n\t\"./kn.js\": \"./node_modules/moment/locale/kn.js\",\n\t\"./ko\": \"./node_modules/moment/locale/ko.js\",\n\t\"./ko.js\": \"./node_modules/moment/locale/ko.js\",\n\t\"./ky\": \"./node_modules/moment/locale/ky.js\",\n\t\"./ky.js\": \"./node_modules/moment/locale/ky.js\",\n\t\"./lb\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lb.js\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lo\": \"./node_modules/moment/locale/lo.js\",\n\t\"./lo.js\": \"./node_modules/moment/locale/lo.js\",\n\t\"./lt\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lt.js\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lv\": \"./node_modules/moment/locale/lv.js\",\n\t\"./lv.js\": \"./node_modules/moment/locale/lv.js\",\n\t\"./me\": \"./node_modules/moment/locale/me.js\",\n\t\"./me.js\": \"./node_modules/moment/locale/me.js\",\n\t\"./mi\": \"./node_modules/moment/locale/mi.js\",\n\t\"./mi.js\": \"./node_modules/moment/locale/mi.js\",\n\t\"./mk\": \"./node_modules/moment/locale/mk.js\",\n\t\"./mk.js\": \"./node_modules/moment/locale/mk.js\",\n\t\"./ml\": \"./node_modules/moment/locale/ml.js\",\n\t\"./ml.js\": \"./node_modules/moment/locale/ml.js\",\n\t\"./mn\": \"./node_modules/moment/locale/mn.js\",\n\t\"./mn.js\": \"./node_modules/moment/locale/mn.js\",\n\t\"./mr\": \"./node_modules/moment/locale/mr.js\",\n\t\"./mr.js\": \"./node_modules/moment/locale/mr.js\",\n\t\"./ms\": \"./node_modules/moment/locale/ms.js\",\n\t\"./ms-my\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./ms-my.js\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./ms.js\": \"./node_modules/moment/locale/ms.js\",\n\t\"./mt\": \"./node_modules/moment/locale/mt.js\",\n\t\"./mt.js\": \"./node_modules/moment/locale/mt.js\",\n\t\"./my\": \"./node_modules/moment/locale/my.js\",\n\t\"./my.js\": \"./node_modules/moment/locale/my.js\",\n\t\"./nb\": \"./node_modules/moment/locale/nb.js\",\n\t\"./nb.js\": \"./node_modules/moment/locale/nb.js\",\n\t\"./ne\": \"./node_modules/moment/locale/ne.js\",\n\t\"./ne.js\": \"./node_modules/moment/locale/ne.js\",\n\t\"./nl\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nl-be\": \"./node_modules/moment/locale/nl-be.js\",\n\t\"./nl-be.js\": \"./node_modules/moment/locale/nl-be.js\",\n\t\"./nl.js\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nn\": \"./node_modules/moment/locale/nn.js\",\n\t\"./nn.js\": \"./node_modules/moment/locale/nn.js\",\n\t\"./pa-in\": \"./node_modules/moment/locale/pa-in.js\",\n\t\"./pa-in.js\": \"./node_modules/moment/locale/pa-in.js\",\n\t\"./pl\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pl.js\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pt\": \"./node_modules/moment/locale/pt.js\",\n\t\"./pt-br\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt-br.js\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt.js\": \"./node_modules/moment/locale/pt.js\",\n\t\"./ro\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ro.js\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ru\": \"./node_modules/moment/locale/ru.js\",\n\t\"./ru.js\": \"./node_modules/moment/locale/ru.js\",\n\t\"./sd\": \"./node_modules/moment/locale/sd.js\",\n\t\"./sd.js\": \"./node_modules/moment/locale/sd.js\",\n\t\"./se\": \"./node_modules/moment/locale/se.js\",\n\t\"./se.js\": \"./node_modules/moment/locale/se.js\",\n\t\"./si\": \"./node_modules/moment/locale/si.js\",\n\t\"./si.js\": \"./node_modules/moment/locale/si.js\",\n\t\"./sk\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sk.js\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sl\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sl.js\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sq\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sq.js\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sr\": \"./node_modules/moment/locale/sr.js\",\n\t\"./sr-cyrl\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr-cyrl.js\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr.js\": \"./node_modules/moment/locale/sr.js\",\n\t\"./ss\": \"./node_modules/moment/locale/ss.js\",\n\t\"./ss.js\": \"./node_modules/moment/locale/ss.js\",\n\t\"./sv\": \"./node_modules/moment/locale/sv.js\",\n\t\"./sv.js\": \"./node_modules/moment/locale/sv.js\",\n\t\"./sw\": \"./node_modules/moment/locale/sw.js\",\n\t\"./sw.js\": \"./node_modules/moment/locale/sw.js\",\n\t\"./ta\": \"./node_modules/moment/locale/ta.js\",\n\t\"./ta.js\": \"./node_modules/moment/locale/ta.js\",\n\t\"./te\": \"./node_modules/moment/locale/te.js\",\n\t\"./te.js\": \"./node_modules/moment/locale/te.js\",\n\t\"./tet\": \"./node_modules/moment/locale/tet.js\",\n\t\"./tet.js\": \"./node_modules/moment/locale/tet.js\",\n\t\"./tg\": \"./node_modules/moment/locale/tg.js\",\n\t\"./tg.js\": \"./node_modules/moment/locale/tg.js\",\n\t\"./th\": \"./node_modules/moment/locale/th.js\",\n\t\"./th.js\": \"./node_modules/moment/locale/th.js\",\n\t\"./tl-ph\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tl-ph.js\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tlh\": \"./node_modules/moment/locale/tlh.js\",\n\t\"./tlh.js\": \"./node_modules/moment/locale/tlh.js\",\n\t\"./tr\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tr.js\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tzl\": \"./node_modules/moment/locale/tzl.js\",\n\t\"./tzl.js\": \"./node_modules/moment/locale/tzl.js\",\n\t\"./tzm\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./tzm-latn\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm-latn.js\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm.js\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./ug-cn\": \"./node_modules/moment/locale/ug-cn.js\",\n\t\"./ug-cn.js\": \"./node_modules/moment/locale/ug-cn.js\",\n\t\"./uk\": \"./node_modules/moment/locale/uk.js\",\n\t\"./uk.js\": \"./node_modules/moment/locale/uk.js\",\n\t\"./ur\": \"./node_modules/moment/locale/ur.js\",\n\t\"./ur.js\": \"./node_modules/moment/locale/ur.js\",\n\t\"./uz\": \"./node_modules/moment/locale/uz.js\",\n\t\"./uz-latn\": \"./node_modules/moment/locale/uz-latn.js\",\n\t\"./uz-latn.js\": \"./node_modules/moment/locale/uz-latn.js\",\n\t\"./uz.js\": \"./node_modules/moment/locale/uz.js\",\n\t\"./vi\": \"./node_modules/moment/locale/vi.js\",\n\t\"./vi.js\": \"./node_modules/moment/locale/vi.js\",\n\t\"./x-pseudo\": \"./node_modules/moment/locale/x-pseudo.js\",\n\t\"./x-pseudo.js\": \"./node_modules/moment/locale/x-pseudo.js\",\n\t\"./yo\": \"./node_modules/moment/locale/yo.js\",\n\t\"./yo.js\": \"./node_modules/moment/locale/yo.js\",\n\t\"./zh-cn\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-cn.js\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-hk\": \"./node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-hk.js\": \"./node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-tw\": \"./node_modules/moment/locale/zh-tw.js\",\n\t\"./zh-tw.js\": \"./node_modules/moment/locale/zh-tw.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/moment/locale sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./node_modules/moment/locale_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/client/CreatePostDialog.js":
/*!****************************************!*\
  !*** ./src/client/CreatePostDialog.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _modules_postFormDialog_components_CreatePostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/postFormDialog/components/CreatePostForm */ \"./src/client/modules/postFormDialog/components/CreatePostForm.js\");\n/* harmony import */ var _common_components_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/components/Dialog */ \"./src/client/common/components/Dialog.js\");\n\n\n\n\n\n\nvar CreatePostDialog = function CreatePostDialog(_ref) {\n  var history = _ref.history;\n\n  var backToBoard = function backToBoard() {\n    return history.push('/');\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Dialog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onOutsideClick: backToBoard\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_postFormDialog_components_CreatePostForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onSubmit: backToBoard\n  }));\n};\n\nCreatePostDialog.propTypes = {\n  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(CreatePostDialog));\n\n//# sourceURL=webpack:///./src/client/CreatePostDialog.js?");

/***/ }),

/***/ "./src/client/PostBoardPage.js":
/*!*************************************!*\
  !*** ./src/client/PostBoardPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_postList_components_PostList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/postList/components/PostList */ \"./src/client/modules/postList/components/PostList.js\");\n/* harmony import */ var _common_components_PageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/components/PageContainer */ \"./src/client/common/components/PageContainer.js\");\n\n\n\n\nvar PostBoardPage = function PostBoardPage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_PageContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"post board\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_postList_components_PostList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostBoardPage);\n\n//# sourceURL=webpack:///./src/client/PostBoardPage.js?");

/***/ }),

/***/ "./src/client/StatsPage.js":
/*!*********************************!*\
  !*** ./src/client/StatsPage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_stats_components_Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/stats/components/Stats */ \"./src/client/modules/stats/components/Stats.js\");\n/* harmony import */ var _common_components_PageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/components/PageContainer */ \"./src/client/common/components/PageContainer.js\");\n\n\n\n\nvar StatsPage = function StatsPage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_PageContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"post board stats\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_stats_components_Stats__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatsPage);\n\n//# sourceURL=webpack:///./src/client/StatsPage.js?");

/***/ }),

/***/ "./src/client/base-styles.css":
/*!************************************!*\
  !*** ./src/client/base-styles.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/base-styles.css?");

/***/ }),

/***/ "./src/client/common/components/Dialog.css":
/*!*************************************************!*\
  !*** ./src/client/common/components/Dialog.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/common/components/Dialog.css?");

/***/ }),

/***/ "./src/client/common/components/Dialog.js":
/*!************************************************!*\
  !*** ./src/client/common/components/Dialog.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _Dialog_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dialog.css */ \"./src/client/common/components/Dialog.css\");\n/* harmony import */ var _Dialog_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Dialog_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar stopPropagation = function stopPropagation(event) {\n  return event.stopPropagation();\n};\n\nvar Dialog = function Dialog(_ref) {\n  var onOutsideClick = _ref.onOutsideClick,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: onOutsideClick,\n    className: \"Dialog\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: stopPropagation\n  }, children));\n};\n\nDialog.propTypes = {\n  onOutsideClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Dialog));\n\n//# sourceURL=webpack:///./src/client/common/components/Dialog.js?");

/***/ }),

/***/ "./src/client/common/components/Navigation.css":
/*!*****************************************************!*\
  !*** ./src/client/common/components/Navigation.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/common/components/Navigation.css?");

/***/ }),

/***/ "./src/client/common/components/Navigation.js":
/*!****************************************************!*\
  !*** ./src/client/common/components/Navigation.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _Navigation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.css */ \"./src/client/common/components/Navigation.css\");\n/* harmony import */ var _Navigation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navigation_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Navigation = function Navigation() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"Navigation\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"board\"), \"\\xA0/\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/stats\"\n  }, \"stats\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\n//# sourceURL=webpack:///./src/client/common/components/Navigation.js?");

/***/ }),

/***/ "./src/client/common/components/PageContainer.css":
/*!********************************************************!*\
  !*** ./src/client/common/components/PageContainer.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/common/components/PageContainer.css?");

/***/ }),

/***/ "./src/client/common/components/PageContainer.js":
/*!*******************************************************!*\
  !*** ./src/client/common/components/PageContainer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation */ \"./src/client/common/components/Navigation.js\");\n/* harmony import */ var _PageContainer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageContainer.css */ \"./src/client/common/components/PageContainer.css\");\n/* harmony import */ var _PageContainer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PageContainer_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar PageContainer = function PageContainer(_ref) {\n  var children = _ref.children,\n      title = _ref.title;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"PageContainer-outerContainer\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"PageContainer-innerContainer\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"PageContainer-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"PageContainer-title\"\n  }, title)), children));\n};\n\nPageContainer.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageContainer);\n\n//# sourceURL=webpack:///./src/client/common/components/PageContainer.js?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _StatsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StatsPage */ \"./src/client/StatsPage.js\");\n/* harmony import */ var _store_rootReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/rootReducer */ \"./src/client/store/rootReducer.js\");\n/* harmony import */ var _modules_postList_postList_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/postList/postList.actions */ \"./src/client/modules/postList/postList.actions.js\");\n/* harmony import */ var _PostBoardPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostBoardPage */ \"./src/client/PostBoardPage.js\");\n/* harmony import */ var _CreatePostDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CreatePostDialog */ \"./src/client/CreatePostDialog.js\");\n/* harmony import */ var _base_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./base-styles.css */ \"./src/client/base-styles.css\");\n/* harmony import */ var _base_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_base_styles_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"createStore\"])(_store_rootReducer__WEBPACK_IMPORTED_MODULE_6__[\"rootReducer\"], undefined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());\nstore.dispatch(Object(_modules_postList_postList_actions__WEBPACK_IMPORTED_MODULE_7__[\"setPresetItems\"])());\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n  store: store\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n  path: \"/stats\",\n  component: _StatsPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n  exact: true,\n  path: \"/(create-post)?\",\n  component: _PostBoardPage__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n  path: \"/create-post\",\n  component: _CreatePostDialog__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n})))), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ }),

/***/ "./src/client/modules/postFormDialog/components/CreatePostForm.css":
/*!*************************************************************************!*\
  !*** ./src/client/modules/postFormDialog/components/CreatePostForm.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/modules/postFormDialog/components/CreatePostForm.css?");

/***/ }),

/***/ "./src/client/modules/postFormDialog/components/CreatePostForm.js":
/*!************************************************************************!*\
  !*** ./src/client/modules/postFormDialog/components/CreatePostForm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _postList_postList_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../postList/postList.actions */ \"./src/client/modules/postList/postList.actions.js\");\n/* harmony import */ var _postForm_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../postForm.actions */ \"./src/client/modules/postFormDialog/postForm.actions.js\");\n/* harmony import */ var _postForm_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../postForm.selectors */ \"./src/client/modules/postFormDialog/postForm.selectors.js\");\n/* harmony import */ var _CreatePostForm_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CreatePostForm.css */ \"./src/client/modules/postFormDialog/components/CreatePostForm.css\");\n/* harmony import */ var _CreatePostForm_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_CreatePostForm_css__WEBPACK_IMPORTED_MODULE_10__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n // ES6\n\n // ES6\n\n\n\n\n\n\nvar CreatePostForm =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CreatePostForm, _Component);\n\n  function CreatePostForm() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, CreatePostForm);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreatePostForm)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"setAuthorName\", function (ev) {\n      return _this.props.setAuthor(ev.target.value);\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"setBodyValue\", function (value) {\n      return _this.props.setBody(value);\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"submit\", function () {\n      var _this$props = _this.props,\n          createPost = _this$props.createPost,\n          setAuthor = _this$props.setAuthor,\n          setBody = _this$props.setBody,\n          onSubmit = _this$props.onSubmit;\n      setAuthor('');\n      setBody('');\n      createPost({\n        authorName: _this.props.authorName,\n        body: _this.props.body\n      });\n      onSubmit();\n    });\n\n    return _this;\n  }\n\n  _createClass(CreatePostForm, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        className: \"CreatePostForm\",\n        onClick: function onClick(e) {\n          return e.preventDefault();\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        className: \"CreatePostForm-name\",\n        placeholder: \"Name (optional)\",\n        value: this.props.authorName,\n        onChange: this.setAuthorName,\n        type: \"text\",\n        id: \"authorName\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_quill__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        className: \"CreatePostForm-rce\",\n        theme: \"snow\",\n        value: this.props.body,\n        onChange: this.setBodyValue\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"CreatePostForm-submit\",\n        onClick: this.submit\n      }, \"Submit\"));\n    }\n  }]);\n\n  return CreatePostForm;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nCreatePostForm.propTypes = {\n  createPost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  setAuthor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  setBody: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  authorName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    authorName: Object(_postForm_selectors__WEBPACK_IMPORTED_MODULE_9__[\"getAuthorNameValue\"])(state),\n    body: Object(_postForm_selectors__WEBPACK_IMPORTED_MODULE_9__[\"getBodyValue\"])(state)\n  };\n};\n\nvar mapDispatchToProps = {\n  createPost: _postList_postList_actions__WEBPACK_IMPORTED_MODULE_7__[\"createPost\"],\n  setAuthor: _postForm_actions__WEBPACK_IMPORTED_MODULE_8__[\"setAuthor\"],\n  setBody: _postForm_actions__WEBPACK_IMPORTED_MODULE_8__[\"setBody\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"compose\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"], Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, mapDispatchToProps))(CreatePostForm));\n\n//# sourceURL=webpack:///./src/client/modules/postFormDialog/components/CreatePostForm.js?");

/***/ }),

/***/ "./src/client/modules/postFormDialog/postForm.actions.js":
/*!***************************************************************!*\
  !*** ./src/client/modules/postFormDialog/postForm.actions.js ***!
  \***************************************************************/
/*! exports provided: SET_AUTHOR, SET_BODY, setAuthor, setBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_AUTHOR\", function() { return SET_AUTHOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_BODY\", function() { return SET_BODY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAuthor\", function() { return setAuthor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setBody\", function() { return setBody; });\nvar SET_AUTHOR = 'SET_AUTHOR';\nvar SET_BODY = 'SET_BODY';\nvar setAuthor = function setAuthor(value) {\n  return {\n    type: SET_AUTHOR,\n    payload: value\n  };\n};\nvar setBody = function setBody(value) {\n  return {\n    type: SET_BODY,\n    payload: value\n  };\n};\n\n//# sourceURL=webpack:///./src/client/modules/postFormDialog/postForm.actions.js?");

/***/ }),

/***/ "./src/client/modules/postFormDialog/postForm.reducer.js":
/*!***************************************************************!*\
  !*** ./src/client/modules/postFormDialog/postForm.reducer.js ***!
  \***************************************************************/
/*! exports provided: postForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postForm\", function() { return postForm; });\n/* harmony import */ var _postForm_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postForm.actions */ \"./src/client/modules/postFormDialog/postForm.actions.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar postForm = function postForm() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    authorName: '',\n    body: ''\n  };\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _postForm_actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_AUTHOR\"]:\n      return _objectSpread({}, state, {\n        authorName: action.payload\n      });\n\n    case _postForm_actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_BODY\"]:\n      return _objectSpread({}, state, {\n        body: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/modules/postFormDialog/postForm.reducer.js?");

/***/ }),

/***/ "./src/client/modules/postFormDialog/postForm.selectors.js":
/*!*****************************************************************!*\
  !*** ./src/client/modules/postFormDialog/postForm.selectors.js ***!
  \*****************************************************************/
/*! exports provided: getAuthorNameValue, getBodyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAuthorNameValue\", function() { return getAuthorNameValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBodyValue\", function() { return getBodyValue; });\nvar getAuthorNameValue = function getAuthorNameValue(state) {\n  return state.postForm.authorName;\n};\nvar getBodyValue = function getBodyValue(state) {\n  return state.postForm.body;\n};\n\n//# sourceURL=webpack:///./src/client/modules/postFormDialog/postForm.selectors.js?");

/***/ }),

/***/ "./src/client/modules/postList/components/CreatePostButton.css":
/*!*********************************************************************!*\
  !*** ./src/client/modules/postList/components/CreatePostButton.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/modules/postList/components/CreatePostButton.css?");

/***/ }),

/***/ "./src/client/modules/postList/components/CreatePostButton.js":
/*!********************************************************************!*\
  !*** ./src/client/modules/postList/components/CreatePostButton.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _CreatePostButton_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreatePostButton.css */ \"./src/client/modules/postList/components/CreatePostButton.css\");\n/* harmony import */ var _CreatePostButton_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CreatePostButton_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar CreatePostButton =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CreatePostButton, _Component);\n\n  function CreatePostButton() {\n    _classCallCheck(this, CreatePostButton);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CreatePostButton).apply(this, arguments));\n  }\n\n  _createClass(CreatePostButton, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"CreatePostButton\",\n        onClick: function onClick() {\n          return _this.props.history.push('/create-post');\n        }\n      }, \"Create post\");\n    }\n  }]);\n\n  return CreatePostButton;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nCreatePostButton.propTypes = {\n  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(CreatePostButton));\n\n//# sourceURL=webpack:///./src/client/modules/postList/components/CreatePostButton.js?");

/***/ }),

/***/ "./src/client/modules/postList/components/PostList.js":
/*!************************************************************!*\
  !*** ./src/client/modules/postList/components/PostList.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _postList_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../postList.selectors */ \"./src/client/modules/postList/postList.selectors.js\");\n/* harmony import */ var _PostListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostListItem */ \"./src/client/modules/postList/components/PostListItem.js\");\n/* harmony import */ var _CreatePostButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreatePostButton */ \"./src/client/modules/postList/components/CreatePostButton.js\");\n\n\n\n\n\n\n\nvar PostList = function PostList(_ref) {\n  var postsIds = _ref.postsIds;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      padding: '20px 0'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreatePostButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)), postsIds.map(function (id) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: id,\n      postId: id\n    });\n  }));\n};\n\nPostList.propTypes = {\n  postsIds: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    postsIds: Object(_postList_selectors__WEBPACK_IMPORTED_MODULE_3__[\"getPostsIds\"])(state)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(PostList));\n\n//# sourceURL=webpack:///./src/client/modules/postList/components/PostList.js?");

/***/ }),

/***/ "./src/client/modules/postList/components/PostListItem.css":
/*!*****************************************************************!*\
  !*** ./src/client/modules/postList/components/PostListItem.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/modules/postList/components/PostListItem.css?");

/***/ }),

/***/ "./src/client/modules/postList/components/PostListItem.js":
/*!****************************************************************!*\
  !*** ./src/client/modules/postList/components/PostListItem.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _postList_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../postList.selectors */ \"./src/client/modules/postList/postList.selectors.js\");\n/* harmony import */ var _PostListItem_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostListItem.css */ \"./src/client/modules/postList/components/PostListItem.css\");\n/* harmony import */ var _PostListItem_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PostListItem_css__WEBPACK_IMPORTED_MODULE_5__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar PostListItem = function PostListItem(_ref) {\n  var authorName = _ref.authorName,\n      body = _ref.body,\n      date = _ref.date;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n    className: \"PostListItem\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"PostListItem-header\"\n  }, authorName || 'Anonymous', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\xA0\\xA0\\xB7\\xA0\\xA0\"), moment__WEBPACK_IMPORTED_MODULE_3___default()(date).fromNow()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"PostListItem-body\",\n    dangerouslySetInnerHTML: {\n      __html: body\n    }\n  }));\n};\n\nPostListItem.propTypes = {\n  authorName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number\n};\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  return _objectSpread({}, Object(_postList_selectors__WEBPACK_IMPORTED_MODULE_4__[\"getPostById\"])(state, ownProps.postId));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(PostListItem));\n\n//# sourceURL=webpack:///./src/client/modules/postList/components/PostListItem.js?");

/***/ }),

/***/ "./src/client/modules/postList/postList.actions.js":
/*!*********************************************************!*\
  !*** ./src/client/modules/postList/postList.actions.js ***!
  \*********************************************************/
/*! exports provided: CREATE_POST, createPost, SET_PRESET_ITEMS, setPresetItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREATE_POST\", function() { return CREATE_POST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPost\", function() { return createPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_PRESET_ITEMS\", function() { return SET_PRESET_ITEMS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPresetItems\", function() { return setPresetItems; });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n\nvar CREATE_POST = 'CREATE_POST';\nvar createPost = function createPost(_ref) {\n  var authorName = _ref.authorName,\n      body = _ref.body;\n  return {\n    type: CREATE_POST,\n    payload: {\n      authorName: authorName,\n      body: body,\n      date: Date.now(),\n      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate()\n    }\n  };\n};\nvar SET_PRESET_ITEMS = 'SET_PRESET_ITEMS';\nvar setPresetItems = function setPresetItems() {\n  return {\n    type: SET_PRESET_ITEMS,\n    payload: [{\n      id: 1,\n      date: Date.now(),\n      authorName: 'Dan',\n      body: \"Best way to structure your application is to move files around until it feels just right\"\n    }, {\n      id: 2,\n      date: Date.now(),\n      authorName: 'Donald Trump',\n      body: \"Code splitting will bring peace to the world\"\n    }, {\n      id: 3,\n      date: Date.now(),\n      authorName: 'Wayne Gretzky',\n      body: \"You miss 100 percent of the shots you don't take\"\n    }, {\n      id: 4,\n      date: Date.now(),\n      authorName: 'Wix Ad',\n      body: \"Come work at Wix, we have many positions open. For juniors as well!\"\n    }, {\n      id: 5,\n      date: Date.now(),\n      authorName: 'Veryga',\n      body: 'Ban the alcohol!'\n    }, {\n      id: 6,\n      date: Date.now(),\n      authorName: 'Mark Zuckerberg',\n      body: \"The biggest risk is not taking any risk... In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks\"\n    }, {\n      id: 7,\n      date: Date.now(),\n      authorName: 'Trashcan',\n      body: 'People throw trash in me, and I am fine with it'\n    }, {\n      id: 8,\n      date: Date.now(),\n      authorName: 'Albert Einstein',\n      body: \"If you can't explain it simply, you don't understand it well enough\"\n    }, {\n      id: 9,\n      date: Date.now(),\n      authorName: 'Mark Twain',\n      body: \"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.\"\n    }]\n  };\n};\n\n//# sourceURL=webpack:///./src/client/modules/postList/postList.actions.js?");

/***/ }),

/***/ "./src/client/modules/postList/postList.reducer/index.js":
/*!***************************************************************!*\
  !*** ./src/client/modules/postList/postList.reducer/index.js ***!
  \***************************************************************/
/*! exports provided: posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"posts\", function() { return posts; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _postsById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postsById */ \"./src/client/modules/postList/postList.reducer/postsById.js\");\n/* harmony import */ var _postsIdList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postsIdList */ \"./src/client/modules/postList/postList.reducer/postsIdList.js\");\n\n\n\nvar posts = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  byId: _postsById__WEBPACK_IMPORTED_MODULE_1__[\"byId\"],\n  idList: _postsIdList__WEBPACK_IMPORTED_MODULE_2__[\"idList\"]\n});\n\n//# sourceURL=webpack:///./src/client/modules/postList/postList.reducer/index.js?");

/***/ }),

/***/ "./src/client/modules/postList/postList.reducer/postsById.js":
/*!*******************************************************************!*\
  !*** ./src/client/modules/postList/postList.reducer/postsById.js ***!
  \*******************************************************************/
/*! exports provided: byId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"byId\", function() { return byId; });\n/* harmony import */ var _postList_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../postList.actions */ \"./src/client/modules/postList/postList.actions.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar byId = function byId() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _postList_actions__WEBPACK_IMPORTED_MODULE_0__[\"CREATE_POST\"]:\n      return _objectSpread({}, state, _defineProperty({}, action.payload.id, action.payload));\n\n    case _postList_actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_PRESET_ITEMS\"]:\n      return _objectSpread({}, state, action.payload.reduce(function (list, post) {\n        list[post.id] = post;\n        return list;\n      }, {}));\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/modules/postList/postList.reducer/postsById.js?");

/***/ }),

/***/ "./src/client/modules/postList/postList.reducer/postsIdList.js":
/*!*********************************************************************!*\
  !*** ./src/client/modules/postList/postList.reducer/postsIdList.js ***!
  \*********************************************************************/
/*! exports provided: idList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"idList\", function() { return idList; });\n/* harmony import */ var _postList_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../postList.actions */ \"./src/client/modules/postList/postList.actions.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\nvar idList = function idList() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _postList_actions__WEBPACK_IMPORTED_MODULE_0__[\"CREATE_POST\"]:\n      return [action.payload.id].concat(_toConsumableArray(state));\n\n    case _postList_actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_PRESET_ITEMS\"]:\n      return _toConsumableArray(state).concat(_toConsumableArray(action.payload.map(function (post) {\n        return post.id;\n      })));\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/modules/postList/postList.reducer/postsIdList.js?");

/***/ }),

/***/ "./src/client/modules/postList/postList.selectors.js":
/*!***********************************************************!*\
  !*** ./src/client/modules/postList/postList.selectors.js ***!
  \***********************************************************/
/*! exports provided: getPostsIds, getPostById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostsIds\", function() { return getPostsIds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostById\", function() { return getPostById; });\nvar getPostsIds = function getPostsIds(state) {\n  return state.posts.idList;\n};\nvar getPostById = function getPostById(state, id) {\n  return state.posts.byId[id];\n};\n\n//# sourceURL=webpack:///./src/client/modules/postList/postList.selectors.js?");

/***/ }),

/***/ "./src/client/modules/stats/components/ChartTitle.js":
/*!***********************************************************!*\
  !*** ./src/client/modules/stats/components/ChartTitle.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar ChartTitle = function ChartTitle(_ref) {\n  var children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    style: {\n      textAlign: 'center'\n    }\n  }, children);\n};\n\nChartTitle.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartTitle);\n\n//# sourceURL=webpack:///./src/client/modules/stats/components/ChartTitle.js?");

/***/ }),

/***/ "./src/client/modules/stats/components/SimpleBarChart.js":
/*!***************************************************************!*\
  !*** ./src/client/modules/stats/components/SimpleBarChart.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* harmony import */ var _ChartTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartTitle */ \"./src/client/modules/stats/components/ChartTitle.js\");\n\n\n\nvar data = [{\n  name: 'Page A',\n  uv: 4000,\n  pv: 2400,\n  amt: 2400\n}, {\n  name: 'Page B',\n  uv: 3000,\n  pv: 1398,\n  amt: 2210\n}, {\n  name: 'Page C',\n  uv: 2000,\n  pv: 9800,\n  amt: 2290\n}, {\n  name: 'Page D',\n  uv: 2780,\n  pv: 3908,\n  amt: 2000\n}, {\n  name: 'Page E',\n  uv: 1890,\n  pv: 4800,\n  amt: 2181\n}, {\n  name: 'Page F',\n  uv: 2390,\n  pv: 3800,\n  amt: 2500\n}, {\n  name: 'Page G',\n  uv: 3490,\n  pv: 4300,\n  amt: 2100\n}];\n\nvar SimpleBarChart = function SimpleBarChart() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChartTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, \"Growth\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"BarChart\"], {\n    width: 600,\n    height: 300,\n    data: data,\n    margin: {\n      top: 5,\n      right: 30,\n      left: 20,\n      bottom: 5\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"CartesianGrid\"], {\n    strokeDasharray: \"3 3\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"XAxis\"], {\n    dataKey: \"name\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"YAxis\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Bar\"], {\n    dataKey: \"pv\",\n    fill: \"#8884d8\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Bar\"], {\n    dataKey: \"uv\",\n    fill: \"#82ca9d\"\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleBarChart);\n\n//# sourceURL=webpack:///./src/client/modules/stats/components/SimpleBarChart.js?");

/***/ }),

/***/ "./src/client/modules/stats/components/SimplePieChart.js":
/*!***************************************************************!*\
  !*** ./src/client/modules/stats/components/SimplePieChart.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* harmony import */ var _ChartTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartTitle */ \"./src/client/modules/stats/components/ChartTitle.js\");\n\n\n\nvar data = [{\n  name: 'Group A',\n  value: 400\n}, {\n  name: 'Group B',\n  value: 300\n}, {\n  name: 'Group C',\n  value: 300\n}, {\n  name: 'Group D',\n  value: 200\n}, {\n  name: 'Group E',\n  value: 278\n}, {\n  name: 'Group F',\n  value: 189\n}];\n\nvar SimplePieChart = function SimplePieChart() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChartTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, \"Pie\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"PieChart\"], {\n    width: 600,\n    height: 200\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Pie\"], {\n    isAnimationActive: false,\n    data: data,\n    dataKey: \"value\",\n    cx: 300,\n    cy: 100,\n    outerRadius: 80,\n    fill: \"tomato\",\n    label: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimplePieChart);\n\n//# sourceURL=webpack:///./src/client/modules/stats/components/SimplePieChart.js?");

/***/ }),

/***/ "./src/client/modules/stats/components/Stats.js":
/*!******************************************************!*\
  !*** ./src/client/modules/stats/components/Stats.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _VisitorsCountChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisitorsCountChart */ \"./src/client/modules/stats/components/VisitorsCountChart.js\");\n/* harmony import */ var _SimplePieChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimplePieChart */ \"./src/client/modules/stats/components/SimplePieChart.js\");\n/* harmony import */ var _SimpleBarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SimpleBarChart */ \"./src/client/modules/stats/components/SimpleBarChart.js\");\n\n\n\n\n\nvar Stats = function Stats() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VisitorsCountChart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SimpleBarChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SimplePieChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stats);\n\n//# sourceURL=webpack:///./src/client/modules/stats/components/Stats.js?");

/***/ }),

/***/ "./src/client/modules/stats/components/VisitorsCountChart.js":
/*!*******************************************************************!*\
  !*** ./src/client/modules/stats/components/VisitorsCountChart.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* harmony import */ var _ChartTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartTitle */ \"./src/client/modules/stats/components/ChartTitle.js\");\n\n\n\nvar data = [{\n  name: 'February',\n  pv: 2400\n}, {\n  name: 'March',\n  pv: 1398\n}, {\n  name: 'April',\n  pv: 2800\n}, {\n  name: 'May',\n  pv: 3908\n}, {\n  name: 'June',\n  pv: 4800\n}, {\n  name: 'July',\n  pv: 5800\n}, {\n  name: 'August',\n  pv: 6300\n}];\n\nvar VisitorsCountChart = function VisitorsCountChart() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChartTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, \"Visitors\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"LineChart\"], {\n    width: 600,\n    height: 300,\n    data: data,\n    margin: {\n      top: 5,\n      right: 30,\n      left: 20,\n      bottom: 5\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"XAxis\"], {\n    dataKey: \"name\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"YAxis\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"CartesianGrid\"], {\n    strokeDasharray: \"3 3\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Line\"], {\n    type: \"monotone\",\n    dataKey: \"pv\",\n    stroke: \"#8884d8\",\n    activeDot: {\n      r: 8\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VisitorsCountChart);\n\n//# sourceURL=webpack:///./src/client/modules/stats/components/VisitorsCountChart.js?");

/***/ }),

/***/ "./src/client/store/rootReducer.js":
/*!*****************************************!*\
  !*** ./src/client/store/rootReducer.js ***!
  \*****************************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootReducer\", function() { return rootReducer; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _modules_postList_postList_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/postList/postList.reducer */ \"./src/client/modules/postList/postList.reducer/index.js\");\n/* harmony import */ var _modules_postFormDialog_postForm_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/postFormDialog/postForm.reducer */ \"./src/client/modules/postFormDialog/postForm.reducer.js\");\n\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  posts: _modules_postList_postList_reducer__WEBPACK_IMPORTED_MODULE_1__[\"posts\"],\n  postForm: _modules_postFormDialog_postForm_reducer__WEBPACK_IMPORTED_MODULE_2__[\"postForm\"]\n});\n\n//# sourceURL=webpack:///./src/client/store/rootReducer.js?");

/***/ })

/******/ });