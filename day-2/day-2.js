// 26 characters long

var input = $("#input").text();
input = input.trim().split(/\n/);

// part 1
var count3 = 0;
var count2 = 0;

for (var i in input) {
  var letterCount = {};
  var has3 = false;
  var has2 = false;

  for (var j in input[i]) {
    var char = input[i][j];
    if (letterCount[char]) {
      letterCount[char] += 1;
    } else {
      letterCount[char] = 1;
    }
  }

  for (var k in letterCount) {
    if (letterCount[k] == 2) {
      has2 = true;
    }

    if (letterCount[k] == 3) {
      has3 = true;
    }
  }

  if (has2) {
    count2++;
  }

  if (has3) {
    count3++;
  }
}

console.log("number with 3: " + count3);
console.log("number with 2: " + count2);
console.log("checksum is: " + (count2 * count3));

// part 2

