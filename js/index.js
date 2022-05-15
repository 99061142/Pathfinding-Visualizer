const RUN_BUTTON = document.getElementById("run-button");

// For every algorithm option inside the navigation
document.getElementById("algorithm-dropdown").querySelectorAll("button").forEach(algorithmButton => {
    // If the user clicks on an algorithm option
    algorithmButton.onclick = () => {
        const ALGORITHM_NAME = algorithmButton.innerText;
        const RUN_BUTTON_FUNCTION = `BOARD.make_path('${ALGORITHM_NAME.toLowerCase()}')`;

        RUN_BUTTON.setAttribute("onclick", RUN_BUTTON_FUNCTION);
        RUN_BUTTON.innerText = `Run ${ALGORITHM_NAME}`;
    }
})

// For every speed option inside the navigation
document.getElementById("speed-dropdown").querySelectorAll("button").forEach(speedButton => {
    // If the user clicks on an speed option
    speedButton.onclick = () => {
        BOARD.speed_time = speedButton.innerText.toLowerCase(); // Update the speed value
    }
})