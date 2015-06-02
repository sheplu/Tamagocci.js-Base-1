function Tamagocci() {
    this.weight      = 5;
    this.happiness   = 5;
    this.age         = 0;
    this.minWeight   = 1;
    this.maxWeight   = 10;
    this.goodPicture = "pk_good.gif";
    this.badPicture  = "pk_bad.gif";
    this.deadPicture = "pk_dead.gif";

    this.eat = function() {
        this.weight += 2;
    };

    this.play = function() {
        this.weight--;
        this.happiness++;
    };

    this.becomeOlder = function() {
        this.age++;
        this.minWeight++;
        this.maxWeight++;
        this.happiness--;
    };

    this.isDead = function() {
        return this.weight > this.maxWeight ||
               this.weight < this.minWeight ||
               this.happiness <= 0;
    };

    this.getPicture = function() {
        if (this.isDead()) {
            return this.deadPicture;
        }

        if (this.happiness == 0) {
            return this.deadPicture;
        }

        if (this.happiness < 3) {
            return this.badPicture;
        }

        if (this.weight - 3 < this.minWeight) {
            return this.badPicture;
        }

        if (this.weight + 3 > this.maxWeight) {
            return this.badPicture;
        }

        return this.goodPicture;
    };
}
