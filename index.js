// Define anchors to html tags
const generateButton = document.getElementById("generate-btn");
const numbersCheckbox = document.getElementById("numbers");
const specialsCheckbox = document.getElementById("specials")

const lengthInput = document.getElementById("length")

const passwordParagraph1 = document.getElementById("generated-password1")
const passwordParagraph2 = document.getElementById("generated-password2")



// Add event listener to the generate button
generateButton.addEventListener("click", getPassword)



// Define arrays that hold password characters, numbers and special characters
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specials = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


// Function that gets one char from passed array
function getRandomArrayElement(array){
    return array[Math.floor(Math.random() * array.length)];
}

// Function that generates password with said lenght & symbols
function generatePassword(passSymbols, passLength){
    let generatedPassword=""

    for (let i = 0; i < passLength; i++){
        generatedPassword += getRandomArrayElement(passSymbols)
    }

    console.log(generatedPassword)
    return generatedPassword
}

// Function that invokes generatePassword() with attibutes chosen by user on the site website & changes two <p> content
function getPassword(){
    let passwordSymbols = characters;

    const numbersChecked = numbersCheckbox.checked;
    const specialsChecked = specialsCheckbox.checked;
    const passwordLength = lengthInput.value;

    if (numbersChecked)
        passwordSymbols = passwordSymbols.concat(numbers)
    if (specialsChecked)
        passwordSymbols = passwordSymbols.concat(specials)

    const generatedPassword1 = generatePassword(passwordSymbols, passwordLength)
    const generatedPassword2 = generatePassword(passwordSymbols, passwordLength)

    passwordParagraph1.textContent = generatedPassword1     
    passwordParagraph2.textContent = generatedPassword2
}

