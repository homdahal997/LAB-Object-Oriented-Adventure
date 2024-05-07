//Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    },
};
adventurer.inventory.forEach((item) => {
    console.log(item);
});
adventurer.companion.companion2 = {
    name: "Frank",
    type: "Flea",
    belongings: ["hat", "sunglasses"],
};
console.log(adventurer);
adventurer.roll();
adventurer.roll();
adventurer.roll();

//Part 2: Class Fantasy
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}
// Create Robin using the Character class
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];



// Test roll method for companions
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();

//Part 3: Class Features
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
}

//Part 4: Class Uniforms
Character.MAX_HEALTH = 100;
Adventurer.ROLES = ["Fighter", "Healer", "Wizard"];

// // Part 5: Gather your Party
// class AdventurerFactory {
//     constructor(role) {
//         this.role = role;
//         this.adventurers = [];
//     }
//     generate(name) {
//         const newAdventurer = new Adventurer(name, this.role);
//         this.adventurers.push(newAdventurer);
//     }
//     findByIndex(index) {
//         return this.adventurers[index];
//     }
//     findByName(name) {
//         return this.adventurers.find((a) => a.name === name);
//     }
// }

// const healers = new AdventurerFactory("Healer");
// const robin = healers.generate("Robin");


