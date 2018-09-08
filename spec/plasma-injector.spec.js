var chai = require('chai');
var expect = chai.expect;
var PlasmaInjector = require('../src/plasma-injector.js');

describe('PlasmaInjector', function() {
  
  it('should return proper initialized damage value', function() {
    expectedDamagePercentage = 20;
    var plasmaInjector = new PlasmaInjector(expectedDamagePercentage);
    expect(plasmaInjector.getDamagePercentage()).to.equal(expectedDamagePercentage);
  });

});