console.log("Hello from pets.js");



document.getElementById('createPetButton').addEventListener('click', function(){
    const age =parseInt(document.getElementById('petAge').value);
    const species =document.getElementById('petSpecies').value;

    state.email = document.getElementById('ownerEmail').value;
    state.zipcode = document.getElementById('ownerZipcode').value;

    localStorage.setItem("email", state.email);
    localStorage.setItem("zipcode", state.zipcode);

    //Create a new pet and add it to the state
    const newPet = createPet( age, species);
    state.pets.push(newPet);

    newPet.status();
    console.table(state.pets);
    
    renderPets();
});

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

