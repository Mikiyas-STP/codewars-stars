# Codewars Stars

Hello! This is a web app to fetch and compare user statistics from the Codewars API, allowing you to see who the real "stars" are. Enter a list of usernames to generate a dynamic leaderboard.

**Live Demo:** [(https://codewars-stars-mgm.netlify.app/)]

---

### Features

-   Fetches user data for multiple Codewars users simultaneously.
-   Dynamically generates a language filter based on the users' completed katas.
-   Displays a leaderboard for the "Overall" score or for any specific language.
-   Sorts users by score in descending order.
-   Highlights the top-ranked user with a special style.

---

### How to Use

1.  Enter a comma-separated list of Codewars usernames into the input field and Click the "Generate" button.
2.  The table will display the "Overall" ranking by default.
3.  Use the dropdown menu to switch between different language leaderboards.

---

### Local Development

This project uses modern JavaScript Modules (`import`/`export`), so it must be run from a local server.

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Mikiyas-STP/codewars-stars.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd codewars-stars
    ```

3.  **Install all dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm start
    ```
    This will automatically open the project in your default web browser.

5.  **To run the tests:**
    ```bash
    npm test
    ```

---

### Tech Stack Used 

-   **HTML5**
-   **CSS**
-   **JavaScript (ES Modules)** - For the core application logic.
-   **Jest** - For unit testing the data processing functions.
-   **Babel** - For transforming JavaScript to ensure compatibility in the test environment.
-   **live-server** - A simple development server.
-   **Netlify** - For continuous deployment and hosting.

---

**Project Owner:** [Mikiyas Gebremichael](https://github.com/Mikiyas-STP)
**june 2025**