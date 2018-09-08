const chai = require('chai');
const expect = chai.expect;
const PlasmaInjector = require('../src/plasma-injector.js');

describe('PlasmaInjector', function() {
  
  it('should return proper initialized damage value', function() {
    const expectedDamagePercentage = 20;
    const plasmaInjector = new PlasmaInjector(expectedDamagePercentage);
    expect(plasmaInjector.getDamagePercentage()).to.equal(expectedDamagePercentage);
  });

  it('should return proper max undefined plasma flow', function() {
    const damagePercentage = 20;
    const expectedMaxUndefinedPlasmaFlow = 80;
    const plasmaInjector = new PlasmaInjector(damagePercentage);
    expect(plasmaInjector.getMaxUndefinedPlasmaFlow()).to.equal(expectedMaxUndefinedPlasmaFlow);
  });

});