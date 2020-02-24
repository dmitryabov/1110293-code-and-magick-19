'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
    'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var onWizardCoatClick = function () {
    var wizardCoat = document.querySelector('.wizard-coat');
    var colorCoat = window.util.getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = colorCoat;
    document.querySelector('input[name="coat-color"]').value = colorCoat;
  };


  var onWizardEyesClick = function () {
    var wizardEyes = document.querySelector('.wizard-eyes');
    var colorWizardEyes = window.util.getRandomElement(EYES_COLORS);
    wizardEyes.style.fill = colorWizardEyes;
    document.querySelector('input[name="eyes-color"]').value = colorWizardEyes;
  };


  var onFireballClick = function () {
    var wizardFireball = document.querySelector('.setup-fireball-wrap');
    var colorFireball = window.util.getRandomElement(FIREBALL_COLORS);
    wizardFireball.style.background = colorFireball;
    document.querySelector('input[name="fireball-color"]').value = colorFireball;
  };


  window.changeWizard = {
    onCoatClick: onWizardCoatClick,
    onEyesClick: onWizardEyesClick,
    onFireballClick: onFireballClick
  };

})();
