# Codewars Stars

Hello this is a web app to fetch and compare user statistics from the Codewars API, allowing you to see who the real "stars" are. Enter a list of usernames to generate a dynamic leaderboard.

**Live Demo:** [my netlify to be linkedhere at the final step]

---

### Features

-   Fetch user data for multiple Codewars users.
-   Dynamically generates a language filter based on the users' completed katas.
-   Display a leaderboard for the "Overall" score or for any specific language.
-   Sorts users by score in descending order.
-   Highlights the top-ranked user in the current view.

---

### How to Use

1.  Enter a comma-separated list of Codewars usernames into the input field.
2.  Click the "Generate Leaderboard" button.
3.  The table will display the "Overall" ranking by default.
4.  Use the dropdown menu to switch between different language leaderboards.

---

### Local Development

To run this project locally, follow these steps:

1.  Clone the repository:
    ```bash
    git clone https://github.com/Mikiyas-STP/codewars-stars.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd codewars-stars
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  To run the tests:
    ```bash
    npm test
    ```
5.  Open `index.html` in your web browser.

---

### Tech Stack

-   HTML5
-   CSS3
-   JavaScript
-   [Jest](https://jestjs.io/) & [nock](https://github.com/nock/nock) for testing
-   Deployed on [Netlify](https://www.netlify.com/)

**Project Owner:** [(https://github.com/Mikiyas-STP/codewars-stars)]