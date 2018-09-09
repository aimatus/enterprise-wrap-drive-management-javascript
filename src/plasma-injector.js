class PlasmaInjector {
    
    constructor(damage) {
        this.damagePercentage = damage;
    }

    getDamagePercentage() {
        return this.damagePercentage;
    }

    getMaxUndefinedPlasmaFlow() {
        const maxUndefinedPlasmaFlow = 100;
        return maxUndefinedPlasmaFlow - this.damagePercentage;
    }

    getRemainingWorkingTimeInMinutes(desiredExtraPlasmaFlow) {
        const noExtraPlasmaFlowTime = 'infinite';
        const noWorkingTime = 0;
        if (this.damagePercentage === 100) { return noWorkingTime; }
        const hasNoExtraPlasmaFlow = desiredExtraPlasmaFlow === undefined;
        const remainingWorkingTimeInMinutes = 100 - desiredExtraPlasmaFlow;
        return hasNoExtraPlasmaFlow ? noExtraPlasmaFlowTime : remainingWorkingTimeInMinutes;
    }

    getMaxPlasmaFlow() {
        const maxExtraAvailablePlasmaFlow = 99;
        const totallyDamaged = 100;
        const noPlasmaFlow = 0;
        const maxAvailablePlasmaFlow = this.getMaxUndefinedPlasmaFlow() + maxExtraAvailablePlasmaFlow;
        return this.damagePercentage === totallyDamaged ? noPlasmaFlow : maxAvailablePlasmaFlow;
    }

}

module.exports = PlasmaInjector;