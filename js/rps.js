var compChoiceIndex;

function rock() {
    rpsPlayerImg.src = "../images/rps-rock.png";
    compChoiceIndex = Math.floor(Math.random()*3) + 1;
    switch (compChoiceIndex) {
        case 1: 
            rpsComputerImg.src = "../images/rps-paper.png";
            break;
        case 2: 
            rpsComputerImg.src = "../images/rps-scissors.png";
            break;
        case 3: 
            rpsComputerImg.src = "../images/rps-rock.png";
            break;
    }
}

function paper() {
    rpsPlayerImg.src = "../images/rps-paper.png";
    compChoiceIndex = Math.floor(Math.random()*3) + 1;
    switch (compChoiceIndex) {
        case 1: 
            rpsComputerImg.src = "../images/rps-paper.png";
            break;
        case 2: 
            rpsComputerImg.src = "../images/rps-scissors.png";
            break;
        case 3: 
            rpsComputerImg.src = "../images/rps-rock.png";
            break;
    }
}

function scissors() {
    rpsPlayerImg.src = "../images/rps-scissors.png";
    compChoiceIndex = Math.floor(Math.random()*3) + 1;
    switch (compChoiceIndex) {
        case 1: 
            rpsComputerImg.src = "../images/rps-paper.png";
            break;
        case 2: 
            rpsComputerImg.src = "../images/rps-scissors.png";
            break;
        case 3: 
            rpsComputerImg.src = "../images/rps-rock.png";
            break;
    }
}

function reset() {
    rpsPlayerImg.src = "../images/rps-default-img.png";
    rpsComputerImg.src = "../images/rps-default-img.png";
}