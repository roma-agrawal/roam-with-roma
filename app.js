const tripDate = new Date("2026-08-17T07:00:00");

const today = new Date();

const diff = tripDate - today;

const days = Math.ceil(diff/(1000*60*60*24));

document.getElementById("countdown").innerHTML =
days + " Days to Switzerland ✈️";

if('serviceWorker' in navigator){

navigator.serviceWorker.register('service-worker.js');

}
