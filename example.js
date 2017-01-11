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
var fib = [];

//set first two numbers in the fib array
fib[0] = 0;
fib[1] = 1;

//for loop that starts at the third index of the array
for (var i = 2; i <=10; i++) {
  fib[i] = fib[i-2] + fib[i-1];
  //console.log(fib[i]);
}

//fizzbuzz

for (var i = 1; i <= 100; i++ ) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
  }else if (i % 3 === 0) {
    console.log('fizz');
  }else if (i % 5 === 0) {
    console.log('buzz');
  }else{console.log(i)}
};
