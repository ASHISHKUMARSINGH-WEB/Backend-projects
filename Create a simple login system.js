let username = 'admin';
let password = "1234";
let user_name = prompt("GIVE YOUR USERNAME ");
let pass_word = prompt ("GIVE YOUR PASSWORD");

if(user_name == username){
    console.log("correct username");
}
else {
    console.log("wrong username");
}

if(pass_word == password){
    console.log("correct password");
}
else {
    console.log("wrong password");
}

if(user_name == username && pass_word == password){
  console.log("Login successful");
}else {
  console.log("appropriate error message");
}
