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

function validateForm() {
    let isValid = true;
    let errorMsg = "";

    if (state.ownerName === "") {
        isValid = false;
        errorMsg +="Owner's Name is required.<br>"
    }

    if (state.email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
        isValid = false;
        errorMsg += "Valid Email is required.<br>";
    }

    if (state.phone === "") {
        isValid = false;
        errorMsg += "Phone number is required.<br>";
    }

    if (state.city === "") {
        isValid = false;
        errorMsg += "City is required.<br>";
    }

    if (state.zip === "") {
        isValid = false;
        errorMsg += "Zip Code is required.<br>";
    }

    if (state.petName === "") {
        isValid = false;
        errorMsg += "Pet's Name is required.<br>";
    }

    if (state.petType === "") {
        isValid = false;
        errorMsg += "Pet Type is required.<br>";
    }

    if (!isValid) {
        document.getElementById("errorMessage").innerHTML = errorMsg;
    } else {
        document.getElementById("errorMessage").innerHTML = "";
    }

    return isValid;
}

function saveForm(){
    console.log("Button clicked!");//Proof of Life

    //Capture form data and update the state object
    state.ownerName = document.getElementById('ownerName').value;
    console.log("Owner's Name:", state.ownerName); 

    state.email = document.getElementById('ownerEmail').value;
    console.log("Email:", state.email);

    state.phone = document.getElementById('ownerPhone').value;
    console.log("Phone:", state.phone);

    state.city = document.getElementById('ownerCity').value;
    console.log("City:", state.city);

    state.zip = document.getElementById('ownerZip').value;
    console.log("Zip Code:", state.zip);

    state.petName = document.getElementById('petName').value;
    console.log("Pet's Name:", state.petName);

    state.petType = document.getElementById('petType').value;
    console.log("Pet Type:", state.petType);




    if (validateForm()){
    console.table(state);




    const newPetOwner = createPetOwner(
        state.ownerName,
        state.email,
        state.phone,
        state.city,
        state.zip,
        state.petName,
        state.petType,
        
    );
   
    newPetOwner.status();

    newPetOwner.render();

     // Hide the form
     document.getElementById('petOwnerForm').style.display = 'none';

     // Show the pet owner card
     document.getElementById('petOwnerCard').style.display = 'block';
 }

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
        },
        render() {
            document.getElementById("ownerNameDisply").textContent = this.ownerName;
            document.getElementById("ownerCityDsplay").textContent = this.city;
            document.getElementById("petNameDisplay").textContent = this.petName;
            document.getElementById("petTypeDisplay").textContent = this.petType;

            console.log("Render method called and DOM updated");
        }
    };

    return petOwner; // Return the created pet owner object
}

