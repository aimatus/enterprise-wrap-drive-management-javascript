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

        if (this.getTotalReactorsMaxAvailablePlasmaFlow() < requiredPlasmaFlow) {
            return 'Unable to comply';
        }

        this.plasmmaInjectors.map((plasmaInjector) => {
            const maxUndefinedPlasmaFlow = plasmaInjector.getMaxUndefinedPlasmaFlow();
            plasmaInjectorsRequiredFlows.push(maxUndefinedPlasmaFlow);
            currentPlasmaReactorFlow += maxUndefinedPlasmaFlow;
        });

        const necessaryExtraPlasmaFlow = (requiredPlasmaFlow - currentPlasmaReactorFlow) / this.getWorkingPlasmaInjectorsQuantity(plasmaInjectorsRequiredFlows);

        return this.getFinalInjectorsFlows(plasmaInjectorsRequiredFlows, necessaryExtraPlasmaFlow);
    }

    getTotalReactorsMaxAvailablePlasmaFlow() {
        let maxPlasmaFlow = 0;
        this.plasmmaInjectors.map((plasmaInjector) => {
            maxPlasmaFlow += plasmaInjector.getMaxPlasmaFlow();
        });
        return maxPlasmaFlow;
    }

    getWorkingPlasmaInjectorsQuantity(plasmaInjectorsRequiredFlows) {
        let workingPlasmaInjectors = 0;
        plasmaInjectorsRequiredFlows.map((maxUndefinedPlasmaFlow) => {
            if (maxUndefinedPlasmaFlow > 0) {
                workingPlasmaInjectors++;
            }
        });
        return workingPlasmaInjectors;
    }

    getFinalInjectorsFlows(plasmaInjectorsRequiredFlows, necessaryExtraPlasmaFlow) {
        let finalInjectorFlows = [];
        plasmaInjectorsRequiredFlows.map((injectorFlow) => {
            if (injectorFlow > 0) {
                finalInjectorFlows.push(injectorFlow + necessaryExtraPlasmaFlow);
            } else {
                finalInjectorFlows.push(0);
            }
        });
        return finalInjectorFlows;
    }
}

module.exports = PlasmaReactor;