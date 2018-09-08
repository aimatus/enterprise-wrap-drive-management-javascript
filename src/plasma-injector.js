class PlasmaPropeller {
    
    constructor(damage) {
        this.desiredExtraPlasmaFlow = 0;
        this.damagePercentage = damage;
    }
    
    getDamagePercentage() {
        return this.damagePercentage;
    }

    getMaxUndefinedPlasmaFlow() {
        const maxUndefinedPlasmaFlow = 100;
        return maxUndefinedPlasmaFlow - this.damagePercentage;
    }

    getRemainingWorkingTimeInMinutes() {
        const hasNoExtraPlasmaFlow = this.desiredExtraPlasmaFlow === 0;
        const remainingWorkingTimeInMinutes = this.getMaxUndefinedPlasmaFlow() - this.desiredExtraPlasmaFlow;
        return hasNoExtraPlasmaFlow ? 'infinite' : remainingWorkingTimeInMinutes;
    }

    setDesiredPlasmaFlow (desiredExtraPlasmaFlow) {
        this.desiredExtraPlasmaFlow = desiredExtraPlasmaFlow;
    }

}

module.exports = PlasmaPropeller;