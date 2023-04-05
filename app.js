const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "#613659",];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () =>{
//console.log(document.body)

//pegar um número entre 0 - 3
const randomNumber = getRandomNumber()

document.body.style.backgroundColor = colors[randomNumber]
color.textContent = colors[randomNumber]
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}

console.log(getRandomNumber())