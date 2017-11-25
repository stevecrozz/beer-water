'use strict';

let calculator = require('./src/calculator');
let additives = require('./src/additives');
let ions = require('./src/ions');

module.exports = {
  Additives: additives,
  Ions: ions,
  Calculator: calculator
};
