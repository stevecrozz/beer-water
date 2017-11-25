let solver = require('javascript-lp-solver/src/solver');
let additives = require('./additives');
let ions = require('./ions');

let problem = {
  //"optimize": "Price",
  //"opType": "min",
  constraints : {},
  variables: {}
};

for (additive in additives) {
  problem.variables[additive] = additives[additive].contents;
}

module.exports = (constraints) => {
  let p = Object.assign({}, problem);
  p.constraints = constraints;
  let solution = solver.Solve(p);
  let s = {
    feasible: solution.feasible,
    result: solution.result,
    bounded: solution.result,
    additives: {}
  };
  for (component in solution) {
    if (!additives[component]) { continue; }
    s.additives[component] = solution[component].toPrecision(3);
  }
  return s;
};
