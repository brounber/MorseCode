const convert = () => {
          let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
          let morseLetters = [". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___" ];
          const textToChange = document.getElementById("textToConvert").value;
          let newText = "";
          for (let i = 0; i < textToChange.length; i++) {
              for (let j = 0; j < textToChange.length; j++) {
                  if (textToChange[i].toLowerCase() == letters[j]) {
                      newText += morseLetters[j];
                      break;
                  }        
              }
          }
        event.preventDefault();
      document.getElementById("newText").innerHTML = newText;
      
      }

