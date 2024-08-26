console.log("Hello from state.js");

const state= {
    pets: [],
    ownerName: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    zipcode: localStorage.getItem("zipcode"),
    city: localStorage.getItem("city"),
    phone: localStorage.getItem("phone"),
    petName: localStorage.getItem("petName"),
    petType: localStorage.getItem("petType")
};

console.log(state);

