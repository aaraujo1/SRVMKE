

function initFirebase(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBstqOtHW_itaBgESGf8DEpw4va_sav1FQ",
        authDomain: "srvmke-696a6.firebaseapp.com",
        databaseURL: "https://srvmke-696a6.firebaseio.com",
        projectId: "srvmke-696a6",
        storageBucket: "srvmke-696a6.appspot.com",
        messagingSenderId: "949943334215"
    };
    firebase.initializeApp(config);
}

initFirebase();





var database = firebase.database();

//EVENTS!!!!!!!

var eventsRef = database.ref('events/');

// Create a new post reference with an auto-generated id

let addEvent = function(title, date, organizer, description, location, totalVolunteers){

    var newEventRef = eventsRef.push();
    newEventRef.set({

        title: title,
        date: date,
        organizer: organizer,
        description: description,
        location : location,
        totalVolunteers: totalVolunteers,
    });
};

//VOLS!!!!!!!!!!

var volunteersRef = database.ref('volunteers/');

// Create a new post reference with an auto-generated id

let addVolunteer = function(firstName, lastName, organization, age){

    var newEventRef = volunteersRef.push();
    newEventRef.set({

        firstName: firstName,
        lastName: lastName,
        organization: organization,
        age: age,
    });
};

addEvent("Sample Event",
    "2019/02/23",
    "Betty White",
    "This is the first sample event.",
    "Brady Street, Milwaukee, WI",
    23);

addVolunteer(
    "Joan",
    "Rivers",
    "Geriatric Volunteers",
    78
);


















/*var newEventRef = eventsRef.push();
newEventRef.set({

    title: "Sample Event",
    date: "2019/02/23",
    organizer: "Someone else",
    description: "This is the description for the second sample event.",
    Location : "Brady Street, Milwaukee, WI",
    totalVolunteers: 23,
});*/

/*function writeUserData( userId, title, date, organizer, description, location, totalVolunteers) {
    firebase.database().ref('events/' + userId).set({
        title: title,
        date: date,
        organizer: organizer,
        description: description,
        location : location,
        totalVolunteers: totalVolunteers,
    });
    userId++;
}*/
/*
function writeUserData(userId) {
    firebase.database().ref('users/' + userId).set({
        title: "Sample Event",
        date: "2019/02/23",
        organizer: "Betty White",
        description: "This is the description for a sample event.",
        location : "Water Street, Milwaukee, WI",
        totalVolunteers: 18,
    });
}*/

/*writeUserData(1, "Sample Event", "2019/02/23", "Betty White", "this is a sample event", "mke", 18);*/











