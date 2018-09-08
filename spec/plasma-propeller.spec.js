var chai = require('chai');
var expect = chai.expect;
var PlasmaPropeller = require('../src/plasma-propeller.js');

describe('PlasmaPropeller', function() {
  
  it('should return proper initialized damage value', function() {
    expectedDamagePercentage = 20;
    var plasmaPropeller = new PlasmaPropeller(expectedDamagePercentage);
    expect(plasmaPropeller.getDamagePercentage()).to.equal(expectedDamagePercentage);
  });

});