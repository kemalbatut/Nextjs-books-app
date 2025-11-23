# ☢️ ARCHIVE EXPLORER // V4.2

### A Cyber-Industrial Interface for the Open Library

Welcome to **Archive Explorer**. This isn't your standard, boring book website. This is a "Terminal Grade" interface designed to make searching for knowledge feel like you are hacking into a futuristic database.

We stripped away the soft, friendly rounded corners of modern web design and replaced them with **Brutalism**: raw edges, high contrast colors, and technical readouts.

---

## 🌌 The "Vibe" (Design Philosophy)

Most websites try to look invisible. This website tries to look like a machine.

* **The "Terminal" Look:** The default mode is set to **"Acid Green"**. It uses a dark black background with bright neon text, similar to old-school computer monitors or military heads-up displays.
* **The Glitch:** You will notice the text sometimes "glitches" or distorts. This is intentional—it adds to the feeling that you are viewing a raw data stream.
* **The Scanline:** There is a faint line moving down the screen that mimics an old CRT monitor refreshing.
* **No Curves:** Every button, box, and image has sharp, 90-degree corners. We wanted it to feel industrial and precise.

---

## 🚀 Key Features

### 1. The 3D "Infinite Floor"
The background isn't a video or a picture. It is a **live 3D simulation** running right in your browser.
* It generates a glowing grid that stretches into infinity.
* It uses **post-processing effects** (like "Bloom" and "Noise") to make it look like a grainy security camera feed.
* **It moves:** The floor scrolls endlessly, giving you the feeling of flying forward through cyberspace.

### 2. "Intercept" Mode (Browsing)
Instead of a boring "Browse" page, we have **"Intercept"**.
* When you load this page, the system picks a random subject (like "Sci-Fi", "Magic", or "Thriller").
* It "decodes" the signal and pulls a list of books from the Open Library database instantly.
* Don't like the results? Hit **"REROUTE SIGNAL"** to grab a fresh batch of data.

### 3. The Audit Log (History)
The system watches what you read.
* On the home page, there is a sidebar called **"AUDIT_LOG"**.
* Every time you view a book's details, it gets stamped into this log.
* This creates a breadcrumb trail so you can easily jump back to files you were looking at earlier.

### 4. Secure Access (The Keys)
You can't save data without clearance.
* **Registration/Login:** You can create a secure account.
* **The "Key" (JWT):** When you log in, the system gives your browser a digital "Key Card" (a secure token). You don't see it, but every time you try to save a favourite book, your browser flashes this card to the server to prove you are allowed to write data.

### 5. "Dossier" Mode (Light Theme)
If the dark terminal is too hard on your eyes, you can toggle **Display Mode**.
* Clicking "DISPLAY: DARK" in the navigation bar switches the system to **"Light Mode"**.
* This inverts the colors to white and blue, making it look like a printed classified document or a government dossier.

---

## 🛠️ How It Works (Under the Hood)

Even though it looks like a movie prop, it's built on very modern technology:

* **The Brain (Next.js):** This runs the whole show, managing the pages and how data flows.
* **The Memory (Jotai):** We use a tool called "Jotai" to handle the app's short-term memory—like remembering your search history or your list of favourites while you browse.
* **The Visuals (Three.js):** This is the math engine that draws the 3D grid lines and lighting effects in the background.
* **The Database (MongoDB):** This is the secure vault where user accounts and favourite lists are permanently stored.

---

## 🚦 How to Run This System

If you want to boot this up on your own machine:

1.  **Install the tools:**
    Open your terminal and type:
    ```bash
    npm install
    ```

2.  **Configure the Environment:**
    You need a `.env` file with the address of the API (The Backend).
    ```env
    NEXT_PUBLIC_API_URL="[https://your-backend-api.vercel.app/api/user](https://your-backend-api.vercel.app/api/user)"
    ```

3.  **Launch:**
    Start the engine:
    ```bash
    npm run dev
    ```
    Then open `http://localhost:3000` in your browser.

---

**System Status:** ONLINE
**Version:** 4.2.0
**Security:** ACTIVE