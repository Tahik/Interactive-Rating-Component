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
import { defaultHeadingText, defaultParagraphText } from "./modules/text.js";

const [
  body,
  def,
  defaultHeading,
  defaultParagraph,
  ratingList,
  starDiv,
  starImg,
  submitButton,
] = selectors;

export const app = () => {
  const firstDiv = () => {
    div(def, body);
    div(starDiv, `.${def}`);
    image(starImg, `.${starDiv}`);
    heading1(defaultHeading, `.${def}`, defaultHeadingText);
    paragraph(defaultParagraph, `.${def}`, defaultParagraphText);
    uList(ratingList, `.${def}`);
    listItems(`.${ratingList}`);
    button(submitButton, `.${def}`);
  };
  firstDiv();
};
