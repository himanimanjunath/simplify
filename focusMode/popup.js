let selectedFontSize = "default";

document.getElementById("fontSize").addEventListener("change", (e) => {
  selectedFontSize = e.target.value;
 });
 

// listen for clicks on toggle button
document.getElementById("toggle").addEventListener("click", async () => {
  // get the current active tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // send message to the content script to toggle focus mode
  chrome.tabs.sendMessage(tab.id, { action: "toggleFocusMode", fontSize: selectedFontSize
  });
});
