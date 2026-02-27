function calculateShipCost(){
    const element = document.getElementById('cost');
    console.log(typeof element.value);
    //string value


    let finalValue = Number(element.value) < 40 ? Number(element.value)+10 : Number(element.value);
    const totalCost = document.querySelector('.js-total');
    totalCost.innerText = "$"+finalValue;

}