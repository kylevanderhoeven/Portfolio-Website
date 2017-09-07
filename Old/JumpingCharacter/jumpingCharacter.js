
var canvas;
var context;
var images = {};
var totalResources = 9;
var numResourcesLoaded = 0;
var fps = 30;
var charX = 245;
var charY = 185;
var breathInc = 0.1;
var breathDir = 1;
var breathAmt = 0;
var breathMax = 2;
var breathInterval = setInterval(updateBreath, 1000 / fps);
var maxEyeHeight = 14;
var curEyeHeight = maxEyeHeight;
var eyeOpenTime = 0;
var timeBtwBlinks = 4000;
var blinkUpdateTime = 200;
var blinkTimer = setInterval(updateBlink, blinkUpdateTime);
var fpsInterval = setInterval(updateFPS, 1000);
var numFramesDrawn = 0;
var curFPS = 0;
var jumping = false;


function updateFPS() {

	curFPS = numFramesDrawn;
	numFramesDrawn = 0;
}
function prepareCanvas(canvasDiv, canvasWidth, canvasHeight)
{
	// Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
	canvas = document.createElement('canvas');
	canvas.setAttribute('width', canvasWidth);
	canvas.setAttribute('height', canvasHeight);
	canvas.setAttribute('id', 'canvas');
	canvasDiv.appendChild(canvas);

	if(typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}
	context = canvas.getContext("2d"); // Grab the 2d canvas context
	// Note: The above code is a workaround for IE 8and lower. Otherwise we could have used:
	//     context = document.getElementById('canvas').getContext("2d");

	canvas.width = canvas.width; // clears the canvas
	context.fillText("loading...", 40, 140);

	loadImage("leftArm");
	loadImage("leftLeg");
	loadImage("body");
	loadImage("rightArm");
	loadImage("rightLeg");
	loadImage("head");
	loadImage("smile");
	loadImage("openMouth");
	loadImage("hat");
	loadImage("leftArm-jump");
	loadImage("leftLeg-jump");
	loadImage("rightArm-jump");
	loadImage("rightLeg-jump");
}

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() {
	  resourceLoaded();
  }
  images[name].src = "images/" + name + ".png";
}

function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {

	setInterval(redraw, 1000 / fps);
  }
}

function redraw() {

  var x = charX;
  var y = charY;
  var jumpHeight = 45;

  canvas.width = canvas.width; // clears the canvas

  // Draw shadow
  if (jumping) {
	drawEllipse(x + 60, y + 165, 100 - breathAmt, 4);
  } else {

  }

  if (jumping) {
	y -= jumpHeight;
  }

  if (jumping) {
	context.drawImage(images["leftArm-jump"], x + 50, y - 120 - breathAmt);
  } else {
	context.drawImage(images["leftArm"], x + 60, y - 42 - breathAmt);
  }

	if (jumping) {
	context.drawImage(images["rightLeg-jump"], x + 40, y + 35);
  } else {
	context.drawImage(images["rightLeg"], x + 50, y + 45);
  }

	context.drawImage(images["body"], x, y - 50);

	if (jumping) {
	context.drawImage(images["leftLeg-jump"], x, y + 45);
  } else {
	context.drawImage(images["leftLeg"], x + 25, y + 55);
  }

  context.drawImage(images["head"], x - 5, y - 135 - breathAmt);

	if (jumping) {
		context.drawImage(images["openMouth"], x + 70, y - 55 - breathAmt);
	} else {
		context.drawImage(images["smile"], x + 42, y - 100 - breathAmt);
	}


  context.drawImage(images["hat"], x + 30, y - 140 - breathAmt);

  if (jumping) {
	context.drawImage(images["rightArm-jump"], x - 30, y - 110 - breathAmt);
  } else {
	context.drawImage(images["rightArm"], x - 10, y - 10 - breathAmt);
  }

  drawEllipse(x + 77, y - 68 - breathAmt, 8, curEyeHeight); // Left Eye
  drawEllipse(x + 100, y - 68 - breathAmt, 8, curEyeHeight); // Right Eye
}

function drawEllipse(centerX, centerY, width, height) {

  context.beginPath();

  context.moveTo(centerX, centerY - height/2);

  context.bezierCurveTo(
	centerX + width/2, centerY - height/2,
	centerX + width/2, centerY + height/2,
	centerX, centerY + height/2);

  context.bezierCurveTo(
	centerX - width/2, centerY + height/2,
	centerX - width/2, centerY - height/2,
	centerX, centerY - height/2);

  context.fillStyle = "black";
  context.fill();
  context.closePath();
}

function updateBreath() {

  if (breathDir === 1) {  // breath in
	breathAmt -= breathInc;
	if (breathAmt < -breathMax) {
	  breathDir = -1;
	}
  } else {  // breath out
	breathAmt += breathInc;
	if(breathAmt > breathMax) {
	  breathDir = 1;
	}
  }
}

function updateBlink() {

  eyeOpenTime += blinkUpdateTime;

  if(eyeOpenTime >= timeBtwBlinks){
	blink();
  }
}

function blink() {

  curEyeHeight -= 1;
  if (curEyeHeight <= 0) {
	eyeOpenTime = 0;
	curEyeHeight = maxEyeHeight;
  } else {
	setTimeout(blink, 10);
  }
}

function jump() {

  if (!jumping) {
	jumping = true;
	setTimeout(land, 500);
  }

}
function land() {

  jumping = false;

}
