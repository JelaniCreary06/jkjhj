let currentGame = 0;

let activeStonePiles = [], activePlayers = [];

function init() {
    activeStonePiles.splice(0, activeStonePiles.length);
    activePlayers.splice(0, activePlayers.length);
    console.log("Initiated.")
    currentGame++;

    for (i = 0; i < 3; i++) {
        activeStonePiles.push(new StonePile(currentGame));
    }

    console.log(activeStonePiles)

    
}

class Player {
    constructor(name) {
        this._actionLog = [];
        this.name = name;
    }

    takeStones(stonePile, amount, pileNumber) {
        if (stonePile.activePile) {
            stonePile.takeStones(amount, this);
            return true;
        }
        this._actionLog.push(`${this.name} attempted to take ${amount} stones from pile ${pileNumber}`)
        return false;
    }

    get actionLog() {
        return this._actionLog;
    }
}

class StonePile {
    constructor(gameNumber) {
        this.gameNumber = gameNumber;
        this._actionLog = [];
        this._stones = 3;
        this.activePile = true;
    }

    takeStones(amount, takenBy) {
        let actionTaken = this.stones - amount >= 0 ? true : false;

        if (actionTaken) {
            this._stones -= amount;

            this.stones <= 0 ? this.activePile = false : this.activePile = true;
            this._actionLog.push(`${takenBy.name} has taken ${amount} stones.\n`)
        }
    }

    get actionLog() {
        return this._actionLog;
    }
}

document.getElementById('startGame').addEventListener('click', () => {
    hideStartButtons();
});

document.getElementById('howToPlay').addEventListener('click', () => {
    hideStartButtons();
    document.getElementById('howToPlayText').style.display = "flex";
    document.getElementById('closeButton').style.display = "flex";
});

document.getElementById('closeButton').addEventListener('click', (b) => {
    showStartButtons();
    document.getElementById('howToPlayText').style.display = "none";
    document.getElementById('closeButton').style.display = "none";
})

document.getElementById('click').addEventListener('click', () => {
    document.getElementById('toChange').src = "http://" + window.location.host + "/src/style/images/unk.png";
})

function hideStartButtons() {
    const buttonsToHide = document.querySelectorAll('.startBtn');
    console.log(buttonsToHide);

    buttonsToHide.forEach( b => {
        b.style.display = "none";
    });
}

function showStartButtons() {
    const buttonsToShow= document.querySelectorAll('.startBtn');
    console.log(buttonsToShow);

    buttonsToShow.forEach( b => {
        b.style.display = "flex";
    });
}
console.log(window.location.host)
console.log("Script loaded.");