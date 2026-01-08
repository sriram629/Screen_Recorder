# 🎥 Screen Recorder

An efficient, browser-based screen recording application. This project features a polished **Frontend** for real-time screen/audio capture and a **Backend** structure for handling data.

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg?style=for-the-badge)](https://sriram629.github.io/Screen_Recorder/)
[![Deployment](https://img.shields.io/github/actions/workflow/status/sriram629/Screen_Recorder/static.yml?style=for-the-badge&label=Deployment)](https://github.com/sriram629/Screen_Recorder/actions)

---

## 🌟 Features

- **Screen Capture:** Record your entire screen, a specific window, or a browser tab.
- **Audio Integration:** Capture system audio and microphone input simultaneously.
- **Real-time Preview:** View the recording stream live within the interface.
- **Instant Download:** Automatically exports recordings as high-quality video files.
- **Auto-Deployment:** CI/CD integration via GitHub Actions for seamless updates.

---

## 🏗️ Project Architecture

The project is organized into two primary layers to separate concerns and optimize deployment.


### 📂 Repository Structure
```text
├── .github/workflows/    # CI/CD (GitHub Actions)
├── frontend/             # Client-side (Deployed to GH Pages)
│   ├── index.html        # Main Entry Point
│   ├── screen.css        # Styling & UI Layout
│   └── screen.js         # Capture Logic (MediaRecorder API)
├── backend/              # Server-side logic
│   └── [backend-files]   # Node.js/API logic
└── README.md             # Project Documentation
```

### 🚀 Getting Started
**Prerequisites**

A modern web browser (Chrome, Edge, or Firefox recommended for Screen Capture API support).

  - Node.js (if running the backend locally).

  - Local Development
  
**Clone the repository:**

  ```bash
  git clone [https://github.com/sriram629/Screen_Recorder.git](https://github.com/sriram629/Screen_Recorder.git)
  ```

**Run the Frontend: Navigate to the frontend folder and open index.html in your browser, or use a Live Server extension in VS Code.**

**Run the Backend:**

  ```bash
  cd backend
  npm install
  npm start
  ```

## 🌐 Deployment (CI/CD)

This project uses **GitHub Actions** to automate the deployment of the frontend.

* **Workflow:** Whenever you push to the `master` branch, the `.github/workflows/static.yml` script triggers.
* **Build Path:** The script is configured to upload only the `./frontend` directory, ensuring that `index.html` serves as the root of your live site.
* **URL:** [https://sriram629.github.io/Screen_Recorder/](https://sriram629.github.io/Screen_Recorder/)



---

## 🛠️ Built With

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **APIs:** [MediaStream Recording API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API)
* **Deployment:** GitHub Pages & GitHub Actions
