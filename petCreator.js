console.log("Hello from petCreator");

function createPet(name, age, species) {
    let pet = {
        name: name,
        age,age,
        species: species,
        happiness: Math.floor(Math.random() * 61),
        energy: Math.floor(Math.random() * 101),
    
    status: function() {
        console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy ${this.energy}.`);
    },

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

    

    html: function(){
        return `
            <div class="col-3">
                <div>
                <h3>Pet Info</h3>
                <p>Name: ${this.name}</p>
                <p>Species: ${this.species}</p>
                <p>Age: ${this.age}</p>
                <p>Energy: ${this.energy}</p>
                <p>Happiness: ${this.happiness}</p>
                </div>
                
            </div>
        `;
    }


    };
    
pet.status();
    return pet;
}