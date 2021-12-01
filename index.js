// We want to iterate through an array of character obtained from a text input
// for each character in english we want to return its matching translation in morse

// Need to DO:
// Create another function that will convert Morse to English
// Manipulate the dom to get input from users and correct display

import { englishToMorseObject } from "./module/dictionnary.js";

const convertMorse = document.getElementById("convertToMorse");
const convertEnglish = document.getElementById("convertToEnglish");
const input = document.getElementById("input");
const output = document.getElementById("outPut");

convertMorse.addEventListener("click", () => {
    output.innerText = translateEnglishToMorse("convertToMorse", input.value);
});
convertEnglish.addEventListener("click", () => {
    output.innerText = morseToEnglish("convertToEnglish",  input.value);
});


const translateEnglishToMorse = (text, object) => {
    return text
        .toLowerCase()
        .split("")
        .map((char) => {
            for (const [key, value] of Object.entries(object)) {
                if (char === key) {
                    return value;
                }
            }
        })
        .join("");
};





// console.log(
//     translateEnglishToMorse("Hello my name is Remi", englishToMorseObject),
// );


