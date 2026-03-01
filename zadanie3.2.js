const nowyelement = document.createElement("p");
nowyelement.textContent = "Bardzo nowy element";
const contener = document.getElementById("container");
contener.appendChild(nowyelement);

const zmianakoloru2 = document.querySelector("#container p");
zmianakoloru2.style.color = "violet";

const button = document.getElementById("changeColorBtn");
const kolorowyprzycisk = document.getElementById("paragraph-for-button");

button.addEventListener("click", function() {
    kolorowyprzycisk.style.color = "violet";
});