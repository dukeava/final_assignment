function startAdventure() {
    let choice1 = prompt("You wake up in a dark room. Do you 'explore' or 'stay'?");

    if (choice1 === 'explore') {
        let choice2 = prompt("You find a door. Do you 'open' it or 'ignore' it?");
        if (choice2 === 'open') {
            alert("You find a treasure chest! You win!");
        } else {
            alert("You decide to stay in the room. Unfortunately, you run out of supplies. Game over.");
        }
    } else {
        alert("You decided to stay. Hours pass, and you eventually fall asleep. Game over.");
    }
}
