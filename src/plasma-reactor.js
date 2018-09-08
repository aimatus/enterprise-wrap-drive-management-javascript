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

    getRemainingTravelTime(injectorPlasmaFlows) {
        let remainingTime = 100;
        if (injectorPlasmaFlows === 'Unable to comply') {
            return '0 minutes';
        }
        for (let index = 0; index < this.plasmmaInjectors.length; index++) {
            if (this.plasmmaInjectors[index].getDamagePercentage() < 100 && injectorPlasmaFlows[index] > 100) {
                const timeConsumed =  injectorPlasmaFlows[index] -100;
                remainingTime -= timeConsumed;
                break;
            }
        }
        return remainingTime === 100 ? 'Infinite' : remainingTime + ' minutes';
    }
}

module.exports = PlasmaReactor;