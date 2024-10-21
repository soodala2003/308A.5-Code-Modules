// Validation function for submit 
export function validateForm(evt) {
    evt.preventDefault();
    const userVal = validateUser();
    if (userVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    const passwordVal = validatePassword();
    if (passwordVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    const persistChecked = validateCheckbox();
    if (!persistChecked) {
      evt.returnValue = false;
      return false;
    } 
  
    alert(`Name: ${userVal}
      Password: ...that's a secret.`);
    
    userInput.value = "";
    passwordInput.value ="";  
    persistCheckbox.checked = false;
  
    return true;
}
  
// User Validation
export function validateUser() {
    if (userInput.value === "") {
      alert("Please provide a name.");
      userInput.focus();
      return false;
    }
    return userInput.value;
}
  
// Password Validation
export function validatePassword() {
    if (passwordInput.value === "") {
      alert("Please provide a password.");
      passwordInput.focus();
      return false;
    }
    return passwordInput.value;
}
  
// Checkbox Validation
export function validateCheckbox() {
    //let isChecked = true;
    if (!persistCheckbox.checked) {
      alert("Please check \"Keep me logged in.\"");
      return false;
    } 
    return true;
}