'use strict';

let BeerWater = require('../index');
let assert = require('chai').assert;
let fs = require('fs');
let testCases = fs.readdirSync('./test/cases');

describe('#Calculate', () => {
  testCases.forEach(file => {
    it('generates the correct output for ' + file, () => {
      var testCase = JSON.parse(fs.readFileSync('./test/cases/' + file, 'utf8'));
      let output = BeerWater.Calculate(testCase.input);
      assert.deepEqual(output, testCase.output);
    });
  });
});
