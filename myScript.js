function changeOutput(char) {
    if(char != '=' )
        document.getElementById("output").innerHTML += char;
    else{
        document.getElementById('output').innerHTML = eval(document.getElementById('output').innerHTML);
    }
}
