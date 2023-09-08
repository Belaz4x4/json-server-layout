/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.js\");\n/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addUsers */ \"./src/modules/addUsers.js\");\n/* harmony import */ var _modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeUsers */ \"./src/modules/removeUsers.js\");\n/* harmony import */ var _modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changePermissions */ \"./src/modules/changePermissions.js\");\n/* harmony import */ var _modules_editUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editUsers */ \"./src/modules/editUsers.js\");\n/* harmony import */ var _modules_filterUses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filterUses */ \"./src/modules/filterUses.js\");\n/* harmony import */ var _modules_sortUsers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sortUsers */ \"./src/modules/sortUsers.js\");\n/* harmony import */ var _modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/searchUsers */ \"./src/modules/searchUsers.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst url = 'https://grey-amethyst-hydrogen.glitch.me/users/' //rs/\r\n\r\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_1__.UserService // мы создаем новое поле в глобальном объекте window, после чего это поле может вызываться откуда угодно.\r\n\r\nconst start = (url) => {\r\n    const loader = document.querySelector('.loading-container')\r\n    loader.style.display = 'block'\r\n    userService.getData(url).then(data => {\r\n        loader.style.display = 'none'\r\n        ;(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data)\r\n    })\r\n}\r\n\r\n\r\nstart(url)\r\n;(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_2__.addUsers)(url)\r\n;(0,_modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__.removeUsers)(url)\r\n;(0,_modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__.changePermissions)(url)\r\n;(0,_modules_editUsers__WEBPACK_IMPORTED_MODULE_5__.editUsers)(url)\r\n;(0,_modules_filterUses__WEBPACK_IMPORTED_MODULE_6__.filterUsers)(url)\r\n;(0,_modules_sortUsers__WEBPACK_IMPORTED_MODULE_7__.sortUsers)(url)\r\n;(0,_modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__.searchUsers)(url)\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUsers.js":
/*!*********************************!*\
  !*** ./src/modules/addUsers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUsers: () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst addUsers = (url) => {\r\n    const form = document.querySelector('form')\r\n    const nameInput = document.querySelector('#form-name')\r\n    const emailInput = document.querySelector('#form-email')\r\n    const childenInput = document.querySelector('#form-children')\r\n\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault()\r\n\r\n        if (!form.dataset.method) {\r\n            const user = {\r\n                \"name\": nameInput.value,\r\n                \"email\": emailInput.value,\r\n                \"children\": childenInput.checked,\r\n                \"permissions\": false\r\n            }\r\n\r\n            userService.changeData(url, 'POST', undefined, user).then(() => {\r\n                userService.getData(url).then(users => {\r\n                    ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\r\n                    form.reset()\r\n                })\r\n            })\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUsers.js?");

/***/ }),

/***/ "./src/modules/changePermissions.js":
/*!******************************************!*\
  !*** ./src/modules/changePermissions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePermissions: () => (/* binding */ changePermissions)\n/* harmony export */ });\nconst changePermissions = (url) => {\r\n    const tbody = document.querySelector('#table-body')\r\n\r\n    tbody.addEventListener('click', (e) => {\r\n        try {\r\n            if (e.target.closest('input[type=checkbox]')) {\r\n                const tr = e.target.closest('tr')\r\n                const input = tr.querySelector('input[type=checkbox]')\r\n                const id = tr.dataset.key\r\n\r\n                userService.changeData(url, 'PATCH', id, { permissions: input.checked })\r\n            }\r\n        } catch (error) {\r\n            console.log(`Ошибка отправки данных!\\n${error.message}`)\r\n\r\n            const errorBlock = document.createElement('div')\r\n            errorBlock.innerHTML = `<div style=\"text-align: center; color: red; font-size: 22px;\">Произошла ошибка, данные не были отправлены!</div>`\r\n            document.querySelector('.table').after(errorBlock)\r\n        }\r\n\r\n    })\r\n\r\n}\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/changePermissions.js?");

/***/ }),

/***/ "./src/modules/editUsers.js":
/*!**********************************!*\
  !*** ./src/modules/editUsers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editUsers: () => (/* binding */ editUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst editUsers = (url) => {\r\n    const tbody = document.querySelector('#table-body')\r\n    const form = document.querySelector('form')\r\n    const nameInput = document.querySelector('#form-name')\r\n    const emailInput = document.querySelector('#form-email')\r\n    const childenInput = document.querySelector('#form-children')\r\n\r\n    try {\r\n        tbody.addEventListener('click', (e) => {\r\n            if (e.target.closest('.btn-edit')) {\r\n                const tr = e.target.closest('tr')\r\n                const id = tr.dataset.key\r\n\r\n                userService.getData(url, id).then((user) => {\r\n                    nameInput.value = user.name\r\n                    emailInput.value = user.email\r\n                    childenInput.checked = user.children\r\n\r\n                    form.dataset.method = id\r\n                })\r\n            }\r\n        })\r\n    } catch (error) {\r\n        console.log(`Ошибка запроса!\\n${error.message}`)\r\n\r\n        const errorBlock = document.createElement('div')\r\n        errorBlock.innerHTML = `<div style=\"text-align: center; color: red; font-size: 22px;\">Произошла ошибка, данные не были получены!</div>`\r\n        document.querySelector('.table').after(errorBlock)\r\n    }\r\n\r\n\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault()\r\n\r\n        try {\r\n            if (form.dataset.method) {\r\n                const id = form.dataset.method\r\n                const user = {\r\n                    \"name\": nameInput.value,\r\n                    \"email\": emailInput.value,\r\n                    \"children\": childenInput.checked,\r\n                    \"permissions\": false\r\n                }\r\n\r\n                userService.changeData(url, 'PUT', id, user).then(() => {\r\n                    userService.getData(url).then(users => {\r\n                        ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\r\n                        form.reset()\r\n                        form.removeAttribute('data-method')\r\n                    })\r\n                })\r\n            }\r\n        } catch (error) {\r\n            console.log(`Ошибка отправки данных!\\n${error.message}`)\r\n\r\n            const errorBlock = document.createElement('div')\r\n            errorBlock.innerHTML = `<div style=\"text-align: center; color: red; font-size: 22px;\">Произошла ошибка, данные не были отправлены!</div>`\r\n            document.querySelector('.table').after(errorBlock)\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/editUsers.js?");

/***/ }),

/***/ "./src/modules/filterUses.js":
/*!***********************************!*\
  !*** ./src/modules/filterUses.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filterUsers: () => (/* binding */ filterUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst filterUsers = (url) => {\r\n    const btnIsChildren = document.getElementById('btn-isChildren')\r\n    const btnIsPermissions = document.getElementById('btn-isPermissions')\r\n    const btnIsAll = document.getElementById('btn-isAll')\r\n\r\n    btnIsChildren.addEventListener('click', () => {\r\n        userService.getData(url, '?children=true').then(users => {\r\n            ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\r\n        })\r\n    })\r\n\r\n    btnIsPermissions.addEventListener('click', () => {\r\n        userService.getData(url, '?permissions=true').then(users => {\r\n            ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\r\n        })\r\n    })\r\n\r\n    btnIsAll.addEventListener('click', () => {\r\n        userService.getData(url).then(users => {\r\n            ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/filterUses.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (func, ms = 300) => { // функция замедляет запросы к серверу, чтобы они происходили на вводе не каждой буквы\r\n    let timer\r\n\r\n    return (...args) => {\r\n        clearTimeout(timer)\r\n\r\n        timer = setTimeout(() => {\r\n            func.apply(undefined, args) // возвращаем функцию, привязанную к контексту вызова\r\n        }, ms)\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/removeUsers.js":
/*!************************************!*\
  !*** ./src/modules/removeUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeUsers: () => (/* binding */ removeUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst removeUsers = (url) => {\r\n    const tbody = document.querySelector('#table-body')\r\n\r\n    tbody.addEventListener('click', (e) => {\r\n        if (e.target.closest('.btn-remove')) {\r\n            const tr = e.target.closest('tr')\r\n            const id = tr.dataset.key\r\n\r\n            userService.changeData(url, 'DELETE', id).then(() => {\r\n                userService.getData(url).then(data => (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(data))\r\n            })\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/removeUsers.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => {\r\n    const tbody = document.querySelector('#table-body')\r\n    try {\r\n        tbody.innerHTML = ''\r\n\r\n        users.forEach(user => {\r\n            tbody.insertAdjacentHTML('beforeend', `\r\n            <tr data-key=\"${user.id}\">\r\n                <th scope=\"row\">${user.id}</th>\r\n                <td>${user.name}</td>\r\n                <td>${user.email}</td>\r\n                <td>${user.children ? 'Есть' : 'Нет'}</td>\r\n                <td>\r\n                    <div class=\"form-check form-switch\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\"\r\n                            id=\"form-children\" ${user.permissions ? 'checked' : ''}>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                        <button type=\"button\" class=\"btn btn-warning btn-edit\">\r\n                            <i class=\"bi-pencil-square\"></i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n                            <i class=\"bi-person-x\"></i>\r\n                        </button>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            `)\r\n        });\r\n    } catch (error) {\r\n        console.log(`Ошибка рендеринга!\\n${error.message}`)\r\n\r\n        const errorBlock = document.createElement('div')\r\n        errorBlock.innerHTML = `<div style=\"text-align: center; color: red; font-size: 22px;\">Произошла ошибка, данные не были получены!</div>`\r\n        document.querySelector('.table').after(errorBlock)\r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/searchUsers.js":
/*!************************************!*\
  !*** ./src/modules/searchUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchUsers: () => (/* binding */ searchUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\n\r\nconst searchUsers = (url) => {\r\n    const input = document.getElementById('search-input')\r\n\r\n    const debounceSearch = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.debounce)(() => {\r\n        userService.getData(url, `?name_like=${input.value}`).then(users => {\r\n            ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.debounce)()\r\n        })\r\n    }, 400)\r\n\r\n    input.addEventListener('input', debounceSearch)\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/searchUsers.js?");

/***/ }),

/***/ "./src/modules/sortUsers.js":
/*!**********************************!*\
  !*** ./src/modules/sortUsers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sortUsers: () => (/* binding */ sortUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst sortUsers = (url) => {\r\n    const thead = document.querySelector('.table-dark')\r\n\r\n    thead.addEventListener('click', (e) => {\r\n        const th = e.target.closest('th')\r\n\r\n        if (th.dataset.column !== 'actions') {\r\n            const colName = th.dataset.column\r\n            let isSort = th.dataset.sort === 'false' ? false : true\r\n\r\n            userService.getData(url, `?_sort=${colName}&_order=${isSort ? 'asc' : 'desc'}`)\r\n                .then(users => {\r\n                    ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\r\n                })\r\n\r\n            th.dataset.sort = !isSort\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/sortUsers.js?");

/***/ }),

/***/ "./src/modules/userService.js":
/*!************************************!*\
  !*** ./src/modules/userService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\r\n    getData(url, urlParameters = '') {\r\n        return fetch(`${url}${urlParameters}`)\r\n            .then(response => response.json())\r\n            .catch(error => {\r\n                console.log(`Ошибка получения данных!\\n${error.message}`)\r\n            })\r\n    }\r\n\r\n    changeData(url, method, urlParameters = '', data = {}) {\r\n        let requestParameters\r\n        if (method !== 'DELETE') {\r\n            requestParameters = {\r\n                method: method,\r\n                body: JSON.stringify(data),\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\",\r\n                },\r\n            }\r\n        } else {\r\n            requestParameters = {\r\n                method: method,\r\n            }\r\n        }\r\n\r\n        return fetch(`${url}${urlParameters}`, requestParameters)\r\n            .then(response => response.json())\r\n            .catch(error => {\r\n                console.log(`Ошибка отправки данных!\\n${error.message}`)\r\n            })\r\n    }\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;