
function favcat() {
    let text;
    let favCat = prompt("what's your favorite cat");
    switch (favCat) {
        case "Torti":
            text = "Tortis are great!";
            alert(text);
            break;
        case "Tuxedo":
            text = "Tuxedos are amazing!";
            alert(text);
            break;
        case "Orange":
            text = "YESSSS";
            alert(text);
            break;
        default:
            text = "I don't know that one";
            alert(text);
            favcat();
    }

}
favcat();

function catPics() {
   let catPics = prompt ("how many cats do you have");
   for (let i = 0; i < catPics; i++) {
       document.write ('<img class="img" src="https://placekitten.com/200/300" alt="stupid cute">')
   }
}

catPics();
