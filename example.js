var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
//fib[2] = 1
//fib[3] = 2
//fib[4] = 3
//fib[5] = 5
for(i=2; i<=5; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    // console.log(fib[i]);

}

// function Family(name, age) {
//   this.name = name;
//   this.age = age;
// }
//
// var member = new Family('Lily', 21)
// console.log(member.name, member.age);

// var lily = { number: 1 };
// var paul = { numbers: 2 };

//
//
// var obj = Object.assign(lily, paul);
// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(lily);  // { a: 1, b: 2, c: 3 }, target object itself is changed.

// var arr = [{lily: 5}, {paul: 9}];
//
// arr.shift();
//
// console.log(arr)

//fibonacci is the sum of the previous and the one before the previous

//initialize fib array
// var fib = [];
//
// //set first two numbers in the fib array
// fib[0] = 0;
// fib[1] = 1;
//
// //for loop that starts at the third index of the array
// for (var i = 2; i <=10; i++) {
//   fib[i] = fib[i-2] + fib[i-1];
//   //console.log(fib[i]);
// }
//
// //fizzbuzz
//
// // for (var i = 1; i <= 100; i++ ) {
// //   if (i % 3 === 0 && i % 5 === 0) {
// //     console.log('fizzbuzz');
// //   }else if (i % 3 === 0) {
// //     console.log('fizz');
// //   }else if (i % 5 === 0) {
// //     console.log('buzz');
// //   }else{console.log(i)}
// // };
//
// // Implement a function that takes in an integer and prints out
// // its two's complement value by following the algorithm described above.
// // Hint: to invert the bits of a number you can use the "~" operator.
// // For example ~25 will invert the bits of the integer 25
// //00000000 00000000 00000010 00000010 -> Binary format of 514
// //11111111 11111111 11111101 11111101 -> One's complement of 514
// //11111111 11111111 11111101 11111110 -> Two's complement of 514 (i.e. -514)
// var int = 514.0
//
// function binary(dec) {
//   if(dec >= 0) {
//         return (-dec >>> 0).toString(2);
//     }
//     else {
//         return (dec >>> 0).toString(2);
//     }
// }
//
// //console.log(binary(int))
//
// //checking if integer is even or odd using bit-wise AND operator
//
// // For 9:
// //
// //       9 ->        1 0 0 1
// //       1 ->     &  0 0 0 1
// //       -------------------
// //       result->    0 0 0 1
// //comparing the right most digits if both are 1 it's odd
//
// function evenOdd(number) {
//   if(number & 1) {
//     console.log('odd');
//   } else { console.log('even')}
// }
// //evenOdd(1)
// //at CPU level, integer modulus and divisions are slowest operations, also modern
// //compilers implement % operations using bitwise
//
//
// function andOr(int1, int2) {
//
//   var x = int1 & int2
//   console.log('x is', x)
//
//   var y = int1 | int2
//   console.log('y is', y)
// }
//
// //andOr(5,1)
// //result is x=1 and y=5
// //AND 0101
// //    0001
// //    0001 this represents number 1 therefor x = 1
//
// //OR 0101
// //   0001
// //   0101 this represents number 5 so y = 5
//
// function andOrXor (int1, int2) {
//
//   var x = int1 & int2
//   console.log('x is', x)
//
//   var y = int1 | int2
//   console.log('y is', y)
//
//   var z = int1 ^ int2
//   console.log('z is', z)
//
// }
//
// //andOrXor(5,1)
//
// //console.log((5).toString(2)) //this converts a number base 10 to binary base 2
//
// //XOR 0101
// //    0001
// //    0100 this represents number 4 so z = 4
//
// function not(int1) {
//   var x = ~int1
//   //console.log(x)
// }
//
// //not(514) //result is -515
// //not(-514) //result is 513
//
// //when number is positive inverted number is -number +1
// //when number is negative inverted number is +number -1
//
// var bit = 1 << 2;
// console.log(bit)

function thirdBit(n, k) {
  var mask =  1 << k;
  var masked_n = n & mask;k
  var thebit = masked_n >> k;
  return thebit
}
var bit = thirdBit(5, 2)

function bitSet(num, bit) {
  var mask = 1 << bit
  num |= mask
  return num
}
console.log('set', bitSet(8));
//console.log(value) //result is 4

function toggle(num, bit) {
  return num ^ (1 << bit)
}
var value = toggle(8,2);
console.log('toggle', value); //result is 1

function clear(num, bit) {
  return num &= ~(1 << bit)
}
var value = clear(3,2);

console.log('clear', value); //result is 1

//checking if third bit is set
function isSet(num, bit) {
  if ((num & 1 << bit) != 0) {
    console.log("set");
  } else {
    console.log("Not set");
  }
  // return ((num >> bit) % 2 != 0)
}
var value = isSet(4,1)
//console.log(value);


//shift operators

//left shift, we shift x in binary y bit positions to the left
function leftShift(x,y) {
  var shifted = x << y;

  console.log(shifted);
}

//leftShift(13,3)
//we could verify the above is correct by using x * (Math.pow(2, y))
//console.log(18 * (Math.pow(2,4)))

//right shift, we shift x in binary y positions to the right
//difference is if the leftmost bit is 0, we shift in 0, if it's 1 we shift by ones
function rightShift(x,y) {
  var shifted = x >> y;

  console.log(shifted);
}

//rightShift(13,3);

//zero-fill right shift operators
function zeroFill(x,y) {
  var shifted = x >>> y;

  console.log(shifted);
}

//zeroFill(13,3);
//for positive numbers the right shift and zero-fill right shift won't differ
//because in zero-fill number will always be positive

//function for doubling an integer
function doubleInt(x) {
  var double = x << 1;
  console.log(double);
}
//doubleInt(32)

//quadruple an integer
function quadInt(x) {
  var quad = x << 2
  console.log(quad);
}
//quadInt(4)

//function for dividing by 2, rounding down
function half(x) {
  var halved = x >> 1;
  console.log(halved);
}
//half(-15)
//if you right shift to divide by two, you always round down, negative numbers round up

//function to calculate 2^n
function power(n) {
  var x = Math.pow(2,n);
  console.log(x);
}
//power(2)

//calculate Morton number from two 8 bit integers
function mortonNumber(x,y) {

}

// Time complexity (O notation) know the different types and be able to provide an
// example of each

// Explain at least 3 differences between a linked list and an array
// Explain the difference between a Binary Tree and a Binary Search Tree
// Explain these types of tree traversal: in-order,pre-order, post-order


// Imagine you have an array of numbers. Write an algorithm to remove all
// numbers less than five from the array.

var nums = [5,9,2,3, 1, 3, 8, 2, 3]

// console.time('reduce')
// var newArr = nums.reduce(function(arr, num){
//   if(num >= 5) arr.push(num)
//   return arr
// }, [])
// console.timeEnd('reduce')
// console.time('while')
// var i = 0;
// var newArr = []
// while(nums[i]){
//
//   if(nums[i] >= 5) {
//     newArr.push(nums[i])
//   }
//   i++;
// }
// console.timeEnd('while')

// console.time('forloop')
// var newArr2 = []
// for (var i = 0; i < nums.length; i++) {
//   if(nums[i] >= 5) {
//     newArr2.push(nums[i])
//   }
// }
// console.timeEnd('forloop')
//
// console.log("ARR", newArr)
// console.log("ARR", newArr2)

// var arr1 = [1,3,6,8,11];
// var arr2 = [2,3,5,8,9,10];
//
// var newArr = arr1.concat(arr2)
// console.log('sorted', newArr);
//
// newArr.sort(function(a, b) {
//   return a - b;
// });
//console.log('sorted', newArr)

var arr = [1,3,9,4];
var arr1 = [];

var newArr = arr.map(function(num, index) {
  if (num != arr[index]) {
    arr.reduce
    arr1.push(num)
  }
  arr1.
})
