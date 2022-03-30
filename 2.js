var arr = [2, 3, 5, 10, 2, -9, 3];

alert("Max value is " + arrayMaxMin(arr, "Max"));
alert("Min value is " + arrayMaxMin(arr, "Min"));

function arrayMaxMin(array, selector) {

  var val = array[0];   // variable to hold the current max/min value.

  for (var i = 1; i < array.length; i++) {
    if (selector == "Min") {
      if (array[i] < val) {
        val = array[i];
      }
    } else if (selector == "Max") {
      if (array[i] > val) {
        val = array[i];
      }
    }

  }
  return val;
}