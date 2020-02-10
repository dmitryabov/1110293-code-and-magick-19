'use strict';

(function () {
  window.util = {
    getRandomElement: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    onEnterPress: function (evt, action) {
      if (evt.key === window.const.ENTER_KEY) {
        action();
      }
    }
  };
})();
