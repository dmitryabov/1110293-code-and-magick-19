'use strict';

(function () {
  var MAX_SIMILAR_WIZARD_COUNT = 4;
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').
  content.querySelector('.setup-similar-item');

  userDialog.classList.remove('hidden');

  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };


  var successLoadHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(createWizard(window.util.getRandomElement(wizards)));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };


  var succesSaveHandler = function () {
    userDialog.classList.add('hidden');
  };


  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
    userDialog.classList.remove('hidden');
  };


  window.callbackFunction = {
    successLoadHandler: successLoadHandler,
    errorHandler: errorHandler,
    succesSaveHandler: succesSaveHandler
  };

})();
