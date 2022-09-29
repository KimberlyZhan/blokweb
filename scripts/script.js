// JavaScript Document
console.log("hi");

var achtergrondMuziek = document.querySelector("#achtergrond-geluid");
var geluidIcoon = document.querySelector(".wel-geluid-icoon");
var muziekStatus = "aan";

// function muziekjeAan() {
//     geluidIcoon.src = "images/geenGeluid.png";
//     muziekStatus = "uit";

//     achtergrondMuziek.pause();
// }

function muziekjeAan() {
    if (muziekStatus == "uit") {
        geluidIcoon.src = "images/welGeluid.png";
        achtergrondMuziek.play();
        muziekStatus = "aan"
    } else {
        geluidIcoon.src = "images/geenGeluid.png";
        achtergrondMuziek.pause();
        muziekStatus = "uit";
    }
}

geluidIcoon.addEventListener("click", muziekjeAan);

