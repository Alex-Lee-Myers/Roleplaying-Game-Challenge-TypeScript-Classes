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
    attack: number;
    defense: number;
    accuracy: number;
    attackTarget(target: CharacterInterface): void;
}

//!            Create a Character class, assign it the interface above. This class will have a constructor that will accept and declare the variables in the interface above.
class Character implements CharacterInterface {
    constructor(public name: string, public health: number, public attack: number, public defense: number, public accuracy: number) {
    }
//            Within the Character class create a method called:
//?             attackTarget
//              ..that accepts a parameter called:
//?               target
//                This parameter will represent an instantiated class of Player or Enemy. Provide this parameter accurate type information, and include this method to the CharacterInterface.
    attackTarget(target: CharacterInterface) {
        let hit: boolean = Math.random() < this.accuracy;
        if (hit) {
            let damage: number = this.attack - target.defense;
            target.health -= damage;
            console.log(`${this.name} attacked ${target.name} for ${damage} damage!`);
        } else {
            console.log(`${this.name} missed!`);
        }
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
let Will: Player = new Player(
    'Will', 
    100, 
    10, 
    10,
    10
);


let Alex: Enemy = new Enemy(
    "Alex", 
    100, 
    10, 
    10, 
    10
);

let Bob: Enemy = new Enemy(
    "Bob",
    100,
    10,
    10,
    10
);

//
//            Call the attack function on the new Player instance, and pass in the new Enemy instance, see if it functions correctly.
// have the player attack multiple enemies at same time in the same line
Will.attackTarget(Alex, Bob);
