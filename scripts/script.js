// JavaScript Document
console.log("hi");

//------------------- voor de achtergrond muziek cooking mama -------------------//
var achtergrondMuziek = new Audio("audio/cooking_mama_bg_music.mp3");
var geluidIcoon = document.querySelector(".wel-geluid-icoon");
var muziekStatus = "uit";

function muziekjeAan() {
    if (muziekStatus == "uit") {
        geluidIcoon.src = "images/welGeluid.png";
        achtergrondMuziek.play();
        muziekStatus = "aan";
    } else {
        geluidIcoon.src = "images/geenGeluid.png";
        achtergrondMuziek.pause();
        muziekStatus = "uit";
    }
}

geluidIcoon.addEventListener("click", muziekjeAan);

//------------------------ voor kerst thema ------------------------//
var kerstCanvas = document.querySelector(".kerst-thema-canvas");
var kerstBalButton = document.querySelector(".kerst-bal-icoon");
var geenKerstButton = document.querySelector(".geen-kerst-icoon");
var sneeuwBG = document.querySelector(".sneeuw-bg");
var kerstman = document.querySelector(".kerstman-met-slee");
var kerstSter = document.querySelector(".kerst-ster");
var kerstHoek = document.querySelector(".kerst-hoekje");

var kerstMuziek = new Audio("audio/kerst_muziek.mp3");

var kerstThema = "uit";


function kerst() {
    if (kerstThema == "uit") {
        kerstBalButton.src = "images/kerst_bal.png";
        kerstMuziek.play();
        kerstThema = "aan";

        sneeuwBG.hidden = false;
        kerstman.hidden = false;
        kerstSter.hidden = false;
        kerstHoek.hidden = false;
    } else {
        kerstBalButton.src = "images/no_kerst.png";
        kerstMuziek.pause();
        kerstThema = "uit";

        sneeuwBG.hidden = true;
        kerstman.hidden = true;
        kerstSter.hidden = true;
        kerstHoek.hidden = true;
    }
}

kerstBalButton.addEventListener("click", kerst);