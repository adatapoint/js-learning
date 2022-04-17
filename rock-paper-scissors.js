

var scissors = "scissors"
var rock = "rock"
var paper = "paper"
var choices = [scissors, rock, paper]

function getCpuChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function getResult(userChoice, cpuChoice) {
    switch (userChoice) {
        case "scissors":
            switch (cpuChoice) {
                case "paper":
                    return -1;
                case "rock":
                    return 1
            }
            break;
        case "paper":
            switch (cpuChoice) {
                case "scissors":
                    return 1;
                case "rock":
                    return -1
            }
            break;
        case "rock":
            switch (cpuChoice) {
                case "scissors":
                    return -1;
                case "paper":
                    return 1;
            }
            break;
        default:
            return 0;
            break;
    }

}

function play(userChoice) {

    var cpuChoice = getCpuChoice()

    console.log("CPU Choice: " + cpuChoice)
    console.log("USER Choice: " + userChoice)

    switch (getResult(userChoice, cpuChoice)) {
        case -1:
            console.log("User wins")
            break;
        case 0:
            console.log("It's a tie")
            break;
        case 1:
            console.log("CPU wins")
            break;
    }
}
