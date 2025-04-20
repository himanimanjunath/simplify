let focusModeEnabled = false; 

// styles for focus mode
function applyFocusMode(fontSize = "default") {
  if (document.getElementById("focus-style")) return; 

  const style = document.createElement("style");
  style.id = "focus-style";

  let fontSizeValue = "1.2rem";
  if (fontSize === "large") fontSizeValue = "1.4rem";
  if (fontSize === "xlarge") fontSizeValue = "1.6rem";

  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap');

    * {
      animation: none !important;
      transition: none !important;
      background-image: none !important;
    }

    body, p, div, span, li, ul, ol, a, h1, h2, h3, h4, h5, h6, td, th {
      font-family: 'Atkinson Hyperlegible', sans-serif !important;
      font-size: ${fontSizeValue} !important;
      /*font-size: 1.5rem !important;*/
      line-height: 1.6 !important;
      letter-spacing: 0.05em !important;
    }

    body {
      background: #fefefe !important;
      margin: auto !important;
      padding: 1rem !important;
    }

    img, video, iframe, canvas, object, embed, svg {
      display: none !important;
    }
      
  `;

  document.head.appendChild(style);
}

// Remove focus mode styles
function removeFocusMode() {
  const existingStyle = document.getElementById("focus-style");
  if (existingStyle) existingStyle.remove();
}

// Toggle Focus Mode
function toggleFocusMode(fontSize = "default") {
  const oldStyle = document.getElementById("focus-style");
  if (oldStyle) oldStyle.remove();
 
 
  applyFocusMode(fontSize);
 }
 
 
 // Listen for toggle message from popup.js
 chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "toggleFocusMode") {
    toggleFocusMode(msg.fontSize);
  }
 


/*
// Toggle focus Mode
function toggleFocusMode() {
  focusModeEnabled = !focusModeEnabled;
  if (focusModeEnabled) {
    applyFocusMode();
  } else {
    removeFocusMode();
  }
}

// Listen for toggle message from popup.js
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "toggleFocusMode") {
    toggleFocusMode();
  }
    */

});
