// select dom element with querySelector
const counterEl = document.querySelector('#counter');
const incrimentEl = document.querySelector('#incriment');
const decrimentEl = document.querySelector('#decriment');

// initial state
let counter = 0;

// event listeners
incrimentEl.addEventListener('click', () =>{
    counter++;
    counterEl.innerText = counter
})
decrimentEl.addEventListener('click', () =>{
    counter--;
    if(counter === 0 && counter<0){

       return counterEl.innerText = 0
    }
    counterEl.innerText = counter

})



