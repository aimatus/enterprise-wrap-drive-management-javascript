class PlasmaReactor {
    
    constructor(plasmaInjectors) {
        if (!Array.isArray(plasmaInjectors)) {
            throw 'PlasmaReactor object should receive an array as constructor parameter';
        }
    }

}

module.exports = PlasmaReactor;