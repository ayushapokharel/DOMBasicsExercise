///1.
const xMen=document.getElementById(`x-men`);
//2.
const center=document.getElementsByClassName(`center`);
//3.
const batman=document.querySelector(`#batman`);
//4.
const h3s = document.querySelectorAll(`h3`);
//5. a, b
const h1 = document.querySelector(`h1`);
h1.innerText = `The Best Animated Superhero TV Shows Ever!`;
//6. a, b
const honorableMentions = document.getElementById(`honorable-mentions`);
honorableMentions.innerHTML = `<p>OTHER GREAT SHOWS</p>`;
//7 a,b
const aTag = document.querySelector(`a`);
aTag.href = "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/";
//8.
h1.classList.add(`background`, `text-color`);
//9
h1.classList.remove(`background`)
//10 a,b,c 
const h4 = document.createElement(`h4`);
h4.innerText = "Is Avatar: The Last Airbender A Superhero Show?";
const body = document.querySelector(`body`);
body.prepend(h4);
//11 a,b,c 

const h5 = document.createElement(`h5`);
h5.innerText = "Heroes in a half shell Turtle Power!";
aTag.insertAdjacentElement(`afterend`, h5);

//12.
const li = document.querySelector(`ul>li`);

li.remove();

//BONUS
//13 a, b 
const vid = document.querySelectorAll(`div`);
document.querySelectorAll(`div`).forEach(function (elem){
    elem.classList.toggle(`background`);
});
//or

/*const btnt = document.createElement(`input`);
btnt.type = `checkbox`;

h1.insertAdjacentElement("afterend", btnt);

btnt.onclick = () =>{
    
for(let z=0; z<vid.length; z++){
    vid[z].classList.toggle(`background`);
}
};
//or
 for(d of divs)
      d.classList.toggle(`background`);
 }
 */
//14. a, b
const avengers = [
    "Forever", 
    "Fight", 
    "As", 
    "One", 
    "AVENGERS", 
    "ASSEMBLE!"
];
for (item of avengers){
    const newSpan = document.createElement(`span`);
    newSpan.innerText = item;
    body.insertAdjacentElement(`beforeend`, newSpan);
}
    
//or
/*const newRay = document.createElement(`span`);

function adding (a){
    for(i=0; i<a.length; i++){
        newRay.innerText += a[i]+ ` `;
    }
    body.append(newRay);
}

adding(avengers);*/

//or
 for(a of avengers){
          body.append(a + ` `);
 }
  
   