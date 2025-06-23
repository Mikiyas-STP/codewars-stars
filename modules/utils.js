export function getUniqueLanguages(usersData) {
    // Use a Set to automatically handle uniqueness.
    const languages = new Set();
    usersData.forEach(user => {
        Object.keys(user.ranks.languages).forEach(lang => languages.add(lang));
    });
    return [...languages].sort();
}

export function sortUsersByRank(users, language) {
    // filter out users who don't have a rank for the selected language.
    const filteredUsers = users.filter(user => {
        if (language === 'overall') {
            return true;
        }

        return user.ranks.languages[language];
    });

    // Now, sort the filtered list.
    const sortedUsers = filteredUsers.sort((userA, userB) => {
        let scoreA, scoreB;

        if (language === 'overall') {
            scoreA = userA.ranks.overall.score;
            scoreB = userB.ranks.overall.score;
        } else {
            scoreA = userA.ranks.languages[language].score;
            scoreB = userB.ranks.languages[language].score;
        }
        
        return scoreB - scoreA;//descending order
    });
    return sortedUsers;
}