// Q1 https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Test Case 1
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Test Case 2
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Test Case 3
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

// Solution 1
const lengthOfLongestSubstring = s => {
    let currentString = [];
    let long = 0;
    for (let i = 0; i < s.length; i++) {
        const currentPosition = currentString.indexOf(s[i]);
        if (currentPosition !== -1) {
            currentString.splice(0, currentPosition + 1);
        }

        currentString.push(s[i]);
        long = Math.max(long, currentString.length);
    }

    return long;
};


console.log(lengthOfLongestSubstring("abcabcbb")); // 3
