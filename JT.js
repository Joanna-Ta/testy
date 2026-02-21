// ex.1 Create an array, retrieve last element-->
const modalities = ["CT", "MRI", "CR", "DR"]
let lastmodality = modalities[modalities.length -1];
console.log(lastmodality)
// ex.2 temperature warning
const temp = -2; 
if (temp < 0) {console.log ("Mróz! Ubierz się ciepło!")}
else if (temp >= 0 && temp <= 15 ) {console.log ("Chłodno. Przyda się kurtka!")}
else {console.log ("Zostaw kurtkę w domu")}
// ex 3. loop for odd numbers
for (let x = 1; x <=20; x++) {
    if (x % 2 !== 0) {
        console.log(x);
    }
}
