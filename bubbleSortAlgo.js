//The following code implements an (in-place) bubble sort algorithm in JavaScript:

function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    //SELECTION SORT FUNCTION

} function Selection_Sort(arr, compare_Function) {

    function compare(a, b) {
        return a - b;
    }
    var min = 0;
    var index = 0;
    var temp = 0;

    //{Function} compare_Function Compare function
    compare_Function = compare_Function || compare;

    for (var i = 0; i < arr.length; i += 1) {
        index = i;
        min = arr[i];

        for (var j = i + 1; j < arr.length; j += 1) {
            if (compare_Function(min, arr[j]) > 0) {
                min = arr[j];
                index = j;
            }
        }

        temp = arr[i];
        arr[i] = min;
        arr[index] = temp;
    }

    //return sorted arr
    return arr;
}

//INSERT SORT FUNCTION

function insertionSort(array) {
    var length = array.length;

    for (var i = 1, j; i < length; i++) {
        var temp = array[i];
        for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }

    return array;
}

//FUNCTION MERGE SORT 

function mergeSort (arr) {
    if (arr.length < 2) {
      return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var subLeft = mergeSort(arr.slice(0, mid));
    var subRight = mergeSort(arr.slice(mid));

    return merge(subLeft, subRight);
}

function merge (node1, node2) {
    var result = [];
    while (node1.length > 0 && node2.length > 0)
        result.push(node1[0] < node2[0]? node1.shift() : node2.shift());
    return result.concat(node1.length? node1 : node2);
}

function getRandomInt(max) { //following function will generate a single integer between 0 and max
    return Math.floor(Math.random() * Math.floor(max));
}

// var ary = [34, 203, 3, 746, 200, 984, 198, 764, 9, 1000 ]; 
// var ary2 = [11, 30, 40, 28, 58, 10, 63, 92, 88, 12];
var ary3 = []

for (var i = 0; i <= 100; i++) { // replace the hard-coded array with a loop that generates an array of 1000 random integers.
    ary3.push(getRandomInt(1000))
}

// bubbleSort(ary);
// console.log(ary);
// bubbleSort(ary2);
// console.log(ary2);
// bubbleSort(ary3);
// Selection_Sort(ary3)
// insertionSort(ary3)
mergeSort(ary3)
console.log(ary3);