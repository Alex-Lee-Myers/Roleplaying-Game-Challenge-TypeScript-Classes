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

type HealthIcon = "💀" | "🟩" | "🟥" | "🟨";


//!            Create a Character class, assign it the interface above. This class will have a constructor that will accept and declare the variables in the interface above.
class Character implements CharacterInterface {
    // healthBar is an array of 11 Health Icons that will be used to display the health of the character.
    healthBar: HealthIcon[] =
        [
            "💀", // 0
            "🟥",// 0 through 10
            "🟥",// 11 through 20
            "🟥",// 21 through 30
            "🟨",// 31 through 40
            "🟨",// 41 through 50
            "🟨",// 51 through 60
            "🟩",// 61 through 70
            "🟩",// 71 through 80
            "🟩",// 81 through 90
            "🟩"// 91 through 100
        ];

    maxHealth: number = this.health;

    constructor(public name: string, public health: number, public attack: number, public defense: number, public accuracy: number) {
    }
    //            Within the Character class create a method called:
    //?             attackTarget
    //              ..that accepts a parameter called:
    //?               target
    //                This parameter will represent an instantiated class of Player or Enemy. Provide this parameter accurate type information, and include this method to the CharacterInterface.
    attackTarget(target: CharacterInterface) {
        //? Check defenders health first to see if they are still alive.
        // parseInt() and + operator will convert a string to a number. 
        if (this.health < 0) {
            console.log(`${this.name} has been defeated! \n`);
            console.log()
        } else {
            //? Check attackers accuracy to see if they hit.
            if (Math.random() * 100 < this.accuracy) {
                //? Check defenders defense to see if they block.
                if (Math.random() * 100 < target.defense) {
                    console.log(`${target.name} blocked ${this.name}'s attack! \n`);
                } else {
                    //? If the attack hits, calculate damage.
                    let damage: number = this.attack * (100 / 100 + target.defense) + Math.floor(Math.random() * 5);
                    console.log(`${this.name} did ${damage} damage to ${target.name}! \n`);
                    //? Check defenders health to see if they are still alive.
                    if (target.health - damage <= 0) {
                        console.log(`${target.name} has been defeated! ${this.name} wins! \n`);
                    } else {
                        //? If the attack hits, calculate damage.
                        target.health -= damage;
                        console.log(`${target.name} has ${target.health} health remaining. \n`);
                    
                    // for loop to display the health of the character. in a console.log depending on a range of 0 to 100.
                    // healthBar is an array of 11 Health Icons that will be used to display the health of the character.
                    // remove a Health Icon from the array depending on the health of the character.
                    // ? CHECKING TARGET'S HEALTH %
                    let targetHealthPercent = (target.health / target.maxHealth).toFixed(
                        2
                    );

                    if (targetHealthPercent.toString()[0] === "-") {
                        for (let x = 0; x < 11; x++) {
                            console.log(this.healthBar[x]);
                        }
                    }
                    else {
                        for (let x = 0; x < +targetHealthPercent * 11; x++) {
                            console.log(this.healthBar[x]);
                        }
                    }
                    }
                }
            } else {
                console.log(`${this.name} missed ${target.name}! \n`);
            }
        }
    }

    showHealth() {
        console.log(`[${this.name}]`);
        console.log(`${this.healthBar.join("")}`);
        console.log(`HP: ${this.health}/${this.maxHealth} \n`);
    }
}

//*              This function should log the name of the character that is attacking, as well as the name of the target.
//?            Create two classes, Player and Enemy, each one needs to inherit properties and methods from the Character class. These classes will also use constructors.
class Player extends Character {
    constructor(public name: string, public health: number, public attack: number, public defense: number, public accuracy: number) {
        super(name, health, attack, defense, accuracy);
    }
}

class Enemy extends Character {
    constructor(public name: string, public health: number, public attack: number, public defense: number, public accuracy: number) {
        super(name, health, attack, defense, accuracy);
    }
}
//
//            Create a new instance of the Player class and the Enemy class passing along the correct arguments for (name..health..attack..etc).
const Player1: Player = new Player(
    "🗡 Dragon_Slayer",
    3130,
    50,
    30,
    50);
const AI_Entry_Creature: Enemy = new Enemy(
    "🔥🐰 Fire Rabbit",
    500,
    5,
    7,
    30);
const AI_Ice_Dragon_Boss: Enemy = new Enemy(
    "❄🐲 Ice Dragon",
    5050,
    25,
    18,
    0.4
);

//
//            Call the attack function on the new Player instance, and pass in the new Enemy instance, see if it functions correctly.
// have the player attack multiple enemies at same time in the same line
for (let i = 0; i < 3; i++) {
    Player1.attackTarget(AI_Entry_Creature);
    Player1.attackTarget(AI_Ice_Dragon_Boss);
}
