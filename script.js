const shapeNames = {
  "★": "star",
  "●": "moon",
  "■": "door",
};

const stories = {
  willow: {
    title: "Willow & the Lost Star",
    hero: "Willow",
    sticker: "Leaf",
    patternTitle: "Star Path",
    pages: [
      {
        text: "Willow finds a small star caught in the silver leaves. The star is scared, so Willow promises to help gently.",
        prompt: "What is the kind first thing Willow should do?",
        choices: ["Shake the tree", "Count the glowing leaves", "Run away"],
        answer: "Count the glowing leaves",
        clue: "The leaves blink one, two, three when Willow counts softly.",
        patternPrompt: "Copy the leaf lights in order.",
        pattern: ["★", "●", "★"],
        hints: [
          { slot: "owl", label: "Owl", clue: "The owl says, 'Slow counting helps scared stars feel safe.'" },
          { slot: "leaf", label: "Leaf", clue: "The brightest leaf flashes first in the pattern." },
          { slot: "door", label: "Star", clue: "The star shines when Willow uses a gentle voice." },
        ],
      },
      {
        text: "Counting opens a moonlit door under the roots. Cold wind slips out, and the star shivers beside Willow.",
        prompt: "What should Willow bring through the chilly door?",
        choices: ["A loud drum", "A warm scarf", "A heavy rock"],
        answer: "A warm scarf",
        clue: "The scarf keeps the little star brave enough to travel.",
        patternPrompt: "Copy the door's knock.",
        pattern: ["●", "★", "■"],
        hints: [
          { slot: "owl", label: "Owl", clue: "The owl tucks its feathers tight. It is cold beyond the door." },
          { slot: "leaf", label: "Scarf", clue: "The scarf glows because it is a helpful gift." },
          { slot: "door", label: "Door", clue: "The door knocks moon, star, door before it opens." },
        ],
      },
      {
        text: "Beyond the door, three bell stones ring in a row. Willow steps on them slowly so the star can remember the way home.",
        prompt: "Willow hears two bells, then one more. How many bells ring?",
        choices: ["One bell", "Three bells", "Five bells"],
        answer: "Three bells",
        clue: "Two bells plus one bell makes three careful steps.",
        patternPrompt: "Copy the bell-stone path.",
        pattern: ["■", "■", "★"],
        hints: [
          { slot: "owl", label: "Bells", clue: "Two low bells ring before the bright star bell." },
          { slot: "leaf", label: "Step", clue: "Willow waits for each bell before taking the next step." },
          { slot: "door", label: "Home", clue: "The last bell points toward the star's sky home." },
        ],
      },
      {
        text: "At the hilltop, Willow lifts the star into the sky. It twinkles thank you, and the forest answers with tiny lights.",
        prompt: "How should the forest celebrate helping together?",
        choices: ["Skip the ending", "Read quietly under the lights", "Make the star fall again"],
        answer: "Read quietly under the lights",
        clue: "A quiet reading party lets everyone enjoy the new glow.",
        patternPrompt: "Copy the thank-you sparkle.",
        pattern: ["★", "■", "●"],
        hints: [
          { slot: "owl", label: "Owl", clue: "The owl opens a favorite bedtime book." },
          { slot: "leaf", label: "Lights", clue: "The leaves shine because the forest helped together." },
          { slot: "door", label: "Sky", clue: "The star is back where it belongs." },
        ],
      },
    ],
  },
  cloud: {
    title: "Pip's Cloud Kitchen",
    hero: "Pip",
    sticker: "Cloud",
    patternTitle: "Cloud Recipe",
    pages: [
      {
        text: "Pip rolls a spoon through a fluffy cloud until it becomes one round pancake moon.",
        prompt: "Which shape did Pip make?",
        choices: ["Triangle", "Circle", "Zigzag"],
        answer: "Circle",
        clue: "A pancake moon is round like a circle.",
        patternPrompt: "Copy the recipe puffs.",
        pattern: ["●", "●", "★"],
        hints: [
          { slot: "owl", label: "Spoon", clue: "The spoon makes two round swirls before the sparkle." },
          { slot: "leaf", label: "Cloud", clue: "The cloud pancake has no corners." },
          { slot: "door", label: "Moon", clue: "Round means circle." },
        ],
      },
      {
        text: "Three hungry birds wait with blue plates. Pip wants every bird to get one soft cloud bite.",
        prompt: "How many bites should Pip share?",
        choices: ["Ten", "One", "Three"],
        answer: "Three",
        clue: "There are three birds, so three bites is fair.",
        patternPrompt: "Copy the serving order.",
        pattern: ["★", "●", "■"],
        hints: [
          { slot: "owl", label: "Birds", clue: "Count the waiting friends: one, two, three." },
          { slot: "leaf", label: "Plate", clue: "Each plate needs one bite." },
          { slot: "door", label: "Share", clue: "Sharing works best when everyone gets a turn." },
        ],
      },
      {
        text: "A cinnamon breeze spins the kitchen too fast. Pip slows the spoon, and the cloud table stops wobbling.",
        prompt: "What helps the kitchen become calm?",
        choices: ["Slow stirring", "Wild jumping", "Yelling at the breeze"],
        answer: "Slow stirring",
        clue: "Slow stirring turns a wild swirl into a gentle circle.",
        patternPrompt: "Copy the calm swirl.",
        pattern: ["■", "★", "■"],
        hints: [
          { slot: "owl", label: "Breeze", clue: "The breeze calms when Pip moves slowly." },
          { slot: "leaf", label: "Spoon", clue: "The spoon waits between each stir." },
          { slot: "door", label: "Table", clue: "The table stops wobbling after the calm pattern." },
        ],
      },
      {
        text: "Pip sprinkles the pancakes with story dust. The birds take tiny bites and hum a goodnight song.",
        prompt: "What ending treat makes the friends happy?",
        choices: ["A noisy alarm", "No dessert", "Story sprinkles"],
        answer: "Story sprinkles",
        clue: "Stories make the goodnight snack feel special.",
        patternPrompt: "Copy the goodnight song.",
        pattern: ["●", "★", "●"],
        hints: [
          { slot: "owl", label: "Song", clue: "The song starts round and ends round." },
          { slot: "leaf", label: "Dust", clue: "Story dust sparkles in the middle." },
          { slot: "door", label: "Birds", clue: "The birds hum because Pip shared kindly." },
        ],
      },
    ],
  },
  reef: {
    title: "The Lantern Reef",
    hero: "Mara",
    sticker: "Lantern",
    patternTitle: "Lantern Trail",
    pages: [
      {
        text: "Mara follows a lantern fish past tall coral, a bubble, and another tall coral. The reef is teaching her a pattern.",
        prompt: "Which shape comes next after tall coral, bubble, tall coral?",
        choices: ["Sleepy shell", "Tall coral", "Bubble cloud"],
        answer: "Bubble cloud",
        clue: "The pattern goes tall, bubble, tall, bubble.",
        patternPrompt: "Copy the coral pattern.",
        pattern: ["■", "●", "■", "●"],
        hints: [
          { slot: "owl", label: "Fish", clue: "The lantern fish points to tall, bubble, tall, bubble." },
          { slot: "leaf", label: "Coral", clue: "Tall coral matches the square button." },
          { slot: "door", label: "Bubble", clue: "A bubble is round like the moon button." },
        ],
      },
      {
        text: "The reef lights flicker when Mara rushes. She takes one slow breath, and the lantern fish glows steady again.",
        prompt: "How can Mara help the lights?",
        choices: ["Splash hard", "Take a slow breath", "Close the book"],
        answer: "Take a slow breath",
        clue: "A slow breath helps Mara notice the steady lights.",
        patternPrompt: "Copy the steady glow.",
        pattern: ["★", "★", "●"],
        hints: [
          { slot: "owl", label: "Glow", clue: "Two bright glows come before one soft bubble." },
          { slot: "leaf", label: "Breath", clue: "Slow breathing makes the light stop flickering." },
          { slot: "door", label: "Fish", clue: "The lantern fish waits for Mara to feel brave." },
        ],
      },
      {
        text: "A puzzle shell asks for the color that feels like sunrise. Mara sees gold light warming the sand.",
        prompt: "Which color feels like sunrise in the reef?",
        choices: ["Gray", "Gold", "Muddy green"],
        answer: "Gold",
        clue: "Gold is warm and bright like sunrise.",
        patternPrompt: "Copy the shell's glow.",
        pattern: ["●", "■", "★"],
        hints: [
          { slot: "owl", label: "Shell", clue: "The shell opens after moon, door, star." },
          { slot: "leaf", label: "Gold", clue: "Gold light warms the sand." },
          { slot: "door", label: "Sunrise", clue: "Sunrise colors feel warm, not gray." },
        ],
      },
      {
        text: "Mara hangs the lantern high. The whole reef gathers under its glow so every fish can read together.",
        prompt: "What should the reef do now that the lantern is high?",
        choices: ["Read together", "Swim away from the light", "Turn off the lantern"],
        answer: "Read together",
        clue: "The lantern helps the reef share one bright story.",
        patternPrompt: "Copy the lantern ending.",
        pattern: ["■", "★", "●"],
        hints: [
          { slot: "owl", label: "Lantern", clue: "The lantern shines high where everyone can see." },
          { slot: "leaf", label: "Books", clue: "The fish gather because reading together is more fun." },
          { slot: "door", label: "Reef", clue: "The reef is brave and bright now." },
        ],
      },
    ],
  },
};

let currentStoryKey = "willow";
let currentPage = 0;
let stars = 2;
let stickers = new Set(["Leaf"]);
let patternIndex = 0;
let speechTimer;

const solvedChoices = new Set();
const solvedPatterns = new Set();
const foundSparkles = new Set();

const storybook = document.querySelector("#storybook");
const pageArt = document.querySelector("#pageArt");
const storyTitle = document.querySelector("#storyTitle");
const storyText = document.querySelector("#storyText");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const clueBox = document.querySelector("#clueBox");
const choices = document.querySelector("#choices");
const activityTitle = document.querySelector("#activityTitle");
const activityPrompt = document.querySelector("#activityPrompt");
const patternTitle = document.querySelector("#patternTitle");
const patternPrompt = document.querySelector("#patternPrompt");
const patternGuide = document.querySelector("#patternGuide");
const patternRow = document.querySelector("#patternRow");
const starsEarned = document.querySelector("#starsEarned");
const stickersEarned = document.querySelector("#stickersEarned");
const stickerTray = document.querySelector("#stickerTray");
const prevPageButton = document.querySelector("#prevPage");
const nextPageButton = document.querySelector("#nextPage");

function pageKey() {
  return `${currentStoryKey}-${currentPage}`;
}

function getPage() {
  return stories[currentStoryKey].pages[currentPage];
}

function renderStory() {
  const story = stories[currentStoryKey];
  const page = getPage();
  patternIndex = 0;
  pageArt.className = `page-art scene-${currentStoryKey} scene-page-${currentPage + 1}`;
  storyTitle.textContent = story.title;
  activityTitle.textContent = `Help ${story.hero} choose`;
  activityPrompt.textContent = page.prompt;
  patternTitle.textContent = story.patternTitle;
  patternPrompt.textContent = page.patternPrompt;
  clueBox.textContent = "Tap the story picture labels for clues.";
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
    if (solvedChoices.has(pageKey()) && choice === page.answer) {
      button.classList.add("correct-choice");
      button.disabled = true;
    }
    button.addEventListener("click", () => handleChoice(choice, button));
    choices.append(button);
  });

  patternGuide.innerHTML = "";
  page.pattern.forEach((shape, index) => {
    const step = document.createElement("span");
    step.textContent = shape;
    step.setAttribute("aria-label", `${shapeNames[shape]} ${index + 1}`);
    patternGuide.append(step);
  });

  patternRow.innerHTML = "";
  ["★", "●", "■"].forEach((shape) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = shape;
    button.setAttribute("aria-label", `Choose ${shapeNames[shape]}`);
    button.addEventListener("click", () => handlePattern(shape));
    patternRow.append(button);
  });

  document.querySelectorAll(".hotspot").forEach((hotspot, index) => {
    const hint = page.hints[index];
    hotspot.className = `hotspot ${hint.slot}`;
    hotspot.dataset.clue = hint.clue;
    hotspot.innerHTML = `<span aria-hidden="true">${hint.label}</span><span class="sr-only">${hint.label} clue</span>`;
  });

  prevPageButton.disabled = currentPage === 0;
  nextPageButton.disabled = currentPage === story.pages.length - 1;
  nextPageButton.textContent = currentPage === story.pages.length - 1 ? "The End" : "Next Page";

  storybook.classList.remove("turning");
  requestAnimationFrame(() => storybook.classList.add("turning"));
  updateRewards();
}

function handleChoice(choice, button) {
  const page = getPage();
  document.querySelectorAll(".choices button").forEach((item) => {
    item.classList.remove("wrong-choice");
  });

  if (choice === page.answer) {
    if (!solvedChoices.has(pageKey())) {
      stars += 1;
      solvedChoices.add(pageKey());
      addSticker();
    }
    button.classList.add("correct-choice");
    button.disabled = true;
    clueBox.textContent = `${page.clue} You earned a star.`;
  } else {
    button.classList.add("wrong-choice");
    clueBox.textContent = "Try one of the picture clues, then choose again.";
  }
  updateRewards();
}

function handlePattern(shape) {
  const page = getPage();
  const buttons = [...document.querySelectorAll(".pattern-row button")];
  const guideSteps = [...document.querySelectorAll(".pattern-guide span")];
  buttons.forEach((item) => item.classList.remove("missed"));

  if (shape === page.pattern[patternIndex]) {
    guideSteps[patternIndex].classList.add("matched");
    patternIndex += 1;
    if (patternIndex === page.pattern.length) {
      if (!solvedPatterns.has(pageKey())) {
        stars += 1;
        solvedPatterns.add(pageKey());
        addSticker();
      }
      clueBox.textContent = "Pattern solved. The page sparkles brighter.";
      pageArt.classList.add("sparkle-pop");
      setTimeout(resetPattern, 850);
    }
  } else {
    const button = buttons.find((item) => item.textContent === shape);
    button.classList.add("missed");
    clueBox.textContent = "That shape is out of order. Start again from the first glowing shape.";
    setTimeout(resetPattern, 500);
  }
  updateRewards();
}

function resetPattern() {
  patternIndex = 0;
  pageArt.classList.remove("sparkle-pop");
  document.querySelectorAll(".pattern-guide span").forEach((item) => item.classList.remove("matched"));
  document.querySelectorAll(".pattern-row button").forEach((item) => item.classList.remove("missed"));
}

function addSticker() {
  stickers.add(stories[currentStoryKey].sticker);
}

function updateRewards() {
  starsEarned.textContent = stars;
  stickersEarned.textContent = stickers.size;
  stickerTray.innerHTML = "";
  stickers.forEach((sticker) => {
    const badge = document.createElement("span");
    badge.textContent = sticker;
    badge.title = `${sticker} sticker`;
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
  }, 320);

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
  });
});

document.querySelector("#readButton").addEventListener("click", readPageAloud);

document.querySelector("#sparkButton").addEventListener("click", () => {
  if (!foundSparkles.has(pageKey())) {
    stars += 1;
    foundSparkles.add(pageKey());
  }
  clueBox.textContent = "You spotted a hidden sparkle. This page is shining.";
  pageArt.classList.add("sparkle-pop");
  setTimeout(() => pageArt.classList.remove("sparkle-pop"), 850);
  updateRewards();
});

nextPageButton.addEventListener("click", () => {
  const pageCount = stories[currentStoryKey].pages.length;
  if (currentPage < pageCount - 1) {
    currentPage += 1;
    renderStory();
  }
});

prevPageButton.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage -= 1;
    renderStory();
  }
});

renderStory();
