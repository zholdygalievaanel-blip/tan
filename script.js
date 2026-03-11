function scrollToSection(){
document.getElementById("calc").scrollIntoView({
behavior:"smooth"
});
}

function calculateStress(){

let income = document.getElementById("income").value
let debt = document.getElementById("debt").value

if(income == 0){
alert("Введите доход")
return
}

let ratio = debt / income

let index = Math.round(ratio * 10)

if(index > 10){
index = 10
}

let text = ""

if(index <= 3){
text = "Низкий финансовый стресс"
}

else if(index <= 6){
text = "Средний финансовый стресс"
}

else{
text = "Высокий финансовый стресс"
}

document.getElementById("result").innerText =
"Индекс: " + index + "/10 — " + text

}
