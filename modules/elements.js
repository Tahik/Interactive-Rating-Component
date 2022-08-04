import { selectors } from "./selectors.js";
const [
  body,
  defaultDiv,
  defaultHeading,
  defaultParagraph,
  ratingList,
  starDiv,
  starImg,
  submitButton,
  activeDiv,
  thankImage,
  selectedParagraph,
  activeHeading,
  activeParagraph,
] = selectors;

import { selectedParagraphText } from "./text.js";

export const div = (clName, par) => {
  const div = document.createElement("div");
  div.classList.add(clName);
  if (clName === activeDiv) {
    div.classList.add("hidden");
  }
  document.querySelector(par).appendChild(div);
};

export const image = (clName, par, src) => {
  const image = document.createElement("img");
  image.classList.add(clName);
  image.src = src;
  document.querySelector(par).appendChild(image);
};

export const heading1 = (clName, par, text) => {
  const heading1 = document.createElement("h1");
  heading1.classList.add(clName);
  heading1.textContent = text;
  document.querySelector(par).appendChild(heading1);
};

export const paragraph = (clName, par, text) => {
  const paragraph = document.createElement("p");
  paragraph.classList.add(clName);
  paragraph.textContent = text;
  document.querySelector(par).appendChild(paragraph);
};

export const uList = (clName, par) => {
  const uList = document.createElement("ul");
  uList.classList.add(clName);
  document.querySelector(par).appendChild(uList);
};

export const listItems = (par) => {
  const nums = ["1", "2", "3", "4", "5"];
  nums.forEach((num) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list--item");
    listItem.classList.add(num);
    // listItem.textContent += num;
    document.querySelector(par).appendChild(listItem);
    const listItemBtn = document.createElement("button");
    listItemBtn.classList.add("list--itemBtn");
    listItem.appendChild(listItemBtn);
    listItemBtn.textContent += num;
    listItemBtn.addEventListener("click", () => {
      let txtNmb = num;
      let youSelectedText = `You selected ${txtNmb} out of 5`;
      if (!txtNmb) {
        document.querySelector(`.${selectedParagraph}`).textContent =
          selectedParagraphText;
      } else {
        document.querySelector(`.${selectedParagraph}`).textContent =
          youSelectedText;
      }
    });
  });
};

export const button = (clName, par) => {
  const eventTarget1 = document.querySelector(`.${defaultDiv}`);
  const eventTarget2 = document.querySelector(`.${activeDiv}`);
  const button = document.createElement("button");
  button.classList.add(clName);
  button.textContent = "Submit";
  button.addEventListener("click", () => {
    eventTarget1.classList.toggle("hidden");
    setTimeout(() => {
      eventTarget1.classList.toggle("hidden");
    }, 3000);
    eventTarget2.classList.toggle("hidden");
    setTimeout(() => {
      eventTarget2.classList.toggle("hidden");
      const myInput = document.querySelector(".selected--paragraph");
      myInput.textContent = selectedParagraphText;
    }, 3000);
  });
  document.querySelector(par).appendChild(button);
};
