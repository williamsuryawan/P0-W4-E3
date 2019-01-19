function cariMedian(arr) {
  // you can only write your code here!
  var posisi = 0;
  var med = Number;
  // console.log(arr.length)
  if (arr.length%2===1){
    posisi = Math.floor(arr.length/2)
    med = arr[posisi]
  } else {
    med = (arr[arr.length/2-1] + arr[arr.length/2])/2
  }
  return med;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5