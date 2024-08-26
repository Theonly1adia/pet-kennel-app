console.log("Hello from pets.js");



document.getElementById('createPetButton').addEventListener('click', function(){
    const name =document.getElementById('petName');
    const age =parseInt(document.getElementById('petAge'));
    const species =document.getElementById('petSpecies');

    state.name = name;
    state.email = document.getElementById('ownerEmail').value;
    state.zipcode = document.getElementById('ownerZipcode').value;

    localStorage.setItem("name", state.name);
    localStorage.setItem("email", state.email);
    localStorage.setItem("zipcode", state.zipcode);

    const newPet = createPet(name, age, species);
    state.pets.push(newPet);

    newPet.status();
    console.table(state.pets);
    
    renderPets();
})

//Create a pet names "Hello"
const helloPet = createPet("Hello", 2, "Dog");
console.log(helloPet.html()); //Proof of Life for Html method

helloPet.status();

function renderPets(){
    let petsHtml = '';
    state.pets.forEach(pet => {
        const petHtml = pet.html();
        console.log(petHtml);
        petsHtml += petHtml;
    });

    document.getElementById("petsContainer").innerHTML = petsHtml
    console.log(petsHtml);
}

