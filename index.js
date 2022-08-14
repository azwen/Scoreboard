// let homeScoreBtnOne = document.getElementById("homeScoreOneBtn")
let homeScoreEl = document.getElementById("home-score")
homeScore = 0

function increaseOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}


function increaseThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let guestScoreEl = document.getElementById("guest-score")
guestScore = 0

function increaseOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}


function increaseTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}