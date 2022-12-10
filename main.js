// for output
const personAmount = document.getElementById("person");
const moneyAmount = document.getElementById("money");


const selectList= document.getElementById("movie");
const container = document.querySelector(".container");

container.addEventListener("click",function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
        update();
    }
})

selectList.addEventListener("change", function(e){
    update();
})

function update(){
    let money = selectList.value;

    var seatCount = container.querySelectorAll(".seat.selected").length;
    personAmount.innerText= seatCount;
    moneyAmount.innerText=money * seatCount +" TL ";
}