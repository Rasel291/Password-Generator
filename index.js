const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = ""
let password2 = ""
let passLength = 0
let passLenInput = document.getElementById("pass-length")
let buttonEl = document.getElementById("generate-btn")
let fieldEl1 = document.getElementById("password1")
let fieldEl2 = document.getElementById("password2")

function chooseRandomChar(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
   
}
function generatePassowrd(){
    let pass = ""
    for(let i =0 ; i< passLength ; i++){
        pass += chooseRandomChar()
    }
    
    return pass
}
function handlePasswords(){
   passLength = passLenInput.value
   
   let firstPassword = generatePassowrd()
   let secondPassword = generatePassowrd()
     
    fieldEl1.textContent = firstPassword
    fieldEl2.textContent = secondPassword
}





