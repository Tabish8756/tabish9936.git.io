const billAmount = document.querySelector('#billAmount')
const serviceRate = document.querySelector('#serviceRate')
const nopeople = document.querySelector('#people')
const tipCalculate = document.querySelector('.btn-Calculate')
const exactAmount = document.querySelector('.amount')
tipCalculate.addEventListener('click', tipAmount)

function tipAmount() {
    if(serviceRate.value==NaN || billAmount.value==NaN || nopeople.value==NaN){
        alert(pleae);
    }
    else{
    const amount = serviceRate.value / 100;
    const totalTip = Math.abs((amount * billAmount.value) / nopeople.value);
        exactAmount.textContent = totalTip.toFixed(0);
    }

}










// const a=30
// const result=Math.abs(a/100);
// console.log(result);

