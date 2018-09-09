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

    it('should return plasma flow array for injectors and remaining time for case #1', function() {
        const lightSpeedPercentage = 100;
        const plasmaInjectors = getPlasmaInjectors(0, 0, 0);
        const expectedResult = { plasmaInjectorsFlow :[ 100, 100, 100 ], remainingTime: 'Infinite' }
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const result = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(result).to.deep.equal(expectedResult);
    });

    it('should return plasma flow array for injectors and remaining time for case #2', function() {
        const lightSpeedPercentage = 90;
        const plasmaInjectors = getPlasmaInjectors(0, 0, 0);
        const expectedResult = { plasmaInjectorsFlow :[ 90, 90, 90 ], remainingTime: 'Infinite' }
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const result = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(result).to.deep.equal(expectedResult);
    });

    it('should return plasma flow array for injectors and remaining time for case #3', function() {
        const lightSpeedPercentage = 30;
        const plasmaInjectors = getPlasmaInjectors(0, 0, 0);
        const expectedResult = { plasmaInjectorsFlow :[ 30, 30, 30 ], remainingTime: 'Infinite' }
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const result = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(result).to.deep.equal(expectedResult);
    });

    it('should return plasma flow array for injectors and remaining time for case #4', function() {
        const lightSpeedPercentage = 100;
        const plasmaInjectors = getPlasmaInjectors(20, 10, 0);
        const expectedResult = { plasmaInjectorsFlow :[ 90, 100, 110 ], remainingTime: '90 minutes' }
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const result = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(result).to.deep.equal(expectedResult);
    });

    it('should return plasma flow array for injectors and remaining time for case #5', function() {
        const lightSpeedPercentage = 80;
        const plasmaInjectors = getPlasmaInjectors(0, 0, 100);
        const expectedResult = { plasmaInjectorsFlow: [ 120, 120, 0 ], remainingTime: '80 minutes' }
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const result = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(result).to.deep.equal(expectedResult);
    });

    it('should return plasma flow array for injectors and remaining time for case #6', function() {
        const lightSpeedPercentage = 150;
        const plasmaInjectors = getPlasmaInjectors(0, 0, 0);
        const expectedResult = { plasmaInjectorsFlow: [ 150, 150, 150 ], remainingTime: '50 minutes' }
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const result = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(result).to.deep.equal(expectedResult);
    });

    it('should return plasma flow array for injectors and remaining time for case #7', function() {
        const lightSpeedPercentage = 140;
        const plasmaInjectors = getPlasmaInjectors(0, 0, 30);
        const expectedResult = { plasmaInjectorsFlow: [ 150, 150, 120 ], remainingTime: '50 minutes' }
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const result = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(result).to.deep.equal(expectedResult);
    });

    it('should return plasma flow array for injectors and remaining time for case #8', function() {
        const lightSpeedPercentage = 170;
        const plasmaInjectors = getPlasmaInjectors(20, 50, 40);
        const expectedResult = { plasmaInjectorsFlow: 'Unable to comply', remainingTime: '0 minutes' }
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const result = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(result).to.deep.equal(expectedResult);
    });

    it('should return proper plasma flow array for injectors and remaining time when injectors are working at half of power', function() {
        const lightSpeedPercentage = 100;
        const plasmaInjectors = getPlasmaInjectors(50, 50, 50);
        const expectedResult = { plasmaInjectorsFlow: [100, 100, 100], remainingTime: '50 minutes' }
        const plasmaReactor = new PlasmaReactor(plasmaInjectors);
        const result = plasmaReactor.calculateInjectorsPlasmaFlow(lightSpeedPercentage);
        expect(result).to.deep.equal(expectedResult);
    });

    getPlasmaInjectors = (firstInjectorDamage, secondInjectorDamage, thirdInjectorDamage) => {
        return [
            new PlasmaInjector(firstInjectorDamage),
            new PlasmaInjector(secondInjectorDamage),
            new PlasmaInjector(thirdInjectorDamage)
        ];
    }
  
  });