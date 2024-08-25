console.log("Hello from pets.js");

const state= {
    pets: []
};

document.getElementById('createPetButton').addEventListener('clcik', function(){
    const name = document.getElementById('petName').value;
    const age = parseInt(document.getElementById('petage').value, 10);
    const species = document.getElementById('petSpecies').value;

    const newPet = createPet(name, age, species);

    state.pets.push(newPet);

    newPet.status();
    console.table(state.pets);
})

//Create a pet names "Hello"
const helloPet = createPet("Hello", 2, "Dog")

helloPet.status();