let puppies = [
    './images/1.jpg', 
    './images/2.jpg', 
    './images/3.jpg', 
    './images/4.jpg', 
    './images/5.jpg', 
    './images/6.jpg', 
    './images/7.jpg',
    './images/8.jpg', 
    './images/9.jpg', 
    './images/10.jpg', 
    './images/11.jpg', 
    './images/12.jpg', 
    './images/13.jpg', 
    './images/14.jpg',
    './images/15.jpg'
]

function LoadPuppy(){
   let index = Math.floor(Math.random() * puppies.length)
//    let url = "url";
   this.style.backgroundImage = "url('"+puppies[index]+"')";
  

}

container = document.querySelector("#boxes")
for(let i = 0; i < 4; i++){
    const div = document.createElement('div');
    div.innerText = "Click to see a lovely puppy";
    div.addEventListener('click',LoadPuppy)
    container.appendChild(div)
}