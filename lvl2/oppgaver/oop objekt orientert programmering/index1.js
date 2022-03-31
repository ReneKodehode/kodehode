//constructor  (ctrl + k + c)
function Book(tittel, forfatter, aar) {
    this.tittel = tittel;
    this.forfatter = forfatter;
    this.aar = aar;
    this.getSummary = function() {
        return `${this.tittel} er skrevet av ${this.forfatter} i ${this.aar}`;
    };
}

const Bok1 = new Book("Pippi Langstrømpe", "Astrid Lindgren", '1964');
Bok1.forfatter = "Bjørnstjerne Bjørnson"
Bok1.aar = 1945
const Bok2 = new Book("Mummidalen", "Tove Janson", "1992");
console.log(Bok2.getSummary());
console.log(Bok1.tittel)
    //console.log(Bok2.getSummary());
    //console.log(Bok2.aar)
    //Bok1.forfatter = "Henrik Ibsen";
    //console.log(Bok1.getSummary());