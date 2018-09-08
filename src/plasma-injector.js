class PlasmaPropeller {
    
    constructor(damage) {
        this.damagePercentage = damage;
    }
    
    getDamagePercentage() {
        return this.damagePercentage;
    }

    getMaxUndefinedWorkingCapacity() {
        const maxUndefinedCapacity = 100;
        return maxUndefinedCapacity - this.damagePercentage;
    }

}

module.exports = PlasmaPropeller;