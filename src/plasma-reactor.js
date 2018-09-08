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
        let workingPlasmaReactors = 0;

        if (this.getTotalReactorsMaxPlasmaFlow() < requiredPlasmaFlow) {
            return 'Unable to comply';
        }

        this.plasmmaInjectors.map((plasmaInjector) => {
            const maxUndefinedPlasmaFlow = plasmaInjector.getMaxUndefinedPlasmaFlow();
            plasmaInjectorsRequiredFlows.push(maxUndefinedPlasmaFlow);
            currentPlasmaReactorFlow += maxUndefinedPlasmaFlow;
            if (maxUndefinedPlasmaFlow > 0) {
                workingPlasmaReactors++;
            }
        });

        const necessaryExtraPlasmaFlow = (requiredPlasmaFlow - currentPlasmaReactorFlow) / workingPlasmaReactors;

        for (let index = 0; index < plasmaInjectorsRequiredFlows.length; index++) {
            if (plasmaInjectorsRequiredFlows[index] > 0) {
                plasmaInjectorsRequiredFlows[index] += necessaryExtraPlasmaFlow;
            }
        }

        return plasmaInjectorsRequiredFlows;
    }

    getTotalReactorsMaxPlasmaFlow() {
        let maxPlasmaFlow = 0;
        this.plasmmaInjectors.map((plasmaInjector) => {
            maxPlasmaFlow += plasmaInjector.getMaxPlasmaFlow();
        });
        return maxPlasmaFlow;
    }

}

module.exports = PlasmaReactor;