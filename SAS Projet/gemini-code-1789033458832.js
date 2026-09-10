const trips = [
    { id: 1, departure: "Safi", destination: "Youssoufia", departureTime: "07:30", arrivalTime: "08:30", price: 25, availableSeats: 50 },
    { id: 2, departure: "Safi", destination: "Marrakech", departureTime: "08:00", arrivalTime: "10:30", price: 90, availableSeats: 50 },
    { id: 3, departure: "Safi", destination: "Casablanca", departureTime: "09:00", arrivalTime: "13:00", price: 140, availableSeats: 50 },
    { id: 4, departure: "Youssoufia", destination: "Marrakech", departureTime: "09:15", arrivalTime: "11:00", price: 65, availableSeats: 50 },
    { id: 5, departure: "Youssoufia", destination: "Casablanca", departureTime: "10:00", arrivalTime: "13:30", price: 110, availableSeats: 50 },
    { id: 6, departure: "Marrakech", destination: "Casablanca", departureTime: "11:30", arrivalTime: "14:30", price: 120, availableSeats: 50 },
    { id: 7, departure: "Marrakech", destination: "Rabat", departureTime: "12:00", arrivalTime: "16:00", price: 150, availableSeats: 50 },
    { id: 8, departure: "Casablanca", destination: "Rabat", departureTime: "14:00", arrivalTime: "15:15", price: 40, availableSeats: 50 },
    { id: 9, departure: "Casablanca", destination: "Kenitra", departureTime: "15:00", arrivalTime: "16:45", price: 55, availableSeats: 50 },
    { id: 10, departure: "Rabat", destination: "Kenitra", departureTime: "16:00", arrivalTime: "16:45", price: 30, availableSeats: 50 },
    { id: 11, departure: "Rabat", destination: "Fes", departureTime: "17:00", arrivalTime: "19:30", price: 95, availableSeats: 50 },
    { id: 12, departure: "Kenitra", destination: "Fes", departureTime: "17:30", arrivalTime: "20:00", price: 85, availableSeats: 50 },
    { id: 13, departure: "Fes", destination: "Meknes", departureTime: "08:30", arrivalTime: "09:20", price: 35, availableSeats: 50 },
    { id: 14, departure: "Fes", destination: "Oujda", departureTime: "10:00", arrivalTime: "13:30", price: 130, availableSeats: 50 },
    { id: 15, departure: "Meknes", destination: "Rabat", departureTime: "11:00", arrivalTime: "13:30", price: 80, availableSeats: 50 },
    { id: 16, departure: "Meknes", destination: "Casablanca", departureTime: "12:00", arrivalTime: "15:00", price: 105, availableSeats: 50 },
    { id: 17, departure: "Casablanca", destination: "El Jadida", departureTime: "16:30", arrivalTime: "18:00", price: 50, availableSeats: 50 },
    { id: 18, departure: "El Jadida", destination: "Safi", departureTime: "18:30", arrivalTime: "20:30", price: 60, availableSeats: 50 },
    { id: 19, departure: "Marrakech", destination: "Agadir", departureTime: "15:00", arrivalTime: "18:30", price: 100, availableSeats: 50 },
    { id: 20, departure: "Agadir", destination: "Safi", departureTime: "19:00", arrivalTime: "22:00", price: 95, availableSeats: 50 }
];

const tickets = [];
let ticketIdCounter = 1;

// Step 3 - Get Available Trips
function getTrips(arr = trips) {
    return arr.map(trip => ({ ...trip }));
}

// Step 4 - Purchase Ticket
function purchaseTicket(passengerName, routeId) {
    const trip = trips.find(t => t.id === routeId);

    if (!trip) {
        return { success: false, error: "Trip not found." };
    }

    if (trip.availableSeats <= 0) {
        return { success: false, error: "Train is full." };
    }

    const totalSeats = 50;
    const seatNumber = (totalSeats - trip.availableSeats) + 1;

    const ticket = {
        id: ticketIdCounter++,
        passengerName: passengerName,
        tripId: trip.id,
        seatNumber: seatNumber,
        price: trip.price
    };

    trip.availableSeats -= 1;
    tickets.push(ticket);

    return {
        success: true,
        ticket: ticket,
        route: {
            departure: trip.departure,
            destination: trip.destination,
            departureTime: trip.departureTime,
            arrivalTime: trip.arrivalTime
        }
    };
}

// Step 5 - Get All Tickets
function getTickets() {
    if (tickets.length === 0) {
        return { success: false, message: "No tickets saved.", data: [] };
    }

    const formattedTickets = tickets.map(ticket => {
        const trip = trips.find(t => t.id === ticket.tripId);
        return {
            ...ticket,
            departure: trip ? trip.departure : null,
            destination: trip ? trip.destination : null
        };
    });

    return { success: true, data: formattedTickets };
}

// Step 6 - Cancel a Ticket
function cancelTicket(ticketId) {
    const index = tickets.findIndex(t => t.id === ticketId);

    if (index === -1) {
        return { success: false, error: "Ticket not found." };
    }

    const [cancelledTicket] = tickets.splice(index, 1);
    const trip = trips.find(t => t.id === cancelledTicket.tripId);

    if (trip) {
        trip.availableSeats += 1;
    }

    return { success: true, message: "Ticket successfully canceled.", cancelledTicket };
}

// Step 7 - Search for a Specific Ticket
function searchForTicket(searchId) {
    const ticket = tickets.find(t => t.id === searchId);

    if (!ticket) {
        return { success: false, error: "Ticket not found." };
    }

    const trip = trips.find(t => t.id === ticket.tripId);

    return {
        success: true,
        ticket: {
            id: ticket.id,
            passengerName: ticket.passengerName,
            route: trip ? `${trip.departure} → ${trip.destination}` : "Unknown",
            seatNumber: ticket.seatNumber,
            price: `${ticket.price} DH`
        }
    };
}