const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const State = {
    START: "START",
    PLAYING: "PLAYING",
    GAME_OVER: "GAME OVER",
    EXIT: "EXIT"
};

let state = State.START;

function runStateMachine() {
    console.log(`${state} SCREEN`);
    rl.question("Enter Command: ", (command) => {
        switch (state) {
            case State.START:
                if (command === "PLAY") state = State.PLAYING;
                else if (command === "EXIT") state = State.EXIT;
                break;
            case State.PLAYING:
                if (command === "LOSE") state = State.GAME_OVER;
                break;
            case State.GAME_OVER:
                if (command === "RESTART") state = State.START;
                else if (command === "EXIT") state = State.EXIT;
                break;
        }
        if (state !== State.EXIT) {
            runStateMachine();
        } else {
            console.log("EXIT SCREEN");
            rl.close();
        }
    });
}

runStateMachine();
