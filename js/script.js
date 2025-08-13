
let button = document.querySelectorAll(".btnlike")
let count = document.querySelectorAll(".like")

for(let i=0; i<button.length; i++){
    button[i].addEventListener('click', function(){
        count[i].textContent++;
    })
}