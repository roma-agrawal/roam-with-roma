const screen = document.getElementById("screen");

// ---------- Countdown ----------
function updateCountdown() {

    const tripDate = new Date(trip.startDate);

    const today = new Date();

    const diff = tripDate - today;

    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    document.getElementById("tripCountdown").innerHTML =
        `${days} Days to Switzerland ✈️`;

}

// ---------- Navigation ----------

function navigate(page){

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

// ---------- Home ----------

function renderHome(){

screen.innerHTML=`

<div class="hero">

<h2>${trip.title}</h2>

<p>17 Aug – 25 Aug 2026</p>

<button class="primaryBtn" onclick="navigate('trip')">

Open My Trip →

</button>

</div>

<div class="section">

<h3>Upcoming</h3>

<div class="cards">

${trip.days.slice(0,4).map(day=>`

<div class="tripCard">

<div class="emoji">${day.icon}</div>

<div>

<h4>${day.title}</h4>

<p>${day.date}</p>

</div>

</div>

`).join("")}

</div>

</div>

`;

}

// ---------- Trip ----------

function renderTrip(){

screen.innerHTML=`

<h2 class="pageTitle">

My Switzerland Trip

</h2>

<div class="cards">

${trip.days.map(day=>`

<div class="tripCard">

<div class="emoji">

${day.icon}

</div>

<div>

<h3>Day ${day.day}</h3>

<p>${day.date}</p>

<h4>${day.title}</h4>

</div>

</div>

`).join("")}

</div>

`;

}

// ---------- Budget ----------

function renderBudget(){

const total=

trip.budget.flights+

trip.budget.hotels+

trip.budget.food+

trip.budget.misc;

screen.innerHTML=`

<h2 class="pageTitle">

Budget

</h2>

<div class="budgetCard">

<h1>

₹${total.toLocaleString("en-IN")}

</h1>

<p>Estimated Budget (excluding car rental)</p>

</div>

<div class="cards">

<div class="tripCard">

Flights

₹${trip.budget.flights.toLocaleString("en-IN")}

</div>

<div class="tripCard">

Hotels

₹${trip.budget.hotels.toLocaleString("en-IN")}

</div>

<div class="tripCard">

Food

₹${trip.budget.food.toLocaleString("en-IN")}

</div>

<div class="tripCard">

Misc

₹${trip.budget.misc.toLocaleString("en-IN")}

</div>

<div class="tripCard">

Car Rental

CHF ${trip.budget.carRentalCHF}

</div>

</div>

`;

}

// ---------- More ----------

function renderMore(){

screen.innerHTML=`

<h2 class="pageTitle">

More

</h2>

<div class="cards">

<div class="tripCard">

✈ Flights

</div>

<div class="tripCard">

🏨 Hotels

</div>

<div class="tripCard">

🎒 Packing

</div>

<div class="tripCard">

📞 Emergency

</div>

<div class="tripCard">

ℹ About

</div>

</div>

`;

}

// ---------- Start App ----------

updateCountdown();

navigate("home");

// ---------- Service Worker ----------

if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js");

}


function openDay(dayId){

    const day = trip.days.find(d => d.id === dayId);

    if(!day) return;

    screen.innerHTML = `

    <button class="backBtn" onclick="navigate('trip')">

        ← Back

    </button>

    <div class="hero">

        <h2>${day.icon} Day ${day.day}</h2>

        <p>${day.date}</p>

        <h3>${day.title}</h3>

    </div>

    <div class="section">

        <div class="cards">

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

        </div>

    </div>

    `;

}
