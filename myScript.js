function changeOutput(char) {
    if(char != '=' )
        document.getElementById("output").innerHTML += char;
    else{
        for(var i = 1; i < char.length(); i++){
            aux(char[i], char[i-1]);
        }
    }
}

function aux (i, j){
    if(i == "+" || i == "-")
        i = 0;
    else if (i == "/" || i == "x")
        return 1;
    else if (i == "sqrt" || i == "^")
    else if (i == "(" || i == ")")
        return 3;
}
