# simplify 

Chrome extension built to create a cleaner, distraction-free web experience. Designed especially for neurodivergent users such as those with ADHD or autism. Our extension modifies webpages by changing fonts, disabling visual clutter, and offering a more accessible reading interface. Currently, it’s optimized for cnn.com.

<img width="1436" height="750" alt="Screenshot 2025-04-28 at 11 09 40 PM" src="https://github.com/user-attachments/assets/004ddc54-c430-41d6-8b75-b8b4cc87f986" />

Timeline: April 2025 (24-hour programming sprint)

## Context
As a first time participant at HackDavis, two friends and I took on the challenge of improving the web-experience for neurodivergent users, especially those with ADHD or autism.

People with ADHD, autism, or cognitive processing challenges often struggle with overwhelming online interfaces (such as social media, news sites, dashboards) due to attention difficulties, sensory overload, and complicated navigation. Inclusive web design that considers neurodiverse needs is important yet often disregarded.

## Objective
Our goal was to create a Chrome extension that would clean up cluttered websites for a distraction free web-experience.

## Key Findings
Addressing the smallest details in design would make the biggest difference for our users.

**Issues that users with ADHD and autism face with current web-pages include:**
**Audiovisual overload**
• 	Pop-up ads and moving images easily distract and overwhelm.
**Overstimulation**
•	Bright colors, flashing graphics, and complex layouts trigger sensory stress.
**Unpredictable navigation**
•	Inconsistent or sudden layout changes can be confusing and make it hard to focus.

**Accessibility principles for neurodivergent users included:**
• 	Easy-to-read typography
• 	Consistent formatting
•	  Strong visual hierarchy
•	  Calming, intentional color choices
• 	Minimal distractions (avoiding pop-up ads, moving images, and flashing graphics)

With the limited time we had, we focused on delivering these keypoints through our extension to users.

## Our process
**1. Research**
 Looked at major sites (Amazon, CNN, Reddit, YouTube) to spot common pain points.
**2. Focus**
Narrowed focus to news sites (starting with CNN) → high traffic, frequent use.
**3. Build & Test**
Tailored our extension for CNN.com, simplifying layout and reducing overload.
**4. Scale**
Found that the same design principles worked seamlessly across other sites → our solution became scalable / broadly applicable.**

## Key design considerations
• 	**Line height**: Increased to 1.5–1.75 (vs. standard web default 1.2–1.4) → ideal for  ADHD/autistic users: reduces visual crowding, helps track reading
• 	**Letter spacing**: Slightly wider → prevents word “clumping,” improves legibility
• 	**Distraction reduction**: Removed ads, autoplay videos, and excessive images
• 	**Color choices**: Simple black text on white background → fewer sensory triggers
• 	**Font**: Chose a dyslexia-friendly typeface (Atkinson Hyperlegible)

<img width="1920" height="1080" alt="simplify (1)" src="https://github.com/user-attachments/assets/c6fcc273-5f25-4740-a8f4-ff3dbf52c57b" />


## How We Built It
* For the frontend UI, we used **HTML, CSS, and JavaScript** to build the popup interface.
* Used **content scripting** to modify the actual content of the webpages (changing fonts, increase line/letter spacing, disable ads/autoplay, enforce color schemes). 
* The **Chrome Extensions API (Manifest v3)** was used for the extension's structure/permissions, enable communication between the popup and browser tabs, register content scripts, and handle user interaction.


## Features
* Dyslexia-friendly font
* Hides distracting elements (images, advertisements, videos, footers)  
* Easy toggle via popup  
* Clean, readable layout  



## What We Learned
This project was our first Chrome extension and first hackathon experience. We learned: 
* How Chrome Extensions work from scratch
* Effective teamwork and project collaboration
* Problem-solving under time pressure
* Reaching out to mentors/sponsors for help and applying their feedback
* How to laugh and cry over bugs together

## Try It Out!
1. Clone this repo
2. Open `chrome://extensions`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select this folder
6. Click the extension icon → try out simplify :)

### Planned Features
* Per-site customization
* Grayscale / high contrast mode 
* Expand dyslexia-friendly font options

### **Privacy Policy for Simplify**
* Simplify does not collect, store, or transmit any personal or sensitive user data.
* All functionality takes place locally on the user’s device. No information is shared with third parties.
* We do not access or track browsing history, user activity, or website content. Any settings (such as font size) are only applied to the page visually and are not stored or transmitted unless saved locally using Chrome’s storage system.
* If we ever change this policy, updates will be reflected here.
