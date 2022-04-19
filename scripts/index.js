function sort() {
  var value = document.getElementById("arr").value;
  var split = value.split(",").map(n => Number.parseInt(n));
  bubbleSort(split);
  document.getElementById("valueInput").innerHTML = split;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
}
