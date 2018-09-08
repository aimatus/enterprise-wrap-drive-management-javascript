class PlasmaReactor {
    
    constructor(plasmaInjectors) {
        if (!Array.isArray(plasmaInjectors)) {
            throw 'PlasmaReactor object should receive an array as constructor parameter';
        }
        this.plasmmaInjectors = plasmaInjectors;
    }

    calculateInjectorsPlasmaFlow(lightSpeedPercentage) {
        const plasmaFlowLightSpeedRatio = 3;
        const requiredPlasmaFlow = lightSpeedPercentage * plasmaFlowLightSpeedRatio;
        let plasmaInjectorsRequiredFlows = [];
        let currentPlasmaReactorFlow = 0;

        this.plasmmaInjectors.map((plasmaInjector) => {
            plasmaInjectorsRequiredFlows.push(plasmaInjector.getMaxUndefinedPlasmaFlow());
            currentPlasmaReactorFlow += plasmaInjector.getMaxUndefinedPlasmaFlow();
        });

        const necessaryExtraPlasmaFlow = (requiredPlasmaFlow - currentPlasmaReactorFlow) / plasmaFlowLightSpeedRatio;
        plasmaInjectorsRequiredFlows = plasmaInjectorsRequiredFlows.reduce((newPlasmaFlow, originalPlasmaFlow) => {
            newPlasmaFlow.push(originalPlasmaFlow + necessaryExtraPlasmaFlow);
            return newPlasmaFlow;
        }, []);

        return plasmaInjectorsRequiredFlows;
    }

}

module.exports = PlasmaReactor;