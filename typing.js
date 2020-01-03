const box = document.querySelector(".typing");
const text = ["Hello Stranger!", "How are you?", "Have a nice day!"];

let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
const speed = 100;

let activeDomElement = box;

const typing = newTime => {
  if (newTime - oldTime > speed) {
    if (wordIndex === text[textIndex].length) {
      if (textIndex === text.length - 1) {
        textIndex = -1;
      }
      return setTimeout(() => {
        box.textContent = "";
        textIndex++;
        wordIndex = 0;
        requestAnimationFrame(typing);
      }, 1500);
    } else if (wordIndex === 0) {
      const p = document.createElement("p");
      box.appendChild(p);
      activeDomElement = p;
    }
    oldTime = newTime;
    const letter = text[textIndex].substr(wordIndex, 1);
    activeDomElement.textContent += letter;
    wordIndex++;
  }
  requestAnimationFrame(typing);
};

typing();
