// Listen for clicks on the toggle button
document.getElementById("toggle").addEventListener("click", async () => {
  // Get the current active tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Send a message to the content script to toggle Focus Mode
  chrome.tabs.sendMessage(tab.id, { action: "toggleFocusMode" });
});
