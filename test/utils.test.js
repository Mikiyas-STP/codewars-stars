import { sortUsersByRank } from '../modules/utils.js';

describe('The sortUsersByRank function', () => {
    const mockUsers = [
        {
            username: 'userB_high_overall',
            ranks: {
                overall: { score: 500 },
                languages: { javascript: { score: 100 } }
            }
        },
        {
            username: 'userC_high_js',
            ranks: {
                overall: { score: 300 },
                languages: { javascript: { score: 400 }, python: { score: 100 } }
            }
        },
        {
            username: 'userA_low_scores',
            ranks: {
                overall: { score: 100 },
                languages: { javascript: { score: 50 } }
            }
        }
    ];
    test('should correctly sort users by their overall score', () => {
        const result = sortUsersByRank([...mockUsers], 'overall');
        expect(result.length).toBe(3);
        expect(result[0].username).toBe('userB_high_overall');//Highest
        expect(result[1].username).toBe('userC_high_js');
        expect(result[2].username).toBe('userA_low_scores');//Lowest
    });
    test('should correctly sort users by a specific language score', () => {
        const result = sortUsersByRank([...mockUsers], 'javascript');
        expect(result.length).toBe(3);
        expect(result[0].username).toBe('userC_high_js');
        expect(result[1].username).toBe('userB_high_overall');
        expect(result[2].username).toBe('userA_low_scores');
    });
    test('should filter out users who do not have a score for the selected language', () => {
        const result = sortUsersByRank([...mockUsers], 'python');
        expect(result.length).toBe(1); //only return one user
        expect(result[0].username).toBe('userC_high_js'); //theonly user with a python rank
    });
});