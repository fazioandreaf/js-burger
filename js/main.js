var calculatejs = document.getElementById('calculate');
var priceTot;
var priceLettuce;
var priceFriedegg;
var priceTomato;
var priceCheese;
var priceMustard;
var priceKetchup;
calculatejs.addEventListener('click',function(){
    var namejs = document.getElementById('name');
    if(namejs.value == '') {
        alert('You not write the name of burger, please retry')
    }
    var burgerName = namejs.value;
    var liIngredients = document.getElementsByClassName('checkboxIngredients')
    console.dir(burgerName,liIngredients)
    for (i=0; i<liIngredients.length;i++){
        var liIngredientsOnce=liIngredients[i];
        console.log(liIngredientsOnce)
        if (liIngredientsOnce.checked){

        }
    }
})