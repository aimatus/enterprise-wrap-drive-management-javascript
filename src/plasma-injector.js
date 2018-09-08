class PlasmaInjector {
    
    constructor(damage) {
        this.damagePercentage = damage;
    }

    getMaxUndefinedPlasmaFlow() {
        const maxUndefinedPlasmaFlow = 100;
        return maxUndefinedPlasmaFlow - this.damagePercentage;
    }

    getRemainingWorkingTimeInMinutes(desiredExtraPlasmaFlow) {
        const noWorkingTime = 0;
        if (this.damagePercentage === 100) { return noWorkingTime; }
        const hasNoExtraPlasmaFlow = desiredExtraPlasmaFlow === undefined;
        const remainingWorkingTimeInMinutes = 100 - desiredExtraPlasmaFlow;
        return hasNoExtraPlasmaFlow ? 'infinite' : remainingWorkingTimeInMinutes;
    }

    getMaxPlasmaFlow() {
        return this.getMaxUndefinedPlasmaFlow() + 99;
    }

}

module.exports = PlasmaInjector;