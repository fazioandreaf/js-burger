var calculatejs = document.getElementById('calculate');
var couponArr= [ 'BRS4AQ9CW6', 'LALUJ3ER9P', '2FTGNQVGRC', '374HKEZ243']
var priceTot;
calculatejs.addEventListener('click',function(){
    var priceTot=5;
    var namejs = document.getElementById('name');
    if(namejs.value == '') {
        alert('You not write the name of burger, please retry')
    }
    var burgerName = namejs.value;
    var liIngredients = document.getElementsByClassName('checkboxIngredients');
    for (i=0; i<liIngredients.length;i++){
        var liIngredientsOnce=liIngredients[i];
        if (liIngredientsOnce.checked){
            priceTot += parseInt(liIngredientsOnce.dataset.price)
        }
    }
    // parte del coupon
    var couponjs= document.getElementById('coupon').value;
    console.log(couponjs);
    for(i=0; i<couponArr.length;i++) {
        if(couponjs==couponArr[i]) {
            priceTot = Math.round(priceTot*0.8);

        }
    }
    // occuparci nell eliminare l'elemneto coupon gia usato




    console.log(priceTot);
    document.getElementById('finalprice').innerHTML = '€' + priceTot;
})