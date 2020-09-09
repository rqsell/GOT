// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack = () => {
        return this.strength
    }
    receiveDamage = (damage) => {
        this.health -= damage
    }
}

// Viking
class North extends Soldier {
    constructor(health, strength) {
        super(health, strength)

    }
    receiveDamage = (damage) => {
        this.health -= damage
        switch (this.health > 0) {
            case true:
                return `The North has received ${damage} points of damage`;

            case false:
                return `A Northern Soldier has died in act of combat`;
        }
    }
    battleCry = () => {
        return "We the North!"
    }
}

// Saxon
class WhiteWalker extends Soldier {
    constructor(health, strength) {
        super(health, strength)

    }
    receiveDamage = (damage) => {
        this.health -= damage
        switch (this.health > 0) {
            case true:
                return `The White Walkers have received ${damage} points of damage`;

            case false:
                return `A White Walker has died in combat`;
        }
    }
}


// War
class War {
    constructor() {
        this.northArmy = []
        this.whiteWalkerArmy = []

    }
    // 
    addNorth = (North) => {
        this.northArmy.push(North)
    }
    addWhiteWalker = (WhiteWalker) => {
        this.whiteWalkerArmy.push(WhiteWalker)
    }
    NorthAttack() {
        let n = Math.floor(Math.random() * this.northArmy.length)
        let randomN = this.northArmy[n]
        let w = Math.floor(Math.random() * this.whiteWalkerArmy.length)
        let randomW = this.whiteWalkerArmy[w]
        let result = randomW.receiveDamage(randomN.strength)
        if (randomW.health <= 0) {
            this.whiteWalkerArmy.splice(w, 1)
        }
        return result
    }
    whiteWalkerAttack() {
        let n = Math.floor(Math.random() * this.northArmy.length)
        let randomN = this.northArmy[n]
        let w = Math.floor(Math.random() * this.whiteWalkerArmy.length)
        let randomW = this.whiteWalkerArmy[w]
        let result = randomN.receiveDamage(randomW.strength)
        if (randomN.health <= 0) {
            this.northArmy.splice(n, 1) += this.whiteWalkerArmy
        }

        return result
    }

    showStatus() {
        if (this.northArmy.length == 0) {
            return "White Walkers have conquered humanity. All hail the Night King!"
        }
        if (this.whiteWalkerArmy.length == 0) {
            return "The North prevails! All hail the king in the north and warrior Arya Stark "
        } else {
            return "The battle rages on..."
        }
    }
}


let w = new War()
let snow = new North(20, 50)
w.addNorth(snow)

for (let i = 0; i < 50; i++) {
    let walker = new WhiteWalker(100, 100)
    w.addWhiteWalker(walker)
}
$(function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var video = document.getElementById('video');

    video.addEventListener('play', function () {
        var $this = this; //cache
        (function loop() {
            if (!$this.paused && !$this.ended) {
                ctx.drawImage($this, 0, 0);
                setTimeout(loop, 1000 / 30); // drawing at 30fps
            }
        })();
    }, 0);
});