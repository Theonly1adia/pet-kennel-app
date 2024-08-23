console.log("Hello World");

//This is a state
let state = {
    ownerName:"",
    email: "",
    phone:"",
    city:"",
    zip:"",
    petName:"",
    petType:"",
}
console.log(state);

let subBtn = document.getElementById("submitButton");

function saveForm(){
    console.log("Button clicked!")//Proof of Life

    //Capture form data and update the state object
    state.ownerName = document.getElementById('ownerName').value;
    console.log("Owner's Name:", state.ownerName); 

    state.email = document.getElementById('email').value;
    console.log("Email:", state.email);

    state.phone = document.getElementById('phone').value;
    console.log("Phone:", state.phone);

    state.city = document.getElementById('city').value;
    console.log("City:", state.city);

    state.zip = document.getElementById('zip').value;
    console.log("Zip Code:", state.zip);

    state.petName = document.getElementById('petName').value;
    console.log("Pet's Name:", state.petName);

    state.petType = document.getElementById('petType').value;
    console.log("Pet Type:", state.petType);




    // Log the state object to the console after all data is saved
    console.table(state);
}

subBtn.addEventListener('click', saveForm);

function createPetOwner(ownerName, email, phone, city, zip, petName, petType) {
    
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
        }
    };

    return petOwner;
}

