let additives = {
  Contributions: {
    CalciumChloride: [    72,  0,    0,    127,     0,     0 ],
    Chalk:           [   106,  0,    0,      0,     0,   159 ],
    Gypsum:          [  61.5,  0,    0,      0, 147.4,     0 ],
    TableSalt:       [     0,  0,  104, 160.25,     0,     0 ],
    EpsomSalt:       [     0, 37,    0,      0, 145.3,     0 ],
    BakingSoda:      [     0,  0,    0,     75,     0,    95 ],
    HydratedLimet:   [ 264.2,  0,    0,      0,     0,     0 ],
    last:   [],
  },
  Sequence: []
};

for (additive in additives.Contributions) {
  additives.Sequence.push(additive);
}

module.exports = additives;
