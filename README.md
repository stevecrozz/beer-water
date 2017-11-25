beer-water is a JavaScript package that helps you figure out how much of each
additive to add to your water to achieve the desired water profile.

Example:
~~~JavaScript
let solution = require('beer-water').Calculate({
  "Calcium": { "equal": 115 },
  "Chloride": { "equal": 59 },
  "Sulfate": { "equal": 201 }
});

// The "solution" (if feasible) is given in grams of additive per gallon of
// distilled water.
//
// solution = {
//   "feasible": true,
//   "result": 0,
//   "bounded": 0,
//   "additives": {
//     "Magnesium Sulfate": "0.0979",
//     "Calcium Chloride": "0.465",
//     "Calcium Sulfate": "1.27"
//   }
// }
~~~
