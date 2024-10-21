// Functions for Browser Object Model (BOM) methods
export let myWindow;
  
export function newWindow() {
  myWindow = window.open(
    "https://www.netflix.com/browse/genre/5685",
    "NETFLIX",
    "width=600, height=500, resizable=yes, scrollbars=yes, location=yes, top=200, left=50"
  );
  myWindow.focus();
}

export function closeWindow() {
  myWindow.close();
}