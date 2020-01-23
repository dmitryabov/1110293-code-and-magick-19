'use strict';


var CLOUD_WIDTH = 420;
var CLOUD_BAR = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP_BOTTOM = 260;
var TEXT_GAP_TOP = 120;
var TEXT_GAP_LEFT = 30;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP_TOP = 100;


var textStatistic = function (ctx) {
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Ура вы победили!', TEXT_GAP_TOP, TEXT_GAP_LEFT);
  ctx.fillText('Список результатов:', TEXT_GAP_TOP, BAR_GAP);
};


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_BAR);
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
  var randomInt = Math.floor(Math.random() * int) + 1;
  return randomInt;
};


var paitingGap = function (arr, ctx, i) {
  if (arr[i] === 'Вы') {
    ctx.fillStyle = 'red';
  } else {
    ctx.fillStyle = 'hsl(240, ' + getRandomInt(100) + '%' + ', 50%)';
  }
};


var renderBar = function (ctx, players, times, color) {
  ctx.textBaseline = 'hanging';
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = color;
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, TEXT_GAP_BOTTOM);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_GAP_TOP - 20 + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime));
    paitingGap(players, ctx, i);
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_GAP_TOP + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, BAR_HEIGHT - (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime));
  }
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  textStatistic(ctx);
  renderBar(ctx, players, times, '#000');
};
