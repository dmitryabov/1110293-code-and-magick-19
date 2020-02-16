'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var DIALOG_OFFSET_LEFT = window.innerWidth / 2;
  var DIALOG_OFFSET_TOP = 80;
  var userDialoge = document.querySelector('.setup');
  var inputUdserName = document.querySelector('.setup-user-name');
  var onPopupEscPress = function (evt) {
    if (evt.key === ESC_KEY && inputUdserName !== document.activeElement) {
      window.dialogControl.closePopup();
    }
  };


  var setupDialogElement = document.querySelector('.setup');

  var openPopup = function () {
    userDialoge.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };


  var closePopup = function () {
    userDialoge.classList.add('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    document.removeEventListener('keydown', onPopupEscPress);
    setupDialogElement.style.top = DIALOG_OFFSET_TOP + 'px';
    setupDialogElement.style.left = DIALOG_OFFSET_LEFT + 'px';
  };


  window.dialogControl = {
    closePopupOnEsc: onPopupEscPress,
    closePopup: closePopup,
    openPopup: openPopup
  };
})();
