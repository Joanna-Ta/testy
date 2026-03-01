// Dziedzoczenie
class Rentgenodiagnostyka {
    constructor(lampa, detektor) {
        this.lampa = lampa;
        this.detektor = detektor;
    }

    ekspozycja() {
        console.log(`W klasycznej rentgenodiagnostyce ${this.lampa} wytwarza promienie X, które trafiają na ${this.detektor} tworząc obraz diagnostyczny.`);
    }
}
class Tomografia extends Rentgenodiagnostyka {
    constructor(lampa, detektor, rotator) {
        // super() wywołuje konstruktor klasy Rentgenodiagnostyka
        super(lampa, detektor);
        this.rotator = rotator;
    }
   ekspozycjact() {
        console.log(`W tomografii komputerowej ${this.lampa} obracana przes ${this.rotator} wytwarza promienie X, które trafiają na ${this.detektor}t tworząc trójwymiarowy obraz diagnostyczny.`);
    }
}
const badanie = new Rentgenodiagnostyka("lampa rentgenowska", "detektor");
const tomografia = new Tomografia("lampa rentgenowska", "detektor", "rotator");
badanie.ekspozycja();
tomografia.ekspozycjact();