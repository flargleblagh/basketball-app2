let homeScore = 0
let guestScore = 0
let homeStoreEl = document.getElementById("homeScore")
let guestStoreEl = document.getElementById("guestScore")

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")


function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function increaseGuestScoreOne(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}
function increaseGuestScoreTwo(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
}
function increaseGuestScoreThree(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

function resetScore(){
    homeScore = 0
    guestScore = 0
    guestStoreEl.textContent = guestScore
    homeStoreEl.textContent = homeScore
}