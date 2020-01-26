'use strict';


var CLOUD_WIDTH = 420;
var CLOUD_BAR = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP_BOTTOM = 260;
var TEXT_GAP_X = 110;
var TEXT_GAP_LEFT = 30;
var BAR_GAP = 50;
var TEXT_GAP_TOP = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP_TOP = 100;
var GAB_LEFT = CLOUD_X + BAR_GAP;
var SPACE_BAR = BAR_GAP + BAR_WIDTH;


var renderText = function (ctx, text, x, y) {
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText(text, x, y);
};


var renderRectangle = function (ctx, x, y, color, wight, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, wight, height);
};


var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


var getRandomInt = function (int) {
  return Math.floor(Math.random() * int);
};


var defineNames = function (name) {
  return (name === 'Вы') ? '#f00' : 'hsl(240, ' + getRandomInt(101) + '%' + ', 50%)';
};


var renderBars = function (ctx, players, times) {
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    var heightBar = (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime);
    var xCoordinate = GAB_LEFT + SPACE_BAR * i;
    var heightBars = BAR_HEIGHT - heightBar;
    var yCoordinate = BAR_GAP_TOP + heightBar;
    renderText(ctx, players[i], xCoordinate, TEXT_GAP_BOTTOM);
    renderText(ctx, Math.floor(times[i]), xCoordinate, BAR_GAP_TOP - TEXT_GAP_TOP + heightBar);
    renderRectangle(ctx, xCoordinate, yCoordinate, defineNames(players[i]), BAR_WIDTH, heightBars);
  }
};


window.renderStatistics = function (ctx, players, times) {
  renderRectangle(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)', CLOUD_WIDTH, CLOUD_BAR);
  renderRectangle(ctx, CLOUD_X, CLOUD_Y, '#fff', CLOUD_WIDTH, CLOUD_BAR);
  renderText(ctx, 'Ура вы победили!', TEXT_GAP_X, TEXT_GAP_LEFT);
  renderText(ctx, 'Список результатов:', TEXT_GAP_X, BAR_GAP);
  renderBars(ctx, players, times, '#000');
};
