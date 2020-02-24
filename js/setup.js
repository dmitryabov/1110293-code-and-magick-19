'use strict';

(function () {

  var userDialog = document.querySelector('.setup');

  var URL_DATA = 'https://js.dump.academy/code-and-magick/data';
  var URL = 'https://js.dump.academy/code-and-magick';

  userDialog.querySelector('.setup-similar').classList.remove('hidden');


  var setupOpen = document.querySelector('.setup-open');
  var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');
  var setupClose = userDialog.querySelector('.setup-close');
  var setupWizard = setupWizardAppearance.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');


  setupOpen.addEventListener('click', window.dialogControl.openPopup);


  setupOpen.addEventListener('keydown', function (evt) {
    window.util.onEnterPress(evt, window.dialogControl.openPopup);
  });


  setupClose.addEventListener('click', window.dialogControl.closePopup);

  document.addEventListener('keydown', function (evt) {
    window.dialogControl.closePopupOnEsc(evt);
  });


  setupClose.addEventListener('keydown', function (evt) {
    window.util.onEnterPress(evt, window.dialogControl.closePopup);
  });


  wizardCoat.addEventListener('click', window.changeWizard.onCoatClick);

  wizardEyes.addEventListener('click', window.changeWizard.onEyesClick);

  wizardFireball.addEventListener('click', window.changeWizard.onFireballClick);


  wizardCoat.addEventListener('keydown', function (evt) {
    window.util.onEnterPress(evt, window.changeWizard.onCoatClick);
  });

  wizardEyes.addEventListener('keydown', function (evt) {
    window.util.onEnterPress(evt, window.changeWizard.onEyesClick);
  });

  wizardFireball.addEventListener('keydown', function (evt) {
    window.util.onEnterPress(evt, window.changeWizard.onFireballClick);
  });


  window.backend.load(window.callbackFunction.successLoadHandler, window.callbackFunction.errorHandler, URL_DATA, 'GET');


  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.load(window.callbackFunction.succesSaveHandler, window.callbackFunction.errorHandler, URL, 'POST', new FormData(form));

    evt.preventDefault();
  });
})();
