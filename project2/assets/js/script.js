let dark = document.getElementById('dark');

let light = document.getElementById('light');

let light_bg = document.querySelector('.mode-l');
let dark_bg = document.querySelector('.mode-d');

let tog1 = document.querySelector('.toggle1');
let tog2 = document.querySelector('.toggle2');

let element2 = document.querySelectorAll('.nav');
// let element3 = document.querySelectorAll('.hover').className += ':hover'

// add class + hover efrfect

let sev = document.querySelectorAll('.services');

dark.addEventListener('click', ()=>{
   for(i = 0; i<= sev.length; i++){
    sev[i].classList.add('service');
   }

   

// element3.addEventListener('click', ()=>{
    
//  });
})



dark.addEventListener('click', ()=>{
    for( i= 0; i<=element2.length; i++) {
        element2[i].style.color = '#fff';
        element2[i].style.color.hover = 'red';
        document.body.style.backgroundColor = "#000";
        light_bg.style.color = '#fff';
        tog1.classList.add('mode-d-remove');
        tog1.classList.remove('darkborder');
        tog2.classList.add('lightborder');
        
        tog2.classList.remove('mode-l-remove');
    }

    for(i = 0; i<= element3.length; i++){
        element3[i].style.color = 'red';
      }
});

light.addEventListener('click', () => {
    for( i= 0; i<=element2.length; i++) {
        element2[i].style.color = '#000';
        document.body.style.backgroundColor = "#fff";
        dark_bg.style.color = '#000';
        tog1.classList.remove('mode-d-remove');
        tog2.classList.remove('lightborder');
        tog2.classList.add('mode-l-remove');
    }
    
});




