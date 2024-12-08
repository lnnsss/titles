const titles = [
  {
    title: "Прапорщик",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Russia-Army-OR-9a-2010.svg/60px-Russia-Army-OR-9a-2010.svg.png",
  },
  {
    title: "Старший прапорщик",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Russia-Army-OR-9b-2010.svg/60px-Russia-Army-OR-9b-2010.svg.png",
  },
  {
    title: "Младший лейтенант",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Russia-Army-OF-1a-2010.svg/59px-Russia-Army-OF-1a-2010.svg.png",
  },
  {
    title: "Лейтенант",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Russia-Army-OF-1b-2010.svg/60px-Russia-Army-OF-1b-2010.svg.png",
  },
  {
    title: "Старший лейтенант",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Russia-Army-OF-1c-2010.svg/60px-Russia-Army-OF-1c-2010.svg.png",
  },
  {
    title: "Капитан",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Russia-Army-OF-2-2010.svg/60px-Russia-Army-OF-2-2010.svg.png",
  },
  {
    title: "Майор",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Russia-Army-OF-3-2010.svg/60px-Russia-Army-OF-3-2010.svg.png",
  },
  {
    title: "Подполковник",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Russia-Army-OF-4-2010.svg/60px-Russia-Army-OF-4-2010.svg.png",
  },
  {
    title: "Полковник",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Russia-Army-OF-5-2010.svg/60px-Russia-Army-OF-5-2010.svg.png",
  },
  {
    title: "Генерал-майор",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Russia-Army-OF-6-2010.svg/60px-Russia-Army-OF-6-2010.svg.png",
  },
  {
    title: "Генерал-лейтенант",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Russia-Army-OF-7-2010.svg/60px-Russia-Army-OF-7-2010.svg.png",
  },
  {
    title: "Генерал-полковник",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Russia-Army-OF-8-2010.svg/60px-Russia-Army-OF-8-2010.svg.png",
  },
  {
    title: "Генерал армии",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Russia-Army-OF-9-2010.svg/59px-Russia-Army-OF-9-2010.svg.png",
  },
  {
    title: "Маршал РФ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Russia-Army-OF-10-2010.svg/60px-Russia-Army-OF-10-2010.svg.png",
  },
];

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const answer = document.getElementById("answer");
const continueButton = document.getElementById("continueButton");
const retryButton = document.getElementById("retryButton");
const images = document.getElementsByClassName("image");
let currentTitle = "";

const getTitle = () => {
  continueButton.classList.add("nv");
  retryButton.classList.add("nv");
  btn.classList.remove("nv");
  const randomIndex = Math.floor(Math.random() * titles.length);
  const randomImage = titles[randomIndex].image;
  currentTitle = titles[randomIndex].title;

  images[0].innerHTML = `<img src="${randomImage}" alt="${currentTitle}" />`;
};

getTitle();

btn.onclick = () => {
  const userInput = input.value.trim().toLowerCase();

  if (userInput === currentTitle.toLowerCase()) {
    images[0].innerHTML = `<h1>Правильно!</h1>`;
    btn.classList.add("nv");
    continueButton.classList.remove("nv");
    continueButton.onclick = () => {
      getTitle();
      input.value = "";
    };
  } else {
    images[0].innerHTML = `<h1>Неправильно! Это ${currentTitle}</h1>`;
    btn.classList.add("nv");
    retryButton.classList.remove("nv");
    retryButton.onclick = () => {
      getTitle();
      input.value = "";
    };
  }
};
