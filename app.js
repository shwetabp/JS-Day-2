function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

document.onclick = changeBackgroundColor;

const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya",
"Amit", "Meera", "Rajiv", "Ananya" ];

let counter = 0;
let counterTitle = document.getElementById('counter');
function nextBtn(){
    if(counter < 9){
        counter = counter + 1;
        document.getElementById('counter').innerText = names[counter];
      } else if( counter  == 9) {
        counter = 0;
        document.getElementById('counter').innerText = names[counter];
      }
}

function previousBtn(){
    if(counter > 0){
        counter = counter - 1;
        document.getElementById('counter').innerText = names[counter];
      } else if( counter  == 0) {
        counter = 9;
        document.getElementById('counter').innerText = names[counter];
      }  
}

window.onload = () => {
    document.getElementById('counter').innerText = names[0];
  }