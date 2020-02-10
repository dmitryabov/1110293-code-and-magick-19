'use strict';

(function () {
  window.changeWizard = {
    onWizardCoatClick: function () {
      var wizardCoat = document.querySelector('.wizard-coat');
      var colorCoat = window.util.getRandomElement(window.const.COAT_COLORS);
      wizardCoat.style.fill = colorCoat;
      document.querySelector('input[name="coat-color"]').value = colorCoat;
    },


    onWizardEyesClick: function () {
      var wizardEyes = document.querySelector('.wizard-eyes');
      var colorWizardEyes = window.util.getRandomElement(window.const.EYES_COLORS);
      wizardEyes.style.fill = colorWizardEyes;
      document.querySelector('input[name="eyes-color"]').value = colorWizardEyes;
    },


    onFireballClick: function () {
      var wizardFireball = document.querySelector('.setup-fireball-wrap');
      var colorFireball = window.util.getRandomElement(window.const.FIREBALL_COLORS);
      wizardFireball.style.background = colorFireball;
      document.querySelector('input[name="fireball-color"]').value = colorFireball;
    }
  };
})();
