'use strict';

(function () {
  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var onEnterPress = function (evt, action) {
    if (evt.key === window.const.ENTER_KEY) {
      action();
    }
  };

  window.util = {
    getRandomElement: getRandomElement,
    onEnterPress: onEnterPress
  };
})();
