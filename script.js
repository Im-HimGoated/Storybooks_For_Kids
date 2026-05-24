const stories = {
  willow: {
    title: "Willow & the Lost Star",
    sticker: "L",
    pages: [
      {
        text: "Willow found a sleepy star tangled in the silver leaves.",
        prompt: "Which path should Willow try first?",
        choices: ["Count the leaves", "Shake the tree", "Ask the owl"],
        answer: "Count the leaves",
        clue: "The leaves glow when you count them slowly.",
        pattern: ["★", "●", "★"],
      },
      {
        text: "The owl blinked twice and opened a tiny moonlit door.",
        prompt: "What should Willow carry through the door?",
        choices: ["A warm scarf", "A loud drum", "A heavy rock"],
        answer: "A warm scarf",
        clue: "Kind gifts open quiet doors.",
        pattern: ["●", "★", "■"],
      },
      {
        text: "Inside, every step made a soft bell sound under Willow's boots.",
        prompt: "Solve the story problem: two bells plus one bell makes?",
        choices: ["Three bells", "Five bells", "One bell"],
        answer: "Three bells",
        clue: "The path likes careful counting.",
        pattern: ["■", "■", "★"],
      },
      {
        text: "Willow lifted the star home, and the forest clapped in firefly light.",
        prompt: "How should the forest celebrate?",
        choices: ["Quiet reading party", "Endless cartoons", "Skip the ending"],
        answer: "Quiet reading party",
        clue: "Finished books leave a glow behind.",
        pattern: ["★", "■", "●"],
      },
    ],
  },
  cloud: {
    title: "Pip's Cloud Kitchen",
    sticker: "C",
    pages: [
      {
        text: "Pip stirred a cloud until it puffed into a pancake moon.",
        prompt: "Which shape did Pip make?",
        choices: ["Circle", "Triangle", "Zigzag"],
        answer: "Circle",
        clue: "Round treats roll across the sky.",
        pattern: ["●", "●", "★"],
      },
      {
        text: "Three hungry birds lined up with tiny blue plates.",
        prompt: "How many cloud bites should Pip share?",
        choices: ["Three", "One", "Ten"],
        answer: "Three",
        clue: "One bite for each patient friend.",
        pattern: ["★", "●", "■"],
      },
      {
        text: "A cinnamon breeze twirled the kitchen into a carousel.",
        prompt: "What keeps the kitchen calm?",
        choices: ["Slow stirring", "Wild jumping", "Tablet videos"],
        answer: "Slow stirring",
        clue: "Small motions can make big magic.",
        pattern: ["■", "★", "■"],
      },
      {
        text: "Pip served the moon pancakes while the clouds hummed goodnight.",
        prompt: "Pick the ending treat.",
        choices: ["Story sprinkles", "A noisy alarm", "No dessert"],
        answer: "Story sprinkles",
        clue: "Stories taste best when shared.",
        pattern: ["●", "★", "●"],
      },
    ],
  },
  reef: {
    title: "The Lantern Reef",
    sticker: "R",
    pages: [
      {
        text: "Mara followed a lantern fish past coral shaped like castles.",
        prompt: "Which coral comes next in the pattern?",
        choices: ["Tall coral", "Sleepy shell", "Bubble cloud"],
        answer: "Tall coral",
        clue: "Patterns hide in plain sight.",
        pattern: ["■", "●", "■"],
      },
      {
        text: "The reef lights flickered whenever Mara forgot to breathe slowly.",
        prompt: "How can Mara help the lights?",
        choices: ["Take a slow breath", "Splash hard", "Close the book"],
        answer: "Take a slow breath",
        clue: "Calm readers notice more.",
        pattern: ["★", "★", "●"],
      },
      {
        text: "A puzzle shell asked for the color that felt like sunrise.",
        prompt: "Which color feels like sunrise?",
        choices: ["Gold", "Gray", "Muddy green"],
        answer: "Gold",
        clue: "Warm colors can guide the way.",
        pattern: ["●", "■", "★"],
      },
      {
        text: "Mara hung the lantern high, and every fish read by its glow.",
        prompt: "What should the reef do now?",
        choices: ["Read together", "Swim away", "Turn off the lights"],
        answer: "Read together",
        clue: "A glowing ending belongs to everyone.",
        pattern: ["■", "★", "●"],
      },
    ],
  },
};

let currentStoryKey = "willow";
let currentPage = 0;
let stars = 2;
let stickers = new Set(["L"]);
let patternIndex = 0;
let speechTimer;

const storybook = document.querySelector("#storybook");
const storyTitle = document.querySelector("#storyTitle");
const storyText = document.querySelector("#storyText");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const clueBox = document.querySelector("#clueBox");
const choices = document.querySelector("#choices");
const activityPrompt = document.querySelector("#activityPrompt");
const patternRow = document.querySelector("#patternRow");
const starsEarned = document.querySelector("#starsEarned");
const stickersEarned = document.querySelector("#stickersEarned");
const stickerTray = document.querySelector("#stickerTray");

function getPage() {
  return stories[currentStoryKey].pages[currentPage];
}

function renderStory() {
  const story = stories[currentStoryKey];
  const page = getPage();
  patternIndex = 0;
  storyTitle.textContent = story.title;
  activityPrompt.textContent = page.prompt;
  clueBox.textContent = "Tap the picture to discover tiny story secrets.";
  progressText.textContent = `Page ${currentPage + 1} of ${story.pages.length}`;
  progressBar.style.width = `${((currentPage + 1) / story.pages.length) * 100}%`;
  storyText.innerHTML = page.text
    .split(" ")
    .map((word, index) => `<span class="word" data-word="${index}">${word}</span>`)
    .join(" ");

  choices.innerHTML = "";
  page.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = choice;
    button.addEventListener("click", () => handleChoice(choice));
    choices.append(button);
  });

  patternRow.innerHTML = "";
  ["★", "●", "■"].forEach((shape) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = shape;
    button.setAttribute("aria-label", `Choose ${shape}`);
    button.addEventListener("click", () => handlePattern(shape, button));
    patternRow.append(button);
  });

  storybook.classList.remove("turning");
  requestAnimationFrame(() => storybook.classList.add("turning"));
  updateRewards();
}

function handleChoice(choice) {
  const page = getPage();
  if (choice === page.answer) {
    stars += 1;
    clueBox.textContent = `${page.clue} You earned a star.`;
    addSticker();
  } else {
    clueBox.textContent = "Good guess. Try the clue in the picture, then choose again.";
  }
  updateRewards();
}

function handlePattern(shape, button) {
  const page = getPage();
  if (shape === page.pattern[patternIndex]) {
    button.classList.add("correct");
    patternIndex += 1;
    if (patternIndex === page.pattern.length) {
      stars += 1;
      clueBox.textContent = "Pattern solved. The page sparkles brighter.";
      patternIndex = 0;
      addSticker();
      setTimeout(() => {
        document.querySelectorAll(".pattern-row button").forEach((item) => item.classList.remove("correct"));
      }, 700);
    }
  } else {
    button.classList.add("missed");
    clueBox.textContent = "Almost. Watch the story order and try the pattern again.";
    patternIndex = 0;
    setTimeout(() => button.classList.remove("missed"), 500);
  }
  updateRewards();
}

function addSticker() {
  const sticker = stories[currentStoryKey].sticker;
  stickers.add(sticker);
}

function updateRewards() {
  starsEarned.textContent = stars;
  stickersEarned.textContent = stickers.size;
  stickerTray.innerHTML = "";
  stickers.forEach((sticker) => {
    const badge = document.createElement("span");
    badge.textContent = sticker;
    stickerTray.append(badge);
  });
}

function readPageAloud() {
  clearInterval(speechTimer);
  document.querySelectorAll(".word").forEach((word) => word.classList.remove("active"));
  const words = [...document.querySelectorAll(".word")];
  let index = 0;
  speechTimer = setInterval(() => {
    words.forEach((word) => word.classList.remove("active"));
    if (!words[index]) {
      clearInterval(speechTimer);
      return;
    }
    words[index].classList.add("active");
    index += 1;
  }, 380);

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(getPage().text);
    utterance.rate = 0.86;
    utterance.pitch = 1.15;
    window.speechSynthesis.speak(utterance);
  }
}

document.querySelectorAll(".book-card").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".book-card").forEach((card) => card.classList.remove("active"));
    button.classList.add("active");
    currentStoryKey = button.dataset.story;
    currentPage = 0;
    renderStory();
  });
});

document.querySelectorAll(".hotspot").forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    clueBox.textContent = hotspot.dataset.clue;
    if (hotspot.classList.contains("leaf")) {
      addSticker();
      updateRewards();
    }
  });
});

document.querySelector("#readButton").addEventListener("click", readPageAloud);

document.querySelector("#sparkButton").addEventListener("click", () => {
  stars += 1;
  clueBox.textContent = "You spotted a hidden sparkle. One more star for your shelf.";
  updateRewards();
});

document.querySelector("#nextPage").addEventListener("click", () => {
  const pageCount = stories[currentStoryKey].pages.length;
  currentPage = (currentPage + 1) % pageCount;
  renderStory();
});

document.querySelector("#prevPage").addEventListener("click", () => {
  const pageCount = stories[currentStoryKey].pages.length;
  currentPage = (currentPage - 1 + pageCount) % pageCount;
  renderStory();
});

renderStory();
