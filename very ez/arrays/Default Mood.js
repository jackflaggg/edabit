// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
//
//     Examples
// moodToday("happy") ➞ "Today, I am feeling happy"
//
// moodToday("sad") ➞ "Today, I am feeling sad"
//
// moodToday() ➞ "Today, I am feeling neutral"

function moodToday(mood) {
    return mood ? `Today, I am feeling ${mood}` : `Today, I am feeling neutral`;
}

console.log(moodToday());