var input = $("#input").text();
input = input.trim().split(/\t|\n/).map(x => parseInt(x));

console.log(input);


// part 1

// var sum = input.reduce(add, 0);

// function add(a, b) {
//   return a + b;
// }

// console.log(sum);

// end of part 1

// part 2

var frequencyResults = new Set([0]);
var currentFrequency = 0;
var frequencyChanges = input;


var length = frequencyChanges.length;

var firstLoop = true;

for (var i = 0; ; i = ((i + 1) % length)) {
  currentFrequency += frequencyChanges[i];

  // console.log("current frequency is: " + currentFrequency);

  if (i == (length - 1)) {
    firstLoop = false;
    console.log("we're not in the first loop!");
  }

  if (frequencyResults.has(currentFrequency)) {
    console.log("duplicate is: " + currentFrequency)
    break;
  } else {
    if (firstLoop) {
      frequencyResults.add(currentFrequency)
    }
  }
}

///////

// var foundDuplicate = false;
// var arrayCounter = 0;

// while (foundDuplicate == false) {
//   currentFrequency = frequencyChanges[arrayCounter] + currentFrequency;

//   console.log("current freq is: " + currentFrequency);

//   if (frequencyResults.has(currentFrequency)) {
//     console.log("Duplicate is: " + currentFrequency);
//     foundDuplicate = true;
//   } else {    
//     if (arrayCounter == (frequencyChanges.length - 1)) {
//       arrayCounter = 0;
//       console.log("counter is: " + arrayCounter);
//     } else {
//       arrayCounter = arrayCounter + 1;
//       console.log("counter is: " + arrayCounter);
//     }

//     frequencyResults.add(currentFrequency);
//   }
// }

// while (foundDuplicate == false) {
//   findDup();
// }

