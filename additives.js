let ions = require('./ions');

let additives = {};

let createAdditive = (props) => {
  additives[props.name] = {
    name: props.name,
    friendlyName: props.friendlyName,
    contents: {}
  };
  props.contents.forEach((content) => {
    additives[props.name].contents[content[0]] = content[1];
  });
};

createAdditive({
  name: 'Calcium Chloride',
  contents: [
    [ ions.Calcium, 72 ],
    [ ions.Chloride, 127 ],
  ]
});

createAdditive({
  name: 'Calcium Carbonate',
  friendlyName: 'Chalk',
  contents: [
    [ ions.Calcium, 106 ],
    [ ions.Carbonate, 159 ],
  ]
});

createAdditive({
  name: 'Calcium Sulfate',
  friendlyName: 'Gypsum',
  contents: [
    [ ions.Calcium, 61.5 ],
    [ ions.Sulfate, 147.4 ],
  ]
});

createAdditive({
  name: 'Sodium Chloride',
  friendlyName: 'Table Salt',
  contents: [
    [ ions.Calcium, 104 ],
    [ ions.Sulfate, 160.25 ],
  ]
});

createAdditive({
  name: 'Magnesium Sulfate',
  friendlyName: 'Epsom Salt',
  contents: [
    [ ions.Calcium, 37 ],
    [ ions.Sulfate, 145.3 ],
  ]
});

createAdditive({
  name: 'Sodium Bicarbonate',
  friendlyName: 'Baking Soda',
  contents: [
    [ ions.Calcium, 75 ],
    [ ions.Carbonate, 95 ],
  ]
});

createAdditive({
  name: 'Calcium Hydroxide',
  friendlyName: 'Hydrated Lime',
  contents: [
    [ ions.Calcium, 264.2 ]
  ]
});

module.exports = additives;
