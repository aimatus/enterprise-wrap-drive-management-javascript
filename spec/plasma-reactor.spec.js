const chai = require('chai');
const expect = chai.expect;
const PlasmaReactor = require('../src/plasma-reactor.js');
const PlasmaInjector = require('../src/plasma-injector.js');

describe('PlasmaReactor', function() {
  
    it('should receive an array as constructor parameter', function() {
        const plasmaInjectors = [];
        new PlasmaReactor(plasmaInjectors);
    });

    it('should throw an exception when an array is not provided as constructor parameter', function() {
        const plasmaInjectors = 'not an array';
        const plasmaReactorConstructor = () => { new PlasmaReactor(plasmaInjectors) }
        expect(plasmaReactorConstructor).to.throw('PlasmaReactor object should receive an array as constructor parameter');
    });

    it('should return an array', function() {
        const plasmaInjectors = [];
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const plasmaInjectorsFlow = plasmaReactor.calculateInjectorsPlasmaFlow();
        expect(plasmaInjectorsFlow).to.be.an('array');
    });

    it('should return plasma flow array for injectors and remaining time for case #1', function() {
        const lightSpeedPercentage = 100;
        const plasmaInjectors = getPlasmaInjectors(0, 0, 0);
        const expectedPlasmaInjectorsFlow = [ 100, 100, 100 ]
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const plasmaInjectorFlows = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(plasmaInjectorFlows).to.deep.equal(expectedPlasmaInjectorsFlow);
        expect(plasmaReactor.getRemainingTravelTime(plasmaInjectorFlows)).to.deep.equal('Infinite');
    });

    it('should return plasma flow array for injectors and remaining time for case #2', function() {
        const lightSpeedPercentage = 90;
        const plasmaInjectors = getPlasmaInjectors(0, 0, 0);
        const expectedPlasmaInjectorsFlow = [ 90, 90, 90 ]
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const plasmaInjectorFlows = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(plasmaInjectorFlows).to.deep.equal(expectedPlasmaInjectorsFlow);
        expect(plasmaReactor.getRemainingTravelTime(plasmaInjectorFlows)).to.deep.equal('Infinite');
    });

    it('should return plasma flow array for injectors and remaining time for case #3', function() {
        const lightSpeedPercentage = 30;
        const plasmaInjectors = getPlasmaInjectors(0, 0, 0);
        const expectedPlasmaInjectorsFlow = [ 30, 30, 30 ]
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const plasmaInjectorFlows = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(plasmaInjectorFlows).to.deep.equal(expectedPlasmaInjectorsFlow);
        expect(plasmaReactor.getRemainingTravelTime(plasmaInjectorFlows)).to.deep.equal('Infinite');
    });

    it('should return plasma flow array for injectors and remaining time for case #4', function() {
        const lightSpeedPercentage = 100;
        const plasmaInjectors = getPlasmaInjectors(20, 10, 0);
        const expectedPlasmaInjectorsFlow = [ 90, 100, 110 ]
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const plasmaInjectorFlows = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(plasmaInjectorFlows).to.deep.equal(expectedPlasmaInjectorsFlow);
        expect(plasmaReactor.getRemainingTravelTime(plasmaInjectorFlows)).to.deep.equal('90 minutes');
    });

    it('should return plasma flow array for injectors and remaining time for case #5', function() {
        const lightSpeedPercentage = 80;
        const plasmaInjectors = getPlasmaInjectors(0, 0, 100);
        const expectedPlasmaInjectorsFlow = [ 120, 120, 0 ]
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const plasmaInjectorFlows = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(plasmaInjectorFlows).to.deep.equal(expectedPlasmaInjectorsFlow);
        expect(plasmaReactor.getRemainingTravelTime(plasmaInjectorFlows)).to.deep.equal('80 minutes');
    });

    it('should return plasma flow array for injectors and remaining time for case #6', function() {
        const lightSpeedPercentage = 150;
        const plasmaInjectors = getPlasmaInjectors(0, 0, 0);
        const expectedPlasmaInjectorsFlow = [ 150, 150, 150 ]
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const plasmaInjectorFlows = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(plasmaInjectorFlows).to.deep.equal(expectedPlasmaInjectorsFlow);
        expect(plasmaReactor.getRemainingTravelTime(plasmaInjectorFlows)).to.deep.equal('50 minutes');
    });

    it('should return plasma flow array for injectors and remaining time for case #7', function() {
        const lightSpeedPercentage = 140;
        const plasmaInjectors = getPlasmaInjectors(0, 0, 30);
        const expectedPlasmaInjectorsFlow = [ 150, 150, 120 ]
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const plasmaInjectorFlows = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(plasmaInjectorFlows).to.deep.equal(expectedPlasmaInjectorsFlow);
        expect(plasmaReactor.getRemainingTravelTime(plasmaInjectorFlows)).to.deep.equal('50 minutes');
    });

    it('should return plasma flow array for injectors and remaining time for case #8', function() {
        const lightSpeedPercentage = 170;
        const plasmaInjectors = getPlasmaInjectors(20, 50, 40);
        const expectedPlasmaInjectorsFlow = 'Unable to comply'
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const plasmaInjectorFlows = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(plasmaInjectorFlows).to.deep.equal(expectedPlasmaInjectorsFlow);
        expect(plasmaReactor.getRemainingTravelTime(plasmaInjectorFlows)).to.deep.equal('0 minutes');
    });

    getPlasmaInjectors = (firstInjectorDamage, secondInjectorDamage, thirdInjectorDamage) => {
        return [
            new PlasmaInjector(firstInjectorDamage),
            new PlasmaInjector(secondInjectorDamage),
            new PlasmaInjector(thirdInjectorDamage)
        ];
    }
  
  });