const PlasmaReactor = require('./src/plasma-reactor');
const PlasmaInjector = require('./src/plasma-injector');
const colors = require('colors');
const commandLineArgs = require('command-line-args')

const optionDefinitions = [
    { name: 'injectors', alias: 'i', multiple: true, type: Number },
    { name: 'lightspeed', alias: 'l', type: Number }
];

const params = commandLineArgs(optionDefinitions);

const calculatePlasmaReactorOptimalSettings = () => {
    const plasmaInjectors = [
        new PlasmaInjector(params.injectors[0]),
        new PlasmaInjector(params.injectors[1]),
        new PlasmaInjector(params.injectors[2])
    ]
    const plasmaReactor = new PlasmaReactor(plasmaInjectors);
    const result = plasmaReactor.calculateInjectorsPlasmaFlow(params.lightspeed);
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