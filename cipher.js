// Example input 2, "HI"
// output "JK"
// input = 20 "HI"
// output = "BC"

function cipher(str, input){
    let result = ""
    for(i=0; i < str.length; i++){
        let characters = str[i];
        if(characters.toUpperCase(str[i])){
            let char = String.fromCharCode((characters.charCodeAt(0) + input-65) % 26 +65);
            result += char
        }else{
            let char = String.fromCharCode((characters.charCodeAt(0) + input-97) % 26 + 97);
                result += char;
        }
    }
    return result
}

let result1 = cipher("HI", 2)
let result2 = cipher("HI", 20)
console.log(result1)
console.log(result2)