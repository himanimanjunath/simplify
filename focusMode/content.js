// Add an event listener to the button with id "toggle"
// When clicked, it runs an async function
document.getElementById("toggle").addEventListener("click", async () => {
  // Get the current active tab in the current window
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Inject and run the toggleFocusMode function in the context of the current tab
  chrome.scripting.executeScript({
    target: { tabId: tab.id }, // Specify the tab where the script will be run
    function: toggleFocusMode, // Reference the function to be executed
  });
});

// This function toggles a custom style to make the page more "focus-friendly"
function toggleFocusMode() {
  // Check if the style element already exists
  const existingStyle = document.getElementById("focus-style");

  if (existingStyle) {
    // If the style exists, remove it (turn off Focus Mode)
    existingStyle.remove();
  } else {
    // If not, create a new <style> element
    const style = document.createElement("style");
    style.id = "focus-style"; // Give it an ID so we can find/remove it later

    // Define CSS rules for Focus Mode
    style.innerHTML = `
      *\{
        animation: none !important;
        transition: none !important;
      }
      img, video, iframe, aside, footer, nav {
        display: none !important; /* Hide distractions */
      }
      body {
        background: #fefefe !important; /* Light background */
        font-size: 1.5rem !important;  /* Larger text for readability */
        line-height: 1.6 !important;    /* More spacing between lines */
        color: #111 !important;         /* Darker text color */
        /*max-width: 700px;*/               /* Limit line length */
        margin: auto;                   /* Center content */
        padding: 1rem;                  /* Add some spacing */
      }
    `;

    // Add the style to the page <head>
    document.head.appendChild(style);
  }
}



