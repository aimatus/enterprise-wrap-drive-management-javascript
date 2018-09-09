const PlasmaReactor = require('./src/plasma-reactor');
const PlasmaInjector = require('./src/plasma-injector');
const colors = require('colors');

const calculatePlasmaReactorOptimalSettings = () => {
    const plasmaInjectors = [
        new PlasmaInjector(process.argv[2]),
        new PlasmaInjector(process.argv[3]),
        new PlasmaInjector(process.argv[4])
    ]
    const plasmaReactor = new PlasmaReactor(plasmaInjectors);
    const result = plasmaReactor.calculateInjectorsPlasmaFlow(process.argv[5]);
    const remainingTime = plasmaReactor.getRemainingTravelTime(result);
    console.log('|----------------------------------------------------|'.green);
    console.log('|---------- '.green + 'ENTERPRISE WRAP DRIVE MANAGEMENT'.red + ' --------|'.green);
    console.log('|----------------------------------------------------|'.green);
    console.log('|  '.green + 'Plasma Injectors (A, B, C)'.yellow + '                        |'.green);
    console.log('|----------------------------------------------------|'.green);
    console.log('|  A: ' + result.plasmaInjectorsFlow[0] + 'mg/s', '  |  B: ' + result.plasmaInjectorsFlow[1] + 'mg/s', '  |  C: ' + result.plasmaInjectorsFlow[2] + 'mg/s');
    console.log('|----------------------------------------------------|'.green);
    console.log('| Remaining working time: '.blue + result.remainingTime);
    console.log('|----------------------------------------------------|'.green);
}

calculatePlasmaReactorOptimalSettings();