function loginLogout(element){
    if(element.innerText == "Login"){
        element.innerText = "Logout";
    } else {
        element.innerText = "Login"
    }
}

function removeAddDefinition(element){
    var element = element;
    element.remove();
    
}
