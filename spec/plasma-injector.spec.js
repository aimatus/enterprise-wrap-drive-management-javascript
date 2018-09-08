const chai = require('chai');
const expect = chai.expect;
const PlasmaInjector = require('../src/plasma-injector.js');

describe('PlasmaInjector', function() {
  
  it('should return proper initialized damage value', function() {
    expectedDamagePercentage = 20;
    const plasmaInjector = new PlasmaInjector(expectedDamagePercentage);
    expect(plasmaInjector.getDamagePercentage()).to.equal(expectedDamagePercentage);
  });

  it('should return proper max undefined working capacity', function() {
    damagePercentage = 20;
    expectedMaxUndefinedWorkingCapacity = 80;
    const plasmaInjector = new PlasmaInjector(damagePercentage);
    expect(plasmaInjector.getMaxUndefinedWorkingCapacity()).to.equal(expectedMaxUndefinedWorkingCapacity);
  });

});