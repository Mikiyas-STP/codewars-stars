import { fetchUserData } from '../modules/apilogic.js';
import { getUniqueLanguages, sortUsersByRank } from '../modules/utils.js';

const form = document.getElementById('user-form');
const usernamesInput = document.getElementById('usernames-input');
const languageSelect = document.getElementById('language-select');
const tableBody = document.getElementById('leaderboard-body');
const errorMessage = document.getElementById('error-message');
const loader = document.getElementById('loader');

let state = {
    usersData: [],
    currentLanguage: 'overall',
};
//Rendering Function
/**
 * @param {string[]} languages sorted array of language names
*/

function populateLanguage(languages) {
    languageSelect.innerHTML = '';

    const overallOption = document.createElement('option');
    overallOption.value = 'overall';
    overallOption.textContent = 'Overall';
    languageSelect.appendChild(overallOption);

    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang.charAt(0).toUpperCase() + lang.slice(1);
        languageSelect.appendChild(option);
    });
    languageSelect.disabled = false; //Enable the dropdown
}

/**
 * @param {object[]} users sorted array of user objects to display
 */
function renderTable(users) {
    tableBody.innerHTML = '';

    if (users.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 3; //3 columns
        cell.textContent = 'No users found for this language rank.'; //message if no users have a rank
        row.appendChild(cell);
        tableBody.appendChild(row);
        return;
    }

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        // Highlight the top user
        if (index === 0) {
            row.classList.add('highlight');
        }
        const usernameCell = document.createElement('td');
        usernameCell.textContent = user.username;

        const clanCell = document.createElement('td');
        clanCell.textContent = user.clan || 'N/A'; //'N/A' if clan is null

        const scoreCell = document.createElement('td');
        const score = state.currentLanguage === 'overall' 
            ? user.ranks.overall.score 
            : user.ranks.languages[state.currentLanguage].score;
        scoreCell.textContent = score;
        row.appendChild(usernameCell);
        row.appendChild(clanCell);
        row.appendChild(scoreCell);
        tableBody.appendChild(row);
    });
}
// This section is for my event listners and main application logic
async function handleGenerate(event) {
    event.preventDefault(); //prevent browser from reloading the page
    const usernames = usernamesInput.value.split(',')
        .map(u => u.trim()) //trim whitespace
        .filter(u => u); //filter empty strings
    if (usernames.length === 0) {
        errorMessage.textContent = 'Please enter at least one username.';
        errorMessage.classList.remove('hidden');
        return;
    }
    // --- Start Loading State ---
    loader.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    tableBody.innerHTML = '';
    languageSelect.disabled = true;
    try {
        const usersData = await fetchUserData(usernames);
        state.usersData = usersData;
        state.currentLanguage = 'overall';
        const languages = getUniqueLanguages(usersData);
        const sortedUsers = sortUsersByRank(usersData, 'overall');

        populateLanguage(languages);
        renderTable(sortedUsers);
    } catch (error) {
        errorMessage.textContent = `Error: ${error.message}`;
        errorMessage.classList.remove('hidden');
    } finally {
        // This block runs whether the try succeeded or failed
        loader.classList.add('hidden');
    }
}
function languageChange(event) {
    const selectedLanguage = event.target.value;
    state.currentLanguage = selectedLanguage;
    // this is because i don't need to fetch data again just resort and rerender
    const sortedUsers = sortUsersByRank(state.usersData, selectedLanguage);
    renderTable(sortedUsers);
}

form.addEventListener('submit', handleGenerate);
languageSelect.addEventListener('change', languageChange);