// 26 characters long

var input = $("#input").text();
input = input.trim().split(/\n/);

// part 1
  // var count3 = 0;
  // var count2 = 0;

  // for (var i in input) {
  //   var letterCount = {};
  //   var has3 = false;
  //   var has2 = false;

  //   for (var j in input[i]) {
  //     var char = input[i][j];
  //     if (letterCount[char]) {
  //       letterCount[char] += 1;
  //     } else {
  //       letterCount[char] = 1;
  //     }
  //   }

  //   for (var k in letterCount) {
  //     if (letterCount[k] == 2) {
  //       has2 = true;
  //     }

  //     if (letterCount[k] == 3) {
  //       has3 = true;
  //     }
  //   }

  //   if (has2) {
  //     count2++;
  //   }

  //   if (has3) {
  //     count3++;
  //   }
  // }

  // console.log("number with 3: " + count3);
  // console.log("number with 2: " + count2);
  // console.log("checksum is: " + (count2 * count3));

// part 2

function part2() {
  for (var i=0; i < (input.length - 1); i++) {
  
    for (var j=(i + 1); j < (input.length - 1); j++) {
      var numDifferences = 0;
  
      for (var c = 0; c < (input[i].length - 1); c++) {
        if (input[i][c] != input[j][c]) {
  
          numDifferences++;
        }
      }
  
      if (numDifferences == 1) {
        console.log("i found two that are the same!")
        console.log(input[i]);
        console.log(input[j]);
        return;
      } else if (numDifferences > 1) {
        continue;
      }
    }
  }

}

part2();
