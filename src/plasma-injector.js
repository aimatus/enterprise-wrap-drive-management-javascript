class PlasmaPropeller {
    
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

}

module.exports = PlasmaPropeller;