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
    const plasmaInjectorsFlow = plasmaReactor.calculateInjectorsPlasmaFlow(process.argv[5]);
    const remainingTime = plasmaReactor.getRemainingTravelTime(plasmaInjectorsFlow);
    console.log('|----------------------------------------------------|'.green);
    console.log('|---------- '.green + 'ENTERPRISE WRAP DRIVE MANAGEMENT'.red + ' --------|'.green);
    console.log('|----------------------------------------------------|'.green);
    console.log('|  '.green + 'Plasma Injectors (A, B, C)'.yellow + '                        |'.green);
    console.log('|----------------------------------------------------|'.green);
    console.log('|    A: ' + plasmaInjectorsFlow[0] + 'mg/s', '   |    B: ' + plasmaInjectorsFlow[1] + 'mg/s', '  |   C: ' + plasmaInjectorsFlow[2] + 'mg/s');
    console.log('|----------------------------------------------------|'.green);
    console.log('| Remaining working time: '.blue + remainingTime);
    console.log('|----------------------------------------------------|'.green);
}

calculatePlasmaReactorOptimalSettings();