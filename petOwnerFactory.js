console.log("What's up world!")

function createPetOwner(ownerName, petName, petType) {
    const petOwner = {
        ownerName,
        email,
        phone,
        city,
        zip,
        petName, 
        petType,

        status() {
            console.log(`Owner: ${this.ownerName}, Email: ${this.email}, Phone: ${this.phone}, City: ${this.city}, Zip: ${this.zip}, Pet: ${this.petName} (${this.petType})`);
        },
        render() {
            document.getElementById("ownerNameDisplay").textContent = this.ownerName;
            document.getElementById("ownerCityDisplay").textContent = this.city;
            document.getElementById("petNameDisplay").textContent = this.petName;
            document.getElementById("petTypeDisplay").textContent = this.petType;
        }
    };

    return petOwner;
}