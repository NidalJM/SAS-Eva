var prompt = require(`prompt-sync`)();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = []; //Constant To store Tickets on


//Step 3-Displaying Trips

function displayTrips(arr) {
    console.log();
    console.log(`=== AVAILABLE ROUTES ===`);
    for (let i = 0; i < arr.length; i++) {
        console.log(`#${i + 1} ${arr[i].departure} -> ${arr[i].destination}`);
        console.log(`Departure: ${arr[i].departureTime}`);
        console.log(`Arrival: ${arr[i].arrivalTime}`);
        console.log(`Price: ${arr[i].price}`);
        console.log(`Available Seats: ${arr[i].availableSeats}`);

        ;

    }

}

//Step 4 Purchasing Tickets
let ticketid = 1;
function purchaseticket() {
    let passengername = prompt(`Please enter your name: `) //Name Prompt
    let routeid = Number(prompt(`Please enter your Route ID: `)) //RouteID Prompt


    //Search for corresponding route
    let trip = null;
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === routeid) {
            trip = trips[i]
            break;
        }
    }
    // Checks if trip exists
    if (!trip) {
        console.log(`Trip not found.`);
        return
    }
    // Check if Train is full
    if (trip.availableSeats <= 0) {
        console.log(`Train Is full`);
        return
    }
    //Calculate Seat number
    const totalSeats = 50;
    const seatNumber = (totalSeats - trip.availableSeats) + 1;

    //Ticket Layout
    const ticket = {
        id: ticketid++,
        passengerName: passengername,
        tripId: trip.id,
        seatNumber: seatNumber,
        price: trip.price
    };

    trip.availableSeats -= 1
    tickets.push(ticket);

    console.log("\nTicket purchased successfully.\n");
    console.log(`Ticket #${ticket.id}`);
    console.log(`Passenger: ${ticket.passengerName}`);
    console.log(`Route: ${trip.departure} → ${trip.destination}`);
    console.log(`Seat: ${ticket.seatNumber}`);
    console.log(`Price: ${ticket.price} DH`);

}

purchaseticket()

//Step 5--Display Tickets

function DisplayTickets() {
    console.log(`=== TICKETS ===`);

    //Checks if No tickets exists
    if (tickets.length === 0) {
        console.log(`No tickets saved.`);
        return;
    }

    // Loop through each saved ticket
    for (let i = 0; i < tickets.length; i++) {
        const ticket = tickets[i];
        let trip = null;

        // Search for matching route using trip ID
        for (let j = 0; j < trips.length; j++) {
            if (trips[j].id === ticket.tripId) {
                trip = trips[j];
                break;
            }
        }
        // Display ticket details
        console.log(`\nTicket #${ticket.id}`);
        console.log(`Passenger: ${ticket.passengerName}`);
        console.log(`Route: ${trip.departure} → ${trip.destination}`);
        console.log(`Seat: ${ticket.seatNumber}`);
        console.log(`Price: ${ticket.price} DH`);
    }
}
// DisplayTickets()
// purchaseticket()
// DisplayTickets()

// Step 6--Cancel a Ticket

function cancelTicket() {
    console.log("\n=== CANCEL A TICKET ===");
    let ticketIdInput = Number(prompt("Ticket ID: ")); // Prompt for Ticket ID

    // 1. Search for the ticket in the tickets array
    let ticketIndex = -1;
    let foundTicket = null;

    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === ticketIdInput) {
            foundTicket = tickets[i];
            ticketIndex = i; // Save the index location so we can delete it
            break;
        }
    }

    // 2. Verify that the ticket exists
    if (!foundTicket) {
        console.log("Ticket not found.");
        return;
    }

    // 3. Find the associated trip to restore the available seat count
    for (let j = 0; j < trips.length; j++) {
        if (trips[j].id === foundTicket.tripId) {
            trips[j].availableSeats += 1; // Increase available seats by 1
            break;
        }
    }

    // 4. Delete the ticket from the tickets array
    tickets.splice(ticketIndex, 1);

    // 5. Success output
    console.log("\nTicket successfully canceled.");
}


//Step 7

function searchforticket() {
    let searchid = Number(prompt(`Enter your ticket Id: `))
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === searchid) {
            console.log(`\nTicket #${tickets[i].id}`);
            console.log(`Passenger: ${tickets[i].passengerName}`);
            console.log(`Route: ${trip.departure} → ${trip.destination}`);
            console.log(`Seat: ${ticket.seatNumber}`);
            console.log(`Price: ${ticket.price} DH`);
        };
    }
}

searchforticket()