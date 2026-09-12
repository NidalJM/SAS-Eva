var prompt = require(`prompt-sync`)();
let ticketid = 1;
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

const tickets = [
    {
        id: 1,
        passengerName: 'Nidal',
        tripId: 1,
        seatNumber: 1,
        price: 25
    },
    {
        id: 2,
        passengerName: 'Bary',
        tripId: 1,
        seatNumber: 2,
        price: 25
    },
    {
        id: 3,
        passengerName: 'Ahmed',
        tripId: 1,
        seatNumber: 1,
        price: 25
    }
];

function mainMenu() {
    let choice = -1;

    do {
        console.log("\n==================================");
        console.log("        RAILWAY MANAGER           ");
        console.log("==================================");
        console.log("1. View Trips");
        console.log("2. Buy a Ticket");
        console.log("3. View Tickets");
        console.log("4. Cancel a Ticket");
        console.log("5. Search for a Ticket");
        console.log("6. Filter Trips");
        console.log("7. Sort Trips");
        
        console.log("0. Exit");
        console.log("----------------------------------");

        choice = Number(prompt("Your Choice: "));

        switch (choice) {
            case 1:
                displayTrips(trips);
                break;
            case 2:
                purchaseticket();
                break;
            case 3:
                DisplayTickets();
                break;
            case 4:
                cancelTicket();
                break;
            case 5:
                searchforticket();
                break;
            case 6:
                filterTrips();
                break;
            case 7:
                trierTrajets();
                break;
            case 0:
                console.log("\nThank you for using Railway Manager. Goodbye!");
                break;
            default:
                console.log("\nInvalid option. Please choose a number between 0 and 7.");
        }
    } while (choice !== 0);
}

mainMenu();

function displayTrips(arr) {
    console.log();
    console.log(`---------------------------------------`);
    console.log(`=== AVAILABLE ROUTES ===`);
    for (let i = 0; i < arr.length; i++) {
        console.log(`#${i + 1} ${arr[i].departure} -> ${arr[i].destination}`);
        console.log(`Departure: ${arr[i].departureTime}`);
        console.log(`Arrival: ${arr[i].arrivalTime}`);
        console.log(`Price: ${arr[i].price}`);
        console.log(`Available Seats: ${arr[i].availableSeats}`);
        console.log(``);
    }
}

function purchaseticket() {
    let passengername = prompt(`Please enter your name: `);
    let routeid = Number(prompt(`Please enter your Route ID: `));

    let trip = null;
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === routeid) {
            trip = trips[i];
            break;
        }
    }

    if (!trip) {
        console.log(`Trip not found.`);
        return;
    }

    if (trip.availableSeats <= 0) {
        return "Train Is full";
    }

    let soldSeatsForThisTrip = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].tripId === trip.id) {
            soldSeatsForThisTrip++;
        }
    }
    const seatNumber = soldSeatsForThisTrip + 1;
    
    const ticket = {
        id: ticketid++,
        passengerName: passengername,
        tripId: trip.id,
        seatNumber: seatNumber,
        price: trip.price
    };

    trip.availableSeats -= 1;
    tickets.push(ticket);

    console.log("\nTicket purchased successfully.\n");
    console.log(`Ticket #${ticket.id}`);
    console.log(`Passenger: ${ticket.passengerName}`);
    console.log(`Route: ${trip.departure} → ${trip.destination}`);
    console.log(`Seat: ${ticket.seatNumber}`);
    console.log(`Price: ${ticket.price} DH`);
}

function DisplayTickets() {
    console.log(`=== TICKETS ===`);

    if (tickets.length === 0) {
        console.log(`No tickets saved.`);
        return;
    }

    for (let i = 0; i < tickets.length; i++) {
        const ticket = tickets[i];
        let trip = null;

        for (let j = 0; j < trips.length; j++) {
            if (trips[j].id === ticket.tripId) {
                trip = trips[j];
                break;
            }
        }

        console.log(`\nTicket #${ticket.id}`);
        console.log(`Passenger: ${ticket.passengerName}`);
        console.log(`Route: ${trip.departure} → ${trip.destination}`);
        console.log(`Seat: ${ticket.seatNumber}`);
        console.log(`Price: ${ticket.price} DH`);
    }
}

function cancelTicket() {
    console.log("\n=== CANCEL A TICKET ===");
    let ticketIdInput = Number(prompt("Ticket ID: "));

    let ticketIndex = -1;
    let foundTicket = null;

    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === ticketIdInput) {
            foundTicket = tickets[i];
            ticketIndex = i;
            break;
        }
    }

    if (!foundTicket) {
        console.log("Ticket not found.");
        return;
    }

    for (let j = 0; j < trips.length; j++) {
        if (trips[j].id === foundTicket.tripId) {
            trips[j].availableSeats += 1;
            break;
        }
    }

    tickets.splice(ticketIndex, 1);

    if (tickets.length === 0) {
        ticketid = 1;
    }

    console.log("\nTicket successfully canceled.");
}

function searchforticket() {
    let searchid = Number(prompt(`Enter your ticket Id: `));
    let found = false;

    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === searchid) {
            found = true;
            let currentTicket = tickets[i];

            let trip = null;
            for (let j = 0; j < trips.length; j++) {
                if (trips[j].id === currentTicket.tripId) {
                    trip = trips[j];
                    break;
                }
            }

            console.log(`\nTicket #${currentTicket.id}`);
            console.log(`Passenger: ${currentTicket.passengerName}`);
            console.log(`Route: ${trip ? trip.departure : 'N/A'} → ${trip ? trip.destination : 'N/A'}`);
            console.log(`Seat: ${currentTicket.seatNumber}`);
            console.log(`Price: ${currentTicket.price} DH`);
            break;
        }
    }

    if (!found) {
        console.log("Ticket not found.");
    }
}

function filterTrips() {
    console.log("\n=== FILTER TRIPS BY DEPARTURE CITY ===");
    let city = prompt("Enter Departure City: ");

    let filteredResults = [];

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].departure.toLowerCase().trim() === city.toLowerCase().trim()) {
            filteredResults.push(trips[i]);
        }
    }

    if (filteredResults.length === 0) {
        console.log("\nNo trips found leaving from this city.");
    } else {
        displayTrips(filteredResults);
    }
}

function trierTrajets(){
    for(let i=0; i<trips.length-1; i++){
        for(let j=0; j<trips.length-i-1; j++){
            if(trips[j].price>trips[j+1].price){
                let temp=trips[j];
                trips[j]=trips[j+1];
                trips[j+1]=temp;
            }
        }
    }
    for(let i=0; i<trips.length; i++){
        console.log(`${trips[i].departure} -> ${trips[i].destination} : ${trips[i].price} DH`);
    }
}