'use strict';
(function () {


  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';


  // Раздел взаимодействия пользователя с сайтом
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
    'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var setupPlayer = document.querySelector('.setup-player');
  var setupOpen = document.querySelector('.setup-open');
  var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');
  var setupClose = document.querySelector('.setup-close');
  var setupWizard = setupWizardAppearance.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var inputUserName = document.querySelector('.setup-user-name');
  var userDialog = document.querySelector('.setup');

  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === ESC_KEY && inputUserName !== document.activeElement) {
      closePopup();
    }
  };


  var onEnterPress = function (evt, action) {
    if (evt.key === ENTER_KEY) {
      action();
    }
  };


  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };


  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };


  setupOpen.addEventListener('click', function () {
    openPopup();
  });


  setupOpen.addEventListener('keydown', function (evt) {
    onEnterPress(evt, openPopup);
  });


  setupClose.addEventListener('click', function () {
    closePopup();
  });


  setupClose.addEventListener('keydown', function (evt) {
    onEnterPress(evt, closePopup);
  });


  var onWizardCoatClick = function () {
    var colorCoat = getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = colorCoat;
    setupPlayer.querySelector('input[name="coat-color"]').value = colorCoat;
  };


  var onWizardEyesClick = function () {
    var colorWizardEyes = getRandomElement(EYES_COLORS);
    wizardEyes.style.fill = colorWizardEyes;
    setupPlayer.querySelector('input[name="eyes-color"]').value = colorWizardEyes;
  };


  var onFireballClick = function () {
    var colorFireball = getRandomElement(FIREBALL_COLORS);
    wizardFireball.style.background = colorFireball;
    setupPlayer.querySelector('input[name="fireball-color"]').value = colorFireball;
  };


  wizardCoat.addEventListener('click', onWizardCoatClick);

  wizardEyes.addEventListener('click', onWizardEyesClick);

  wizardFireball.addEventListener('click', onFireballClick);


  wizardCoat.addEventListener('keydown', function (evt) {
    onEnterPress(evt, onWizardCoatClick);
  });

  wizardEyes.addEventListener('keydown', function (evt) {
    onEnterPress(evt, onWizardEyesClick);
  });

  wizardFireball.addEventListener('keydown', function (evt) {
    onEnterPress(evt, onFireballClick);
  });
})();
