class PlasmaPropeller {
    
    constructor(damage) {
        this.damagePercentage = damage;
    }
    
    getDamagePercentage() {
        return this.damagePercentage;
    }
}

module.exports = PlasmaPropeller;