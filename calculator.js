let ions = require('./ions');
let additives = require('./additives');
var GaussianElimination = require('na-gaussian-elimination');
var BigNumber = require('bignumber.js');

let calculator = (input) => {
  let gaussianElimination = new GaussianElimination();
  matrixInput = [];

  let additivePosition = 0;
  for (additive in additives.Contributions) {
    additives.Contributions[additive].forEach((ppm, index) => {
      matrixInput[index] = matrixInput[index] || [];
      matrixInput[index][additivePosition] = new BigNumber(ppm);
    });
    additivePosition++;
  }

  let result = [
    new BigNumber(115),
    new BigNumber(0),
    new BigNumber(0),
    new BigNumber(59),
    new BigNumber(201),
    new BigNumber(0),
    new BigNumber(0),
  ];

  //gaussianElimination.on('swapRows', function(ev) {
      //console.log('swap rows ' + ev.i + ' and ' + ev.j);
  //});
  gaussianElimination.on('error', function(error) {
      console.log('error: ' + error);
  });

  var system = gaussianElimination.solve(matrixInput, result);

  system.solution.forEach((amount, index) => {
    console.log(additives.Sequence[index] + ': ' + amount.round(3) + ' grams/Gallon');
  });
};

let input = [115, 0, 0, 59, 201, 0];
//input[ions.Calcium] = 115;
//input[ions.Magnesium] = 0;
//input[ions.Sodium] = 0;
//input[ions.Chloride] = 59;
//input[ions.Sulfate] = 201;
//input[ions.Carbonate] = 0;

calculator(input);
