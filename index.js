//document.getElementById("count-el").innerText = 5

let count = 0
let countEl = document.getElementById("count-el")
let prevmEl = document.getElementById("prev-msg-el")

function increment() {
    //console.log("The button was clicked")
    count += 1
    countEl.innerText = count    
}

function save() {
    let countStr = count + " - "
    prevmEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

