# SAS Final Project 1 YouCode — Managing a Train in the "Railway Manager" Console

## Introduction

You must develop a console application in JavaScript using Node.js to manage train journeys and tickets.

- The application runs only in the terminal.

- User input must be done using `prompt()` or the native `readline` module of Node.js.

**Example with `readline`:**
```js
const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js?', (answer) => {
console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();

});

```

**Example with `prompt-sync`:**
You need to install the package with: `npm install prompt-sync`
```js
var prompt = require('prompt-sync')();

var n = prompt('How many more times?');

```

The data needed to complete the project is already provided. It contains the list of paths to use in the application. You must use this data as your working basis.

**Project Data:** [gist.github.com/AzizBenMallouk](https://gist.github.com/AzizBenMallouk/31e020b92fcc710a732fae0c2adec985)

---

## 1. Main Menu

When the program starts, display:

```
==================================
RAILWAY MANAGER
====================================

1. View Trips
2. Buy a Ticket
3. View Tickets
4. Cancel a Ticket
5. Search for a Ticket
6. Filter Trips
7. Sort Trips
8. Exit

Your Choice :
```

After each operation, the program must return to the main menu.

The program only stops when the user chooses:
```
0. Quit
```

---

## 2. Routes

The routes are fixed and already saved in the program. You are not required to create or calculate new routes.

**Example:**
```js
const trips = [
{
id: 1,
departure: "Safi",
destination: "Youssoufia",
departureTime: "08:00",
arrivalTime: "09:00",
price: 25,
availableSeats: 50

},
// Other data is available in the provided file.

];

```

**Data:** [gist.github.com/AzizBenMallouk](https://gist.github.com/AzizBenMallouk/31e020b92fcc710a732fae0c2adec985)

Each trip has:

- an ID;

- a departure city;

- a destination;

- a departure time;

- an arrival time;

- a price;

- a number of available seats.

---

## 3. Displaying Trips

The user must be able to display all available trips.

**Example:**
```
=== AVAILABLE ROUTES ===

#1 Safi → Youssoufia
Departure: 08:00
Arrival: 09:00
Price: 25 DH
Available Seats: 50

#2 Youssoufia → Ben Guerir
Departure: 09:30
Arrival: 10:30
Price: 30 DH
Available Seats: 50
```

---

## 4. Purchase a Ticket

The user enters:

- Passenger Name:

- Route ID:

**Example:**
```
Passenger Name: Ahmed
Route ID: 3
```

The program must:

- search for the corresponding route;

- verify that the route exists;

- verify that at least one seat remains available;

- Create a ticket;

- Automatically assign a seat number;

- Decrease the number of available seats;

- Add the ticket to the ticket array.

Tickets are stored in:
```js
const tickets = [];

```

**Example ticket:**
```js
{
id: 1,
passengerName: "Ahmed",
tripId: 3,
seatNumber: 1,
price: 90
}
```

The ticket ID must be unique.

**If the trip does not exist:**
```
Trip not found.

```

**If no seats are available:**
```
Train full.

```

**Otherwise, example:**
```
Ticket purchased successfully.

Ticket #1
Passenger: Ahmed
Route: Safi → Marrakech
Seat: 1
Price: 90 DH
```

---

## 5. Display Tickets

The program must display all saved tickets.

**Example:**
```
=== TICKETS ===

Ticket #1
Passenger: Ahmed
Route: Safi → Marrakech
Seat: 1
Price: 90 DH

Ticket #2
Passenger: Sara
Route: Safi → Youssoufia
Seat: 1
Price: 25 DH
```

**If no ticket exists:**
```
No tickets saved.

```

---

## 6. Cancel a Ticket

The user enters: Ticket ID

The program must:

- search for the ticket;

- Verify that it exists;

- Find the associated trip;

- Delete the ticket;

- Increase the number of available seats for the trip by 1.

**Example:**
```
Ticket ID: 2

Ticket successfully canceled.

```

**If the ticket does not exist:**
```
Ticket not found.

```

---

## 7. Search for a ticket

The application must allow you to search for a ticket.

**Search by passenger name**

**Example:**
```
Passenger name: Ahmed

// The program displays all tickets belonging to Ahmed.

Ticket #3
Passenger: Ahmed
Route: Marrakech → Casablanca
Seat: 2
Price: 120 DH
```

---

## 8. Filtering Trips

Since the trips are already saved, the program simply needs to filter the `trips` array.