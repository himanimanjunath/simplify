let focusModeEnabled = false;

// Utility: Remove elements by selector
function removeElements(selectors) {
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });
}

// Utility: Simplify styles
function applySimpleStyles() {
  document.body.style.fontSize = "18px";
  document.body.style.lineHeight = "1.6";
  document.body.style.backgroundColor = "#fefefe";
  document.body.style.color = "#111";
  document.body.style.maxWidth = "700px";
  document.body.style.margin = "auto";
  document.body.style.padding = "1rem";
}

// CNN-specific cleanup
function simplifyCNN() {
  removeElements([
    "header", "nav", "footer", ".ad", ".video", ".media", ".banner", 
    ".breaking-news", ".metadata", ".nav", ".cnn_fade"
  ]);
  const mainContent = document.querySelector("main");
  if (mainContent) {
    document.body.innerHTML = "";
    document.body.appendChild(mainContent);
    applySimpleStyles();
  }
}

// Amazon-specific cleanup
function simplifyAmazon() {
  removeElements([
    "#nav-main", "#navFooter", "#navbar", ".nav-right", ".nav-left", 
    ".ad", ".s-ads", ".s-main-slot .s-result-item:not(.AdHolder)", 
    "#sponsoredProducts_feature_div", ".a-carousel", ".a-size-small"
  ]);

  // Enlarge product names and prices
  document.querySelectorAll(".a-size-medium, .a-price").forEach(el => {
    el.style.fontSize = "20px";
    el.style.lineHeight = "1.6";
  });

  applySimpleStyles();
}

// Generic fallback simplification
function genericSimplify() {
  removeElements(["nav", "footer", "aside", "iframe", "video", "img", ".ad"]);
  applySimpleStyles();
}

// Focus mode apply
function applyFocusMode() {
  const hostname = window.location.hostname;

  if (hostname.includes("cnn.com")) {
    simplifyCNN();
  } else if (hostname.includes("amazon.com")) {
    simplifyAmazon();
  } else {
    genericSimplify();
  }

  focusModeEnabled = true;
}

// Focus mode remove (refresh to restore)
function removeFocusMode() {
  alert("Reload the page to restore original view.");
  focusModeEnabled = false;
}

// Toggle handler
function toggleFocusMode() {
  if (focusModeEnabled) {
    removeFocusMode();
  } else {
    applyFocusMode();
  }
}

// Message listener
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "toggleFocusMode") {
    toggleFocusMode();
  }
});
