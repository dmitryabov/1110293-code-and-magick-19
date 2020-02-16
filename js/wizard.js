'use strict';

(function () {

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').
  content.querySelector('.setup-similar-item');


  var generateWizards = function (numberOfWizards) {
    var wizards = [];
    for (var i = 0; i < numberOfWizards; i++) {
      var wizard = {
        name: window.util.getRandomElement(window.const.WIZARD_NAMES) + ' ' + window.util.getRandomElement(window.const.WIZARD_SURNAMES),
        coatColor: window.util.getRandomElement(window.const.COAT_COLORS),
        eyesColor: window.util.getRandomElement(window.const.EYES_COLORS)
      };
      wizards.push(wizard);
    }
    return wizards;
  };


  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };


  var wizards = generateWizards(window.const.WIZARDS_NUMBER);

  var creatureFragmentWithWizards = function (arrayOfWizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arrayOfWizards.length; i++) {
      fragment.appendChild(createWizard(arrayOfWizards[i]));
    }
    return fragment;
  };

  var addWizards = function () {
    similarListElement.appendChild(creatureFragmentWithWizards(wizards));
  };


  window.wizard = {
    add: addWizards
  };
})();
