//
//            Create an interface called:
//?                   CharacterInterface
//
//            Give this interface the following variable names and type information:
//?                    name: string;
//?                    health: number;
//?                    attack: number;
//?                    defense: number;
//?                    accuracy: number;
//
//            Create a Character class, assign it the interface above. This class will have a constructor that will accept and declare the variables in the interface above.
//
//            Create two classes, Player and Enemy, each one needs to inherit properties and methods from the Character class. These classes will also use constructors.
//
//            Within the Character class create a method called:
//?             attackTarget
//              ..that accepts a parameter called:
//?               target
//                This parameter will represent an instantiated class of Player or Enemy. Provide this parameter accurate type information, and include this method to the CharacterInterface.
//
//              This function should log the name of the character that is attacking, as well as the name of the target.
//
//            Create a new instance of the Player class and the Enemy class passing along the correct arguments for (name..health..attack..etc).
//
//            Call the attack function on the new Player instance, and pass in the new Enemy instance, see if it functions correctly.
