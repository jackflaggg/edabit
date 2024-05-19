// Create a function to extract the name of the subreddit from its URL.
//
// 	Examples
// subReddit("https://www.reddit.com/r/funny/") ➞ "funny"
//
// subReddit("https://www.reddit.com/r/relationships/") ➞ "relationships"
//
// subReddit("https://www.reddit.com/r/mildlyinteresting/") ➞ "mildlyinteresting"

function subReddit(link) {
	const regex = /\/r\/(\w+?)\//;
	const match = link.match(regex)
	console.log(match)
}

console.log(subReddit("https://www.reddit.com/r/funny/"))