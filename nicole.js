const ANNIVERSARY_DAY = 28;
const ANNIVERSARY_MONTH = 6;
const ANNIVERSARY_YEAR = 2020;

// Place the actual image files inside the secret-photos folder.
const photos = [
  {
    src: "secret-photos/12.jpg",
    caption: "Waħda mill-isbaħ memorji tiegħi miegħek."
  },
  {
    src: "secret-photos/14.jpg",
    caption: "Dan il-mument dejjem iġegħelni nitbissem."
  },
  {
    src: "secret-photos/22.jpg",
    caption: "Memorja żgħira li qatt ma rrid ninsa."
  },
  {
    src: "secret-photos/50.jpg",
    caption: "Int tagħmel kull mument speċjali."
  },
  {
    src: "secret-photos/92.jpeg",
    caption: "Dan ir-ritratt ifakkarni kemm jien lucky."
  },
  {
    src: "secret-photos/93.jpeg",
    caption: "Wieħed minn dawk il-mumenti li nixtieq nerġa’ ngħix."
  },
  {
    src: "secret-photos/94.jpeg",
    caption: "Il-persuna favorita tiegħi, fil-memorji favoriti tiegħi."
  },
  {
    src: "secret-photos/95.jpeg",
    caption: "Inħobb dan ir-ritratt għax ifakkarni fina."
  }
];

const lockScreen = document.getElementById("lockScreen");
const secretPage = document.getElementById("secretPage");
const secretCodeInput = document.getElementById("secretCode");
const unlockBtn = document.getElementById("unlockBtn");
const errorMessage = document.getElementById("errorMessage");

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

const heartRainBtn = document.getElementById("heartRainBtn");
const finalSurpriseBtn = document.getElementById("finalSurpriseBtn");
const finalMessage = document.getElementById("finalMessage");

const photoGallery = document.getElementById("photoGallery");
const photoModal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeModal = document.getElementById("closeModal");

// Unlock page
function unlockPage() {
  const enteredCode = secretCodeInput.value.trim();

  if (isCorrectAnniversaryCode(enteredCode)) {
    lockScreen.classList.add("hidden");
    secretPage.classList.remove("hidden");
    createHeartRain(22);
  } else {
    errorMessage.textContent = "erga ppruva bamb 💗";
    secretCodeInput.value = "";
  }
}

function isCorrectAnniversaryCode(code) {
  // Allows formats like:
  // 1-1-20
  // 1/1/20
  // 01-01-2020
  // 01/01/2020
  // 1.1.20
  // 1 1 2020

  const parts = code.split(/[-/. ]+/);

  if (parts.length !== 3) {
    return false;
  }

  const day = Number(parts[0]);
  const month = Number(parts[1]);
  let year = Number(parts[2]);

  if (year < 100) {
    year += 2000;
  }

  return (
    day === ANNIVERSARY_DAY &&
    month === ANNIVERSARY_MONTH &&
    year === ANNIVERSARY_YEAR
  );
}

unlockBtn.addEventListener("click", unlockPage);

secretCodeInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    unlockPage();
  }
});

// Envelope letter reveal
envelope.addEventListener("click", function () {
  envelope.classList.add("open");

  setTimeout(function () {
    letter.classList.remove("hidden");
    createHeartRain(14);
  }, 350);
});

// Reveal reason cards
const reasonCards = document.querySelectorAll(".reason-card");

reasonCards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("revealed");
  });
});

// Build photo gallery
photos.forEach(function (photo) {
  const card = document.createElement("button");
  card.className = "memory-card";

  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.caption;

  card.appendChild(img);
  photoGallery.appendChild(card);

  card.addEventListener("click", function () {
    if (!card.classList.contains("revealed")) {
      card.classList.add("revealed");
      createHeartRain(8);
      return;
    }

    modalImage.src = photo.src;
    modalCaption.textContent = photo.caption;
    photoModal.classList.remove("hidden");
  });
});

// Close photo modal
closeModal.addEventListener("click", function () {
  photoModal.classList.add("hidden");
});

photoModal.addEventListener("click", function (event) {
  if (event.target === photoModal) {
    photoModal.classList.add("hidden");
  }
});

// Heart rain button
heartRainBtn.addEventListener("click", function () {
  createHeartRain(26);
});

// Final surprise
finalSurpriseBtn.addEventListener("click", function () {
  finalMessage.classList.remove("hidden");
  createHeartRain(35);
});

// Floating hearts
function createHeartRain(amount) {
  const hearts = ["💗", "💖", "💕", "💘", "❤️"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    heart.style.fontSize = 20 + Math.random() * 22 + "px";

    document.body.appendChild(heart);

    setTimeout(function () {
      heart.remove();
    }, 5000);
  }
}