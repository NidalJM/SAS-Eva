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

const tickets = [{    id: 1,
    passengerName: 'Nidal',
    tripId: 1,
    seatNumber: 1,
    price: 25
  },
  {    id: 2,
    passengerName: 'Bary',
    tripId: 1,
    seatNumber: 2,
    price: 25
  },
  {  id: 3,
    passengerName: 'Ahmed',
    tripId: 1,
    seatNumber: 1,
    price: 25
  }]; //Constant To store Tickets on

// Etape 1 - Fonction Menu Principal
function mainMenu() {
    let choice = -1; // Initialisation du controleur de boucle

    do {
        console.log("\n==================================");
        console.log("        RAILWAY MANAGER           ");
        console.log("==================================");
        console.log("1. Afficher les trajets");
        console.log("2. Acheter un billet");
        console.log("3. Afficher les billets");
        console.log("4. Annuler un billet");
        console.log("5. Rechercher un billet");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        
        console.log("0. Quitter");
        console.log("----------------------------------");

        choice = Number(prompt("Votre choix : "));

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
                console.log("\nMerci d'avoir utilise Railway Manager. Au revoir !");
                break;
            default:
                console.log("\nOption invalide. Veuillez choisir un nombre entre 0 et 7.");
        }
    } while (choice !== 0);
}

// Lancer l'application
mainMenu();

// Etape 3 - Affichage des Trajets
function displayTrips(arr) {
    console.log();
    console.log(`---------------------------------------`);
    console.log(`=== TRAJETS DISPONIBLES ===`);
    for (let i = 0; i < arr.length; i++) {
        console.log(`#${i + 1} ${arr[i].departure} -> ${arr[i].destination}`);
        console.log(`Depart : ${arr[i].departureTime}`);
        console.log(`Arrivee : ${arr[i].arrivalTime}`);
        console.log(`Prix : ${arr[i].price} DH`);
        console.log(`Places disponibles : ${arr[i].availableSeats}`);
        console.log(``);
    }
}

// Etape 4 - Achat de Billets
function purchaseticket() {
    let passengername = prompt(`Veuillez entrer votre nom : `); // Nom du passager
    let routeid = Number(prompt(`Veuillez entrer l'ID du trajet : `)); // ID du trajet

    // Recherche du trajet correspondant
    let trip = null;
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === routeid) {
            trip = trips[i];
            break;
        }
    }
    // Verification de l'existence du trajet
    if (!trip) {
        console.log(`Trajet non trouve.`);
        return;
    }
    // Verification des places disponibles
    if (trip.availableSeats <= 0) {
        console.log("Train complet.");
        return;
    }

    // Calcul du numero de siege
    let soldSeatsForThisTrip = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].tripId === trip.id) {
            soldSeatsForThisTrip++;
        }
    }
    const seatNumber = soldSeatsForThisTrip + 1;
    
    // Structure du billet
    const ticket = {
        id: ticketid++,
        passengerName: passengername,
        tripId: trip.id,
        seatNumber: seatNumber,
        price: trip.price
    };

    trip.availableSeats -= 1;
    tickets.push(ticket);

    console.log("\nBillet me achete avec succes.\n");
    console.log(`Billet #${ticket.id}`);
    console.log(`Passager : ${ticket.passengerName}`);
    console.log(`Trajet : ${trip.departure} → ${trip.destination}`);
    console.log(`Siege : ${ticket.seatNumber}`);
    console.log(`Prix : ${ticket.price} DH`);
}

// Etape 5 - Affichage des Billets
function DisplayTickets() {
    console.log(`=== BILLETS ===`);

    // Verification de l'existence des billets
    if (tickets.length === 0) {
        console.log(`Aucun billet enregistre.`);
        return;
    }

    // Parcours de chaque billet enregistre
    for (let i = 0; i < tickets.length; i++) {
        const ticket = tickets[i];
        let trip = null;

        // Recherche du trajet correspondant via l'ID du trajet
        for (let j = 0; j < trips.length; j++) {
            if (trips[j].id === ticket.tripId) {
                trip = trips[j];
                break;
            }
        }
        // Affichage des details du billet
        console.log(`\nBillet #${ticket.id}`);
        console.log(`Passager : ${ticket.passengerName}`);
        console.log(`Trajet : ${trip ? trip.departure : 'N/A'} → ${trip ? trip.destination : 'N/A'}`);
        console.log(`Siege : ${ticket.seatNumber}`);
        console.log(`Prix : ${ticket.price} DH`);
    }
}

// Etape 6 - Annuler un Billet
function cancelTicket() {
    console.log("\n=== ANNULER UN BILLET ===");
    let ticketIdInput = Number(prompt("ID du billet : "));

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
        console.log("Billet non trouve.");
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

    console.log("\nBillet annule avec succes.");
}

// Etape 7 - Rechercher un Billet
function searchforticket() {
    let searchid = Number(prompt(`Entrez l'ID de votre billet : `));
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

            console.log(`\nBillet #${currentTicket.id}`);
            console.log(`Passager : ${currentTicket.passengerName}`);
            console.log(`Trajet : ${trip ? trip.departure : 'N/A'} → ${trip ? trip.destination : 'N/A'}`);
            console.log(`Siege : ${currentTicket.seatNumber}`);
            console.log(`Prix : ${currentTicket.price} DH`);
            break;
        }
    }

    if (!found) {
        console.log("Billet non trouve.");
    }
}

// Etape 8 - Filtrer les Trajets
function filterTrips() {
    console.log("\n=== FILTRER LES TRAJETS PAR VILLE DE DEPART ===");
    let city = prompt("Entrez la ville de depart : ");

    let filteredResults = [];

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].departure.toLowerCase().trim() === city.toLowerCase().trim()) {
            filteredResults.push(trips[i]);
        }
    }

    if (filteredResults.length === 0) {
        console.log("\nAucun trajet trouve au depart de cette ville.");
    } else {
        displayTrips(filteredResults);
    }
}

// Trier les trajets par prix
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