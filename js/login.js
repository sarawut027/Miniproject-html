function login(event){
    event.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
if(
    (user === "admin" || 
     user === "Suphanat" || 
     user === "Phuthanet" || 
     user === "Sarawut" || 
     user === "Thanaphat" || 
     user === "Ratchapong")
    && pass === "1234"
){
    window.location.href = "homepage.html";
}else{
    document.getElementById("error").innerText = "Username หรือ Password ผิด!";
}
}