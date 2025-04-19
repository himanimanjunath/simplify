// Keeps track of whether Focus Mode is currently enabled or not
let focusModeEnabled = false;

// Applies styles for Focus Mode
function applyFocusMode() {
  // Increase the font size for better readability
  document.body.style.fontSize = "18px";
  
  // Add a custom class that can apply high-contrast or simplified styling
  document.body.classList.add("focus-high-contrast");
}

// Removes Focus Mode styles
function removeFocusMode() {
  // Reset the font size to default
  document.body.style.fontSize = "";
  
  // Remove the custom focus mode class
  document.body.classList.remove("focus-high-contrast");
}

// Toggles between enabling and disabling Focus Mode
function toggleFocusMode() {
  // Flip the current state (true becomes false, false becomes true)
  focusModeEnabled = !focusModeEnabled;

  // Apply or remove styles based on the new state
  if (focusModeEnabled) {
    applyFocusMode();
  } else {
    removeFocusMode();
  }
}

// Listen for messages sent from other parts of the extension (e.g., popup.js)
// When a message with action "toggleFocusMode" is received, toggle the mode
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "toggleFocusMode") {
    toggleFocusMode();
  }
});


