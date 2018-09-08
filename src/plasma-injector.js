class PlasmaInjector {
    
    constructor(damage) {
        this.damagePercentage = damage;
    }

    getMaxUndefinedPlasmaFlow() {
        const maxUndefinedPlasmaFlow = 100;
        return maxUndefinedPlasmaFlow - this.damagePercentage;
    }

    getRemainingWorkingTimeInMinutes(desiredExtraPlasmaFlow) {
        const hasNoExtraPlasmaFlow = desiredExtraPlasmaFlow === undefined;
        const remainingWorkingTimeInMinutes = this.getMaxUndefinedPlasmaFlow() - desiredExtraPlasmaFlow;
        return hasNoExtraPlasmaFlow ? 'infinite' : remainingWorkingTimeInMinutes;
    }

}

module.exports = PlasmaInjector;