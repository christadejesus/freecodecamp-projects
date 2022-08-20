
function testResult(form) {
  let sequence = form.testSequence.value; //original genetic sequence
  let sequenceArr = sequence.toUpperCase().split("");
  let resultArr = [];
  let regex = /[0]/;

  //build the reverse compliment DNA sequence for comparison
  for(let i = 0; i < sequenceArr.length; i++) {
    if (sequenceArr[i] == "A") {
      resultArr.push("T");
    } else if (sequenceArr[i] == "C") {
      resultArr.push("G");
    } else if (sequenceArr[i] == "G") {
      resultArr.push("C");
    } else if (sequenceArr[i] == "T") {
      resultArr.push("A");
    } else {
      resultArr.push("0"); //"0" replaces any spaces and characters other than A,C,G,T
    }
  }

    if (regex.test(resultArr) === true) { //will identify any results with "0" and return an error msg
    document.getElementById("result").innerText = "Oops! Please enter a valid DNA sequence.";
    form.testSequence.value = "";
  } else if (sequence.toUpperCase() === resultArr.reverse().join("")) {
    document.getElementById("result").innerText = `"${sequence}" is a palindromic sequence.`;
    form.testSequence.value = "";    
  } else {
    document.getElementById("result").innerText = `"${sequence}" is NOT a palindromic sequence.`;
    form.testSequence.value = "";
  }
} 