let solver = require('javascript-lp-solver/src/solver');
let additives = require('./additives');
let ions = require('./ions');

module.exports = (constraints, opts) => {
  opts = opts || {};

  let tolerance = 0.05;
  let precision = 3;

  if (typeof opts.tolerance !== 'undefined') {
    tolerance = opts.tolerance;
  }

  if (typeof opts.precision !== 'undefined') {
    precision = opts.precision;
  }

  let p = {
    "optimize": "sodium",
    "opType": "min",
    constraints : {},
    variables: {}
  };

  for (additive in additives) {
    p.variables[additive] = additives[additive].contents;
  }

  for (constraint in constraints) {
    if (!constraints[constraint]) { continue; }
    let dev = tolerance * constraints[constraint];
    p.constraints[constraint] = {
      min: constraints[constraint] - dev,
      max: constraints[constraint] + dev
    };
  }

  let solution = solver.Solve(p);
  let s = {
    feasible: solution.feasible,
    result: solution.result,
    bounded: solution.result,
    additives: {},
    contents: {}
  };
  for (component in solution) {
    if (!additives[component]) { continue; }
    s.additives[component] = parseFloat(solution[component].toPrecision(precision));
    for (ion in additives[component].contents) {
      let additional = additives[component].contents[ion] * s.additives[component];
      s.contents[ion] = s.contents[ion] || 0;
      let newValue = s.contents[ion] + additional;
      s.contents[ion] = parseFloat(newValue.toPrecision(precision));
    }
  }
  return s;
};
