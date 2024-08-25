console.log("Hello from petCreator");

function createPet(name, age, species, happiness = 50, energy = 100) {
    let pet = {
        name: name,
        age,age,
        species: species,
        happiness: happiness,
        energy: energy,
    

    play: function() {
        this.energy -= 20;
        this.happiness += 10;
        console.log (`You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
    },

    feed: function() {
        this.happiness += 20;
        this.energy += 20;
        console.log(`You fed ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`);
    },

    status: function() {
        console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy ${this.energy}.`);
    },

    html: function(){
        return `
            div class="pet-card">
                <h3>${this.name}</h3>
                <p>Species: ${this.species}</p>
                <p>Age: ${this.age}</p>
                <p>Energy: ${this.energy}</p>
                <p>Happiness: ${this.happiness}</p>
            </div>
        `;
    }


    };
    
pet.status();
    return pet;
}