beer-water is a JavaScript package that helps you figure out how much of each
additive to add to your water to achieve the desired water profile.

Example:
~~~JavaScript
let solution = require('beer-water').Calculate({
  Calcium: 115,
  Chloride: 59,
  Sulfate: 201
}, {
  tolerance: 0
});

// The "solution" (if feasible) is given in grams of additive per gallon of
// distilled water. The actual water profile also provided and broken down by
// ion.
//
// solution = { feasible: true,
//   result: 0,
//   bounded: 0,
//   additives:
//    { 'Sodium Chloride': 0.0255,
//      'Calcium Chloride': 0.432,
//      'Calcium Sulfate': 1.36 },
//   contents: { Sodium: 2.65, Chloride: 59, Calcium: 115, Sulfate: 200 } }
~~~

If there is no feasible solution, you may increase the tolerance parameter
which allows the program to find solutions that deviate from your target
profile by the given percentage. For example, a tolerance of 0.05 allows the
target profile of each value in ppm to deviate by up to 5%.
