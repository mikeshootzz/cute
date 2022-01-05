let knopf = document.getElementById('button')
let titel = document.getElementById('titel')
let counter = 0;
function reload(){
    let random1 = Math.floor(Math.random() * 1800);
    let random2 = Math.floor(Math.random() * 500);
    knopf.style.left = random1 + 'px';
    knopf.style.bottom = random2 + 'px';
    counter++;
    if (counter === 5){
        titel.innerHTML = "You are really fucking cute :)"
    }
}