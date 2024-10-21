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