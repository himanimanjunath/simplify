# simplify 

Chrome extension built to create a cleaner, distraction-free web experience! Designed especially for neurodivergent users such as those with ADHD or autism. Our extension modifies webpages by changing fonts, disabling visual clutter, and offering a more accessible reading interface. Currently, it’s optimized for cnn.com.

## Features
* Dyslexia-friendly font
* Hides distracting elements (images, advertisements, videos, footers)  
* Easy toggle via popup  
* Clean, readable layout  

## How We Built It
* For the frontend UI, we used **HTML, CSS, and JavaScript** to build the popup interface.
* The **Chrome Extensions API (Manifest v3)** was used to define the extension's structure/permissions, handle communication between the popup and browser tabs, register content scripts, and handle user interaction.
* We used **content scripting** to modify the actual content of the webpages (changing fonts, disabling distractions, etc). 

## How It Works
* A popup interface allows users to toggle features
* Background scripts communicate with browser tabs
* Content scripts manipulate DOM elements on supported websites

## What We Learned
This project was our first Chrome extension and first hackathon experience. We learned: 
* How Chrome Extensions work from scratch
* Effective teamwork and project collaboration
* Problem-solving under time pressure
* Reaching out to mentors/sponsors for help and applying their feedback
* How to laugh and cry over bugs together

When we hit walls while working (like unhiding cnn.com’s header), the help we received from our hackathon sponsors and directors was technically valuable and inspiring.

## Try It Out
1. Clone this repo
2. Open `chrome://extensions`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select this folder
6. Click the extension icon → try toggling simplify

### Planned Features
* Per-site customization
* Grayscale / high contrast mode 
* Expand dyslexia-friendly font options


### **Privacy Policy for Simplify**
* Simplify does not collect, store, or transmit any personal or sensitive user data.
* All functionality takes place locally on the user’s device. No information is shared with third parties.
* We do not access or track browsing history, user activity, or website content. Any settings (such as font size) are only applied to the page visually and are not stored or transmitted unless saved locally using Chrome’s storage system.
* If we ever change this policy, updates will be reflected here.

---

Made with 💚 at HackDavis 2025 
