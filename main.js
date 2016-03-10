var name = prompt("What is your name?");

var game = confirm("Hi " + name + " would you like to play a VERY SCARY Scooby Doo game?");

if (game === true) {

    var firstYes = confirm(name + ", Scooby and Shaggy enter a haunted house. You hear noises coming out from a door.  Do you give Scooby and Shaggy a \"SCOOBY SNACKS\" and go through the door?");

    if (firstYes === true) {
        var monster1 = confirm(name + ", you see a Monster that runs past, through another door!  Do you, Scooby and Shaggy eat another \"SCOOBY SNACKS\" and chase the Monster?");
        if (monster1 === true) {
            var chase1 = confirm("You have cornered the Monster and tackeled it to the ground.  Shaggy say's \"Zoinks it is wearing a mask do you take it off?\"");

            if (chase1 === true) {
                var mask = alert("You see that it Hillary Clinton and she say's \"Scaring America would have worked if it wasn't for you meddling kid!\" " + name + "You won the game!  Scooby Dooby Doo!")
            } else {
                alert("Shaggy takes of the mask and says\"Zoinks it's Hillary Clinton\" and she says \"Scaring America!  Would have worked if it wasn't for you meddling kids!\" " + name + " You won the Game!  Scooby Dooby Doo!");
            }
        } else {
            alert(name + " Scooby and Shaggy run out the door, at least you still have the \"SCOOBY SNACKS\"!  Sorry " + name + " the game is over!")
        }
    } else {
        var monster2 = confirm("A Monster jumps out from the corner.  Do you run from the monster or eat another \"SCOOBY SNACKS\" and try to tackel the Monster?");

        if (monster2 === true) {
            var chase2 = confirm("You sucessfully grab the Monster and Scooby say's \" Ruh roh Raggy he is wearing a mask!\"  Do you take of the mask to reveal the real Monster?");

            if (chase2 === true) {
                alert("You see it's Donald Trump and he says \"Scaring America would have worked if it wasn't for you medeling kids!\"" + name + " You won the Game!  Scooby Dooby Doo!");
            } else {
                alert("Scooby takes of the mask and say's \"Ruh roe it's Donald Trump\" and he says \"Scaring America would have worked if it wasn't for you meddling kids\"" + name + " You won the Game!  Scooby Dooby Doo!")
            }
        } else {
            alert("You Scooby and Shaggy run out the door at least you still have the \"SCOOBY SNACKS\"!  Sorry " + name + " the game is over");
        }
    }
} else {
    alert("Too bad," + name + " maybe next time!");
}
