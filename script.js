var email = document.forms['form']['email'];
var password = document.forms['form']['password']

var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',email_Verify);

function validated(){
    if(email.value.length < 3){
      email.style.border = "1px solid red";
      email_error.style.display = "block";
      email.focus();
      return false;
    
    } 
    if(password.value.length < 8){
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password.focus();
        return false;
      }
}
function email_Verify(){
    if(email.value.length >= 2){
        email.style.border = "1px solid green";
        email_error.style.display = "none";
        return true;
      
}
}