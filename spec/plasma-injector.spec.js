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

  it('should return infinite remaining working time in minutes when no extra plasma flow is applied', function() {
    const damagePercentage = 0;
    const plasmaInjector = new PlasmaInjector(damagePercentage);
    expect(plasmaInjector.getRemainingWorkingTimeInMinutes()).to.equal('infinite');
  });

  it('should return proper remaining travel working time in minutes when extra plasma flow is applied', function() {
    const damagePercentage = 0;
    const desiredExtraPlasmaFlow = 50;
    const expectedRemainingWorkingTimeInMinutes = 50;
    const plasmaInjector = new PlasmaInjector(damagePercentage);
    plasmaInjector.setDesiredPlasmaFlow(desiredExtraPlasmaFlow);
    expect(plasmaInjector.getRemainingWorkingTimeInMinutes()).to.equal(expectedRemainingWorkingTimeInMinutes);
  });

  it('should return proper remaining travel working time in minutes when extra plasma flow is applied and has some damage', function() {
    const damagePercentage = 20;
    const desiredExtraPlasmaFlow = 50;
    const expectedRemainingWorkingTimeInMinutes = 30;
    const plasmaInjector = new PlasmaInjector(damagePercentage);
    plasmaInjector.setDesiredPlasmaFlow(desiredExtraPlasmaFlow);
    expect(plasmaInjector.getRemainingWorkingTimeInMinutes()).to.equal(expectedRemainingWorkingTimeInMinutes);
  });

});