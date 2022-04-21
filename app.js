
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
            text = "I love it";
    }

}
favcat();


const otherCheckbox = document.querySelector('#other');
cont otherText = document.querySelector('#otherValue');
otherText.style.visibility = 'hidden';

otherCheckbox.addEventListener('change', ) => {
    if(otherCheckbox.checked) {
        otherText.style.visibility = 'visible';
        otherText.value = '';
    } else {
        otherText.style.visibility = 'hidden';
    }
});