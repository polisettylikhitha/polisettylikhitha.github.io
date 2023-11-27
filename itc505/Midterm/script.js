// Story data
const storyData = {
    start: {
        text: "Whispers of Enchanted Forest!",
        choices: ["Enter the Enchanted Forest"],
        consequences: ["enter-forest"],
        image: "imageFiles/image_1.jpg"
    },
    "enter-forest": {
        text: "You find yourself at the entrance of the enchanted forest. Choose your destiny.",
        choices: ["Witch", "Talking Tree", "Devil"],
        consequences: ["witch", "talking-tree", "devil"],
        image: "imageFiles/image_2.jpg"
    },
    "witch": {
        text: "Encountered a Deadly Witch. Make Your Choice.",
        choices: ["Confront the Witch", "Try to Sneak Away"],
        consequences: ["confront-witch", "sneak-away"],
        image: "imageFiles/image_3.jpg"
    },
    "confront-witch": {
        text: "You bravely confront the Deadly Witch. She cackles and offers you a challenge.",
        choices: ["Accept the Challenge", "Refuse and Run"],
        consequences: ["accept-challenge", "refuse-and-run"],
        image: "imageFiles/image_5.jpg"
    },
    "accept-challenge": {
        text: "The Deadly Witch is pleased with your bravery. She grants you a magical boon.",
        choices: ["Thank the Witch", "End"],
        consequences: ["thank-witch", "end"],
        image: "imageFiles/image_6.jpg"
    },
    "thank-witch": {
        text: "You thank the Deadly Witch and continue your journey with a newfound magical power.",
        choices: ["Continue your journey"],
        consequences: ["continue-journey"],
        image: "imageFiles/image_7.jpg"
    },
    "end": {
        text: "Congratulations! You have reached the end of your enchanted journey.",
        choices: ["Play Again", "Exit"],
        consequences: ["start", "exit"],
        image: "endImage.jpg"
    },

    "talking-tree": {
        text: "You approach the wise Talking Tree. It offers you guidance in the form of a riddle.",
        choices: ["Attempt to Solve the Riddle", "Ignore and Move On"],
        consequences: ["solve-riddle", "ignore-tree"],
        image: "imageFiles/image_8.jpg"
    },

    "solve-riddle": {
        text: "Congratulations! You successfully solve the Talking Tree's riddle. It rewards you with ancient knowledge.",
        choices: ["Thank the Talking Tree", "Continue your journey"],
        consequences: ["thank-tree", "continue-journey"],
        image: "imageFiles/image_10.jpg"
    },

    "ignore-tree": {
        text: "You choose to ignore the Talking Tree's riddle. It remains silent as you move deeper into the forest.",
        choices: ["Continue your journey"],
        consequences: ["continue-journey"],
        image: "imageFiles/image_18.jpg"
    },

    "devil": {
        text: "You come face to face with the mischievous Devil. It offers you a tempting deal.",
        choices: ["Accept the Deal", "Reject and Confront"],
        consequences: ["accept-deal", "reject-and-confront"],
        image: "imageFiles/image_11.jpg"
    },

    "accept-deal": {
        text: "You accept the Devil's deal. It grants you immediate rewards, but at what cost?",
        choices: ["Enjoy the Rewards", "Regret and Seek Redemption"],
        consequences: ["enjoy-rewards", "regret-and-seek-redemption"],
        image: "imageFiles/image_14.jpg"
    },

    "enjoy-rewards": {
        text: "You revel in the immediate rewards provided by the Devil. However, the consequences may unfold later...",
        choices: ["Continue your journey"],
        consequences: ["continue-journey"],
        image: "imageFiles/image_13.jpg"
    },

    "reject-and-confront": {
        text: "You reject the Devil's tempting deal and confront it. A fierce battle ensues.",
        choices: ["Defeat the Devil", "Retreat"],
        consequences: ["defeat-devil", "retreat"],
        image: "imageFiles/image_15.jpg"
    },

    "defeat-devil": {
        text: "Congratulations! You successfully defeat the Devil. It retreats, and you continue your journey triumphantly.",
        choices: ["Continue your journey"],
        consequences: ["continue-journey"],
        image: "imageFiles/image_16.jpg"
    },

    "retreat": {
        text: "Realizing the danger, you choose to retreat from the Devil. It mocks you as you leave, but you live to fight another day.",
        choices: ["Continue your journey"],
        consequences: ["continue-journey"],
        image: "imageFiles/image_17.jpg"
    },

};


// Function to start the game
function startGame() {
    // Set initial state
    currentStage = "start";

    // Refresh page display
    updatePage();

    // Hide start container and show story container
    document.getElementById("start-container").style.display = "none";
    document.getElementById("story-container").style.display = "block";
}

// Function to update the page based on user choices
function updatePage() {
    const currentData = storyData[currentStage];
    document.getElementById("story-text").textContent = currentData.text;

    // Clear previous choices
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";

    // Display current choices
    currentData.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => makeChoice(currentData.consequences[index]);
        choicesContainer.appendChild(button);
    });

    // Display current image
    const imageContainer = document.getElementById("image-container");
    const storyImage = document.getElementById("story-image");
    storyImage.src = currentData.image;
}

// Function to handle user choices and navigate to the next stage
function makeChoice(choice) {
    currentStage = choice;
    updatePage();

    // Check if it's an ending stage
    if (!storyData[choice].choices) {
        endGame();
    }
}

// Function to end the game and display the final image
function endGame() {
    const imageContainer = document.getElementById("image-container");
    const storyImage = document.getElementById("story-image");
    storyImage.src = storyData[currentStage].image;

    // Display a message or perform any other final actions
}

// Initialize the game
let currentStage = "";
startGame();
