var calculatejs = document.getElementById('calculate');
var priceTot=5;
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
        if (liIngredientsOnce.checked){
            priceTot += parseInt(liIngredientsOnce.dataset.price)
        }
        console.log( priceTot)
    }
})