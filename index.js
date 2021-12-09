let count = 0;

const value = document.querySelector('.number');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');

decrease.addEventListener('click', function(){
    count--;
    value.innerHTML = count;
})

increase.addEventListener('click', function(){
    count++;
    value.innerHTML = count;
})

reset.addEventListener('click', function(){
    count = 0;
    value.innerHTML = count;
})