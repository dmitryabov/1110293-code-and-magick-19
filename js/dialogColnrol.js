'use strict';

(function () {
  var userDialoge = document.querySelector('.setup');
  var inputUdserName = document.querySelector('.setup-user-name');
  var onPopupEscPress = function (evt) {
    if (evt.key === window.const.ESC_KEY && inputUdserName !== document.activeElement) {
      window.dialogControl.closePopup();
    }
  };


  var setupDialogElement = document.querySelector('.setup');


  window.dialogControl = {
    openPopup: function () {
      userDialoge.classList.remove('hidden');
      document.addEventListener('keydown', onPopupEscPress);
    },

    closePopup: function () {
      userDialoge.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
      setupDialogElement.style.top = window.const.DIALOG_OFFSET_TOP + 'px';
      setupDialogElement.style.left = window.const.DIALOG_OFFSET_LEFT + 'px';
    }
  };
})();
