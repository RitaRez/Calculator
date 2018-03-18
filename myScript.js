function changeOutput(char) {
    if(char != '=' && char != "clear")
        document.getElementById("output").innerHTML += char;
    else if(char == "="){
        document.getElementById('output').innerHTML = eval(document.getElementById('output').innerHTML);
    } else{
        document.getElementById('output').innerHTML = "";
    }
}
