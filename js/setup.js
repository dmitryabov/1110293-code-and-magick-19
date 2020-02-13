'use strict';

(function () {

  var userDialog = document.querySelector('.setup');

  window.wizard.add();

  userDialog.querySelector('.setup-similar').classList.remove('hidden');


  var setupOpen = document.querySelector('.setup-open');
  var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');
  var setupClose = userDialog.querySelector('.setup-close');
  var setupWizard = setupWizardAppearance.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');


  setupOpen.addEventListener('click', function (evt) {
    window.dialogControl.openPopup(evt);
  });


  setupOpen.addEventListener('keydown', function (evt) {
    window.util.onEnterPress(evt, window.dialogControl.openPopup(evt));
  });


  setupClose.addEventListener('click', function (evt) {
    window.dialogControl.closePopup(evt);
  });

  document.addEventListener('keydown', function (evt) {
    window.dialogControl.closePopupOnEsc(evt);
  });


  setupClose.addEventListener('keydown', function (evt) {
    window.util.onEnterPress(evt, window.dialogControl.closePopup(evt));
  });


  wizardCoat.addEventListener('click', window.changeWizard.onCoatClick);

  wizardEyes.addEventListener('click', window.changeWizard.onEyesClick);

  wizardFireball.addEventListener('click', window.changeWizard.onFireballClick);


  wizardCoat.addEventListener('keydown', function (evt) {
    window.util.onEnterPress(evt, window.changeWizard.onCoatClick());
  });

  wizardEyes.addEventListener('keydown', function (evt) {
    window.util.onEnterPress(evt, window.changeWizard.onEyesClick());
  });

  wizardFireball.addEventListener('keydown', function (evt) {
    window.util.onEnterPress(evt, window.changeWizard.onFireballClick());
  });
})();
