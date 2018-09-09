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
        let injectorFlows = null;
        let remainingTime = null;

        if (this.getTotalReactorsMaxAvailablePlasmaFlow() < requiredPlasmaFlow) {
            return { plasmaInjectorsFlow: 'Unable to comply', remainingTime: '0 minutes' }
        }

        this.plasmmaInjectors.map((plasmaInjector) => {
            const maxUndefinedPlasmaFlow = plasmaInjector.getMaxUndefinedPlasmaFlow();
            plasmaInjectorsRequiredFlows.push(maxUndefinedPlasmaFlow);
            currentPlasmaReactorFlow += maxUndefinedPlasmaFlow;
        });

        const plasmaDifference = requiredPlasmaFlow - currentPlasmaReactorFlow;
        const necessaryExtraPlasmaFlow = Math.round((plasmaDifference / this.getWorkingPlasmaInjectorsQuantity(plasmaInjectorsRequiredFlows)) * 100) / 100;   
        injectorFlows = this.getFinalInjectorsFlows(plasmaInjectorsRequiredFlows, necessaryExtraPlasmaFlow);

        remainingTime = necessaryExtraPlasmaFlow > 0 ? this.getRemainingTravelTime(injectorFlows) : 'Infinite'

        return { plasmaInjectorsFlow: injectorFlows, remainingTime: remainingTime }
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
        const totallyDamagedPercentage = 100;
        for (let index = 0; index < this.plasmmaInjectors.length; index++) {
            let damagePercentage = this.plasmmaInjectors[index].getDamagePercentage();
            if ( damagePercentage < totallyDamagedPercentage) {
                const remainingTime = 200.00 - (Math.round(damagePercentage) + Math.round(injectorPlasmaFlows[index] * 100) / 100);
                return remainingTime + ' minutes';
            }
        }
        return null;
    }
}

module.exports = PlasmaReactor;