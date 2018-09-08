const chai = require('chai');
const expect = chai.expect;
const PlasmaReactor = require('../src/plasma-reactor.js');

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
  
  });