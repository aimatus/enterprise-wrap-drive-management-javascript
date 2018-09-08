const PlasmaReactor = require('./src/plasma-reactor');
const PlasmaInjector = require('./src/plasma-injector');

const calculatePlasmaReactorOptimalSettings = () => {
    const plasmaInjectors = [
        new PlasmaInjector(process.argv[2]),
        new PlasmaInjector(process.argv[3]),
        new PlasmaInjector(process.argv[4])
    ]
    const plasmaReactor = new PlasmaReactor(plasmaInjectors);
    const plasmaInjectorsFlow = plasmaReactor.calculateInjectorsPlasmaFlow(process.argv[5]);
    const remainingTime = plasmaReactor.getRemainingTravelTime(plasmaInjectorsFlow);
    console.log('\n');
    console.log('|----------------------------------------------------|');
    console.log('|---------- ENTERPRISE WRAP DRIVE MANAGEMENT --------|');
    console.log('|----------------------------------------------------|');
    console.log('|    A: ' + plasmaInjectorsFlow[0] + 'mg/s', '   |    B: ' + plasmaInjectorsFlow[1] + 'mg/s', '  |   C: ' + plasmaInjectorsFlow[2] + 'mg/s');
    console.log('|----------------------------------------------------|');
    console.log('| Remaining working time: ' + remainingTime);
    console.log('|----------------------------------------------------|');
}

calculatePlasmaReactorOptimalSettings();