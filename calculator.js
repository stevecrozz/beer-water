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

problem.constraints = {};
problem.constraints[ions.Calcium] = { equal: 115 };
problem.constraints[ions.Chloride] = { equal: 59 };
problem.constraints[ions.Sulfate] = { equal: 201 };

let results = solver.Solve(problem);

if (results.feasible) {
  for (additive in additives) {
    if (!results[additive]) { continue; }

    let name = additive;
    if (additives[additive].friendlyName) {
      name = additives[additive].friendlyName + ' (' + additive + ')';
    }

    console.log(results[additive].toPrecision(3) + 'g of ' + name);
  }
} else {
  console.log("Can't be done");
}
