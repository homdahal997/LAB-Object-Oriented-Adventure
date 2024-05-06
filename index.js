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