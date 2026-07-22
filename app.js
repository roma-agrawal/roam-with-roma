// ========================================
// Roam with Roma v1.0
// App Controller (Part A)
// ========================================

const screen = document.getElementById("screen");

let currentPage = "home";

// -------------------------------
// Countdown
// -------------------------------

function updateCountdown() {

    const today = new Date();

    const start = new Date(trip.startDate);

    const diff = start - today;

    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    const countdown = document.getElementById("tripCountdown");

    if (days > 0) {

        countdown.innerHTML = days + " Days to Switzerland";

    }
    else if (days === 0) {

        countdown.innerHTML = "Your trip starts today!";

    }
    else {

        countdown.innerHTML = "Enjoy Switzerland 🇨🇭";

    }

}

// -------------------------------
// Bottom Navigation
// -------------------------------

function setActiveButton(page){

    document
        .querySelectorAll(".bottomNav button")
        .forEach(btn=>btn.classList.remove("active"));

    if(page==="home")
        document.getElementById("homeBtn").classList.add("active");

    if(page==="trip")
        document.getElementById("tripBtn").classList.add("active");

    if(page==="budget")
        document.getElementById("budgetBtn").classList.add("active");

    if(page==="more")
        document.getElementById("moreBtn").classList.add("active");

}

function navigate(page){

    currentPage = page;

    setActiveButton(page);

    switch(page){

        case "home":
            renderHome();
            break;

        case "trip":
            renderTrip();
            break;

        case "budget":
            renderBudget();
            break;

        case "more":
            renderMore();
            break;

    }

}

// -------------------------------
// HOME
// -------------------------------

function renderHome(){

    const template =
        document.getElementById("home-template");

    screen.innerHTML = template.innerHTML;

    document.getElementById("tripDays").innerHTML =
        trip.days.length;

    const list =
        document.getElementById("upcomingDays");

    list.innerHTML = "";

    trip.days.forEach(day=>{

        list.innerHTML += `

        <div class="tripCard"
             onclick="openDay('${day.id}')">

            <div class="tripIcon">

                ${day.icon}

            </div>

            <div class="tripInfo">

                <h3>${day.date}</h3>

                <p>${day.title}</p>

            </div>

            <div class="tripArrow">

                ›

            </div>

        </div>

        `;

    });

}

// -------------------------------
// ITINERARY
// -------------------------------

function renderTrip(){

    const template =
        document.getElementById("trip-template");

    screen.innerHTML = template.innerHTML;

    const list =
        document.getElementById("tripList");

    list.innerHTML = "";

    trip.days.forEach(day=>{

        list.innerHTML += `

        <div class="tripCard"
             onclick="openDay('${day.id}')">

            <div class="tripIcon">

                ${day.icon}

            </div>

            <div class="tripInfo">

                <h3>${day.date}</h3>

                <p>${day.title}</p>

            </div>

            <div class="tripArrow">

                ›

            </div>

        </div>

        `;

    });

}

// -------------------------------
// DAY DETAILS
// -------------------------------

function openDay(id){

    const day =
        trip.days.find(d=>d.id===id);

    if(!day) return;

    screen.innerHTML = `

    <button class="backBtn"
        onclick="navigate('trip')">

        ← Back

    </button>

    <section class="hero">

        <div class="heroOverlay">

            <h2>${day.icon} ${day.title}</h2>

            <p>${day.date}</p>

        </div>

    </section>

    <section
        class="section"
        style="margin-top:24px;">

        ${day.timeline.map(item=>`

        <div class="timelineCard">

            <div class="timelineIcon">

                ${item.icon}

            </div>

            <div class="timelineContent">

                <h4>${item.title}</h4>

                <p>${item.subtitle}</p>

            </div>

            <div class="timelineTime">

                ${item.time}

            </div>

        </div>

        `).join("")}

    </section>

    `;

}

// -------------------------------
// Placeholder
// (Completed in Part B)
// -------------------------------

// ========================================
// BUDGET
// ========================================

function renderBudget(){

    const template =
        document.getElementById("budget-template");

    screen.innerHTML =
        template.innerHTML;

    const totalINR =
        trip.budget.flights +
        trip.budget.hotels +
        trip.budget.food +
        trip.budget.misc;

    document.getElementById("budgetContent").innerHTML = `

        <div class="budgetCard">

            <h1>₹${totalINR.toLocaleString("en-IN")}</h1>

            <p>Total Planned Budget</p>

        </div>

        <div class="budgetItem">

            <span>✈ Flights</span>

            <strong>₹${trip.budget.flights.toLocaleString("en-IN")}</strong>

        </div>

        <div class="budgetItem">

            <span>🏨 Hotels</span>

            <strong>₹${trip.budget.hotels.toLocaleString("en-IN")}</strong>

        </div>

        <div class="budgetItem">

            <span>🍽 Food</span>

            <strong>₹${trip.budget.food.toLocaleString("en-IN")}</strong>

        </div>

        <div class="budgetItem">

            <span>🎁 Miscellaneous</span>

            <strong>₹${trip.budget.misc.toLocaleString("en-IN")}</strong>

        </div>

        <div class="budgetItem">

            <span>🚗 Car Rental</span>

            <strong>CHF ${trip.budget.carRentalCHF}</strong>

        </div>

    `;

}

// ========================================
// MORE
// ========================================

function renderMore(){

    const template =
        document.getElementById("more-template");

    screen.innerHTML =
        template.innerHTML;

}

// ========================================
// FLIGHTS
// ========================================

function showFlights(){

    screen.innerHTML = `

    <button class="backBtn"
        onclick="navigate('more')">

        ← Back

    </button>

    <h2 class="pageTitle">

        ✈ Flights

    </h2>

    ${trip.flights.map(f=>`

        <div class="tripCard">

            <div class="tripIcon">

                ✈️

            </div>

            <div class="tripInfo">

                <h3>${f.sector}</h3>

                <p>${f.flight}</p>

                <p>${f.departure}</p>

                <p>${f.arrival}</p>

            </div>

        </div>

    `).join("")}

    `;

}

// ========================================
// HOTELS
// ========================================

function showHotels(){

    screen.innerHTML = `

    <button class="backBtn"
        onclick="navigate('more')">

        ← Back

    </button>

    <h2 class="pageTitle">

        🏨 Hotels

    </h2>

    ${trip.hotels.map(h=>`

        <div class="tripCard">

            <div class="tripIcon">

                🏨

            </div>

            <div class="tripInfo">

                <h3>${h.name}</h3>

                <p>${h.dates}</p>

                <p>${h.nights} Nights</p>

            </div>

        </div>

    `).join("")}

    `;

}

// ========================================
// PACKING
// ========================================

function showPacking(){

    screen.innerHTML = `

    <button class="backBtn"
        onclick="navigate('more')">

        ← Back

    </button>

    <h2 class="pageTitle">

        🎒 Packing List

    </h2>

    ${trip.packing.map(item=>`

        <div class="tripCard">

            <div class="tripIcon">

                ✅

            </div>

            <div class="tripInfo">

                <h3>${item}</h3>

            </div>

        </div>

    `).join("")}

    `;

}

// ========================================
// EMERGENCY
// ========================================

function showEmergency(){

    screen.innerHTML = `

    <button class="backBtn"
        onclick="navigate('more')">

        ← Back

    </button>

    <h2 class="pageTitle">

        📞 Emergency

    </h2>

    <div class="budgetItem">

        <span>🚓 Police</span>

        <strong>${trip.emergency.police}</strong>

    </div>

    <div class="budgetItem">

        <span>🚑 Ambulance</span>

        <strong>${trip.emergency.ambulance}</strong>

    </div>

    <div class="budgetItem">

        <span>🚒 Fire</span>

        <strong>${trip.emergency.fire}</strong>

    </div>

    <div class="budgetItem">

        <span>🚗 Roadside</span>

        <strong>${trip.emergency.roadside}</strong>

    </div>

    `;

}

// ========================================
// ABOUT
// ========================================

function showAbout(){

    screen.innerHTML = `

    <button class="backBtn"
        onclick="navigate('more')">

        ← Back

    </button>

    <h2 class="pageTitle">

        ℹ About

    </h2>

    <div class="tripCard">

        <div class="tripInfo">

            <h3>Roam with Roma v1.0</h3>

            <p>

            Switzerland Trip Planner

            <br><br>

            Built especially for Roma's
            Switzerland Adventure 2026.

            </p>

        </div>

    </div>

    `;

}

// ========================================
// REGISTER SERVICE WORKER
// ========================================

if("serviceWorker" in navigator){

    window.addEventListener("load",()=>{

        navigator.serviceWorker
        .register("service-worker.js");

    });

}
// -------------------------------
// Start App
// -------------------------------

updateCountdown();

navigate("home");
