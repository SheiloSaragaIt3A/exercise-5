 
 let originalString = prompt("Enter a string to be encrypted:");
 let shiftAmount = 3;

 function encryptString(str, shift) {
     return str.split('').map(char => shiftChar(char, shift)).join('');
 }

 function shiftChar(char, shift) {
     let code = char.charCodeAt(0);
     if (char.match(/[a-z]/i)) {
         code += shift;
         if (char.match(/[a-z]/) && code > 'z'.charCodeAt(0) || (char.match(/[A-Z]/) && code > 'Z'.charCodeAt(0))) {
             code -= 26;
         }
     }
     return String.fromCharCode(code);
 }

 let encryptedString = encryptString(originalString, shiftAmount);
 console.log("Encrypted String:", encryptedString);

 let decryptedString = encryptString(encryptedString, -shiftAmount);
 console.log("Decrypted String:", decryptedString);