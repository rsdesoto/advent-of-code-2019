// #123 @ 3,2: 5x4
// 3 from left
// 2 from top
// 5 wide
// 4 tall

var input = $("#full").text();
input = input.trim().split(/\n/);

var findValues = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/;

var rectangles = [];
var canvas = $("canvas.fabric")[0];
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext("2d");

for (var i=0; i < input.length; i++) {
  var match = findValues.exec(input[i]);

  var rectangle = {
    name: parseInt(match[1]),
    left: parseInt(match[2]),
    top: parseInt(match[3]),
    width: parseInt(match[4]),
    height: parseInt(match[5])
  };

  rectangles.push(rectangle);
  drawRectangle(rectangle);
}

function drawRectangle(r){
  ctx.beginPath();
  ctx.rect(r.left, r.top, r.width, r.height);
  ctx.fillStyle = "rgba(100,256,100,.5)";
  ctx.fill();

  ctx.font = "12px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(r.name, r.left, (r.top + 10));
}

function pointIsInRect(x, y, rect){
  if ((x >= rect.left) && (x < (rect.left + rect.width)) && (y >= rect.top) && (y < (rect.top + rect.height))) {
    return true;
  }
}

var points = [];

for (var x=0; x < canvasWidth; x++) {
  for (var y=0; y < canvasHeight; y++) {
    var numRects = 0;

    for (var r=0; r < rectangles.length; r++) {
      if (pointIsInRect(x, y, rectangles[r])) {
        numRects++;
      }

      if (numRects >= 2) {
        continue;
      }
    }

    if (numRects >= 2) {
      points.push([x, y]);
    }
  }
}

console.log(points.length);