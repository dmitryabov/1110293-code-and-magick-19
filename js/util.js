'use strict';

(function () {
  var ENTER_KEY = 'Enter';
  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var onEnterPress = function (evt, action) {
    if (evt.key === ENTER_KEY) {
      action();
    }
  };

  window.util = {
    getRandomElement: getRandomElement,
    onEnterPress: onEnterPress
  };
})();
