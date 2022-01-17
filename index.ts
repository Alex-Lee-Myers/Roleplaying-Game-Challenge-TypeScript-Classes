//
//!            Create an interface called:
//?                   CharacterInterface
//!            that has the following properties:
//?                    name: string;
//?                    health: number;
//?                    attack: number;
//?                    defense: number;
//?                    accuracy: number;

interface CharacterInterface {
    name: string;
    health: number;
    maxHealth: number;
    attack: number;
    defense: number;
    accuracy: number;
    healthBar: HealthIcon[];
    attackTarget(target: CharacterInterface): void;
    showHealth: () => void;
}

type HealthIcon = "🟩" | "🟥";


//!            Create a Character class, assign it the interface above. This class will have a constructor that will accept and declare the variables in the interface above.
class Character implements CharacterInterface {
    healthBar: HealthIcon[] = [
        "🟩",
        "🟩",
        "🟩",
        "🟩",
        "🟩",
        "🟩",
        "🟩",
        "🟩",
        "🟩",
        "🟩",
    ];

    maxHealth: number = this.health;
    constructor(
        public name: string,
        public health: number,
        public attack: number,
        public defense: number,
        public accuracy: number
    ) { }

    //            Within the Character class create a method called:
    //?             attackTarget
    //              ..that accepts a parameter called:
    //?               target
    //                This parameter will represent an instantiated class of Player or Enemy. Provide this parameter accurate type information, and include this method to the CharacterInterface.
    attackTarget(target: CharacterInterface) {
        //? Check attackers health first to see if they are still alive.
        // parseInt() and + operator will convert a string to a number. 
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated! \n`);
        } else {
            //? Check targets health first to see if they are still alive.
            if (target.health > 0) {
                //? If attack is successful, calculate damage and subtract from target's health.
                if (Math.random() > 1 - this.accuracy) {
                    let damage: number =
                    this.attack * (1 + target.defense) + Math.floor(Math.random() * 5);
                console.log(
                    `${this.name} attacked ${target.name} with ${damage} damage 💥 \n`
                );
                target.health -= damage;

                // ? CHECKING TARGET'S HEALTH %
                let targetHealthPercent = (target.health / target.maxHealth).toFixed(
                    2
                );
                if (targetHealthPercent.toString()[0] === "-") {
                    for (let x = 0; x < target.healthBar.length; x++) {
                        target.healthBar[x] = "🟥";
                    }
                } else {
                    target.healthBar = [
                        "🟥",
                        "🟥",
                        "🟥",
                        "🟥",
                        "🟥",
                        "🟥",
                        "🟥",
                        "🟥",
                        "🟥",
                        "🟥",
                    ];
                    for (let y = 0; y < +targetHealthPercent.toString()[2]; y++) {
                        target.healthBar[y] = "🟩";
                    }

                    target.showHealth();
                }
                if (target.health <= 0) {
                    // ? CHECK IF TARGET STILL ALIVE
                    console.log(`${target.name} was defeated by ${this.name}... 💀 \n`);
                }
            } else {
                console.log(`${this.name}'s Attack missed! ❌ \n`);
            }
        }
    }
}

async rest() {
    console.log("Resting...");
    return new Promise((resolve, reject): void => {
        setTimeout(() => {
            console.log("Rest Complete. HP Restored!");
            this.health = this.maxHealth;
            resolve("");
        }, 3000);
    });
}

showHealth() {
    console.log(`[${this.name}]`);
    console.log(`${this.healthBar.join("")}`);
    console.log(`HP: ${this.health}/${this.maxHealth} \n`);
}
}

//*              This function should log the name of the character that is attacking, as well as the name of the target.
//?            Create two classes, Player and Enemy, each one needs to inherit properties and methods from the Character class. These classes will also use constructors.
//
//            Create a new instance of the Player class and the Enemy class passing along the correct arguments for (name..health..attack..etc).
class Player extends Character {
    constructor(
        public name: string,
        public health: number,
        public attack: number,
        public defense: number,
        public accuracy: number
    ) {
        super(name, health, attack, defense, accuracy);

        // IIFE function
        (() => {
            console.log(`Player ${this.name} joined the game. \n`);
        })();
    }
}
class Enemy extends Character {
    constructor(
        public name: string,
        public health: number,
        public attack: number,
        public defense: number,
        public accuracy: number
    ) {
        super(name, health, attack, defense, accuracy);
    }
}

// name   hp   att, def, acc
// let seniorEvil: Enemy = new Enemy("Name", 3130, 50, 30, 0.5);

const Player1: Player = new Player("🗡 Dragon_Slayer", 3130, 50, 30, 0.5);
const AI_Entry_Creature: Enemy = new Enemy("🔥🐰 Fire Rabbit", 500, 5, 7, 0.3);
const AI_Ice_Dragon_Boss: Enemy = new Enemy(
    "❄🐲 Ice Dragon",
    5050,
    25,
    18,
    0.4
);

const maxNumOfTurns = 100;

const EngageCombat = (a: CharacterInterface, b: CharacterInterface) => {
    for (let i = 1; i < maxNumOfTurns; i++) {
        if (Math.random() > 0.5) {
            a.attackTarget(b);
        } else {
            b.attackTarget(a);
        }
    }
};

const ExecuteEvents = async () => {
    // Fight first creature
    EngageCombat(Player1, AI_Entry_Creature);

    // Restore Health
    await Player1.rest();

    // Fight the boss
    EngageCombat(Player1, AI_Ice_Dragon_Boss);
};

//play go against the boss

ExecuteEvents();