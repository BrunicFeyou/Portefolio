const btn= document.querySelector(".boutons")

btn.addEventListener('click' , function()  {
    alert('vous êtes redirigez')
   
})

/*const body= document.querySelector('body')
 body.style.background== null
if(body.addEventListener('click')) {
    body.classList.toggle("white")
}*/

const carte1= document.querySelector('.carte-act1')

carte1.addEventListener("mouseenter", function() {
    carte1.style.width= '50%'
    
})

carte1.addEventListener('mouseleave', function() {
    carte1.style.width= '33%'
})

const carte2= document.querySelector('.carte-act2')

carte2.addEventListener("mouseenter", function() {
    carte2.style.width= '50%'
})

carte2.addEventListener('mouseleave', function() {
    carte2.style.width= '33%'
})

const carte3= document.querySelector(".carte-act3")

carte3.addEventListener('mouseenter', function() {
    carte3.style.width= '50%'
})

carte3.addEventListener('mouseleave', function() {
    carte3.style.width= '33%'
})

/*function myfunction() {
    document.querySelector('.carte-act1').classList.add
}*/


const description= document.querySelector(".description-cartes")


carte1.addEventListener("mouseenter", function() {
    carte1.classList.add("more")
})

carte1.addEventListener("mouseleave", function() {
    carte1.classList.remove("more")
})

const description2= document.querySelector(".description2")
 
carte2.addEventListener('mouseenter', function() {
    carte2.classList.add('more1')
})

carte2.addEventListener('mouseleave', function() {
    carte2.classList.remove('more1')
})

const description3= document.querySelector('.description3')

carte3.addEventListener("mouseenter", function() {
    carte3.classList.add('more2')
})

carte3.addEventListener("mouseleave", function() {
    carte3.classList.remove('more2')
})

const qui= document.querySelector(".grand-titre")

console.log(qui);

qui.addEventListener("mouseover", function() {
    for ( let i=0; i < 5; i++) {
        qui.classList.toggle("animate")
    }
})

/*const div= document.querySelectorAll('div case')

div.addEventListener('mouseover', function() {
   for(let i=0; i< 18; i++) {
    div[i].style.width='70%'
   }
})*/  // le but de ce script était de pouvoir agrandir chaque case au passage de la souris sur la page "émissions et films" mais il y'a une erreur que je n'ai pas réussi à décoder

const buttom= document.querySelector('.plus')
buttom.addEventListener('click', function() {
const list = document.querySelector(".list");
const li = document.createElement("li");
const text = document.createTextNode("Colin Farrell a arrêté l'alcool et les drogues fin 2005, après le tournage de Miami Vice. Il a fait une cure de désintoxication après avoir pris conscience qu'il avait « franchi la ligne » au-delà de laquelle il est difficile d'arrêter seul11.Il a deux enfants nés d'unions différentes. Son premier fils, James Pádraig Farrell, né en septembre 2003 de sa relation avec le mannequin Kim Bordenave, souffre d'une maladie génétique très rare (un cas sur douze à vingt mille) appelée syndrome d'Angelman. Son deuxième garçon, Henry Tadeusz Farrell, est né en octobre 2009 de sa relation avec l'actrice et chanteuse polonaise Alicja Bachleda-Curus, qui était sa partenaire dans le film Ondine et dont il est séparé depuis octobre 2012.")
    
li.appendChild(text); 
list.appendChild(li);

 })
const film3= document.querySelector('.film3')
 let contents = film3.innerHTML;

 const body= document.querySelector(".bdy");
 const mode= document.querySelector(".nuit");
  mode.addEventListener("click", function() {
    mode.classList.toggle("nightMode");
  })



