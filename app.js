import { selectors } from "./modules/selectors.js";
import {
  div,
  heading1,
  paragraph,
  uList,
  listItems,
  button,
  image,
} from "./modules/elements.js";
import {
  defaultHeadingText,
  defaultParagraphText,
  selectedParagraphText,
  activeHeadingText,
  activeParagraphText,
} from "./modules/text.js";

// import { listItems, listItemBtn } from "./modules/liandbtn.js";

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
  thankParagraph,
] = selectors;

const defaultImage = "./sources/icon-star.svg";
const activeImage = "./sources/illustration-thank-you.svg";

export const app = () => {
  const firstDiv = () => {
    div(defaultDiv, body);
    div(starDiv, `.${defaultDiv}`);
    image(starImg, `.${starDiv}`, defaultImage);
    heading1(defaultHeading, `.${defaultDiv}`, defaultHeadingText);
    paragraph(defaultParagraph, `.${defaultDiv}`, defaultParagraphText);
    uList(ratingList, `.${defaultDiv}`);

    listItems(`.${ratingList}`);
    button(submitButton, `.${defaultDiv}`, div);
  };

  const secondDiv = () => {
    div(activeDiv, body);
    image(thankImage, `.${activeDiv}`, activeImage);
    paragraph(selectedParagraph, `.${activeDiv}`, selectedParagraphText);
    heading1(activeHeading, `.${activeDiv}`, activeHeadingText);
    paragraph(thankParagraph, `.${activeDiv}`, activeParagraphText);
  };
  secondDiv();
  firstDiv();
};
