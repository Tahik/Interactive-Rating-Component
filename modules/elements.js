export const div = (clName, par) => {
  const div = document.createElement("div");
  div.classList.add(clName);
  document.querySelector(par).appendChild(div);
};

export const image = (clName, par) => {
  const image = document.createElement("img");
  image.classList.add(clName);
  image.src = "./sources/icon-star.svg";
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
    listItem.classList.add(`list--item`);
    listItem.classList.add(num);
    listItem.innerHTML += num;
    document.querySelector(par).appendChild(listItem);
  });
};

export const button = (clName, par) => {
  const button = document.createElement("button");
  button.classList.add(clName);
  button.textContent = "Submit";
  document.querySelector(par).appendChild(button);
};
