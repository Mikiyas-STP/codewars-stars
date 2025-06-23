//my codewar api base
const API_BASE_URL = 'https://www.codewars.com/api/v1/users/';
/**
 * @param {string[]} usernames
 * @returns {Promise<object[]>} 
 */
async function fetchUserData(usernames) {
    const fetchPromises = usernames.map(username => 
        fetch(API_BASE_URL + username)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`User not found: ${username}`);
                }
                return response.json();
            })
    );
    try {       
        const usersData = await Promise.all(fetchPromises); //instead of fetching them one by one.
        console.log('Successfully fetched data:', usersData);
        return usersData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}