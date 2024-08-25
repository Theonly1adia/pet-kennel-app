console.log("What's up world!")

function createPetOwner(ownerName, petName, petType) {
    const petOwner = {
        ownerName,
        petName, 
        petType,

        status() {
            console.log(`Owner: ${this.ownerName}, Pet Name:  ${this.petName}, Pet Type: ${this.petType}`);
        },

        render(){
            document.getElementById("ownerName".textContext = this.ownerName);
            document.getElementById("petName".textContext = this.petName);
            document.getElementById("petType".textContext = this.petType);

            console.log("Render method");
        }
    };

    console.log("PetOwner object created:", petOwner)
    return petOwner;
}

