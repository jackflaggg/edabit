function getVoteCount(votes) {
    return Math.abs(Object.values(votes).reduce((acc, item) => item - acc, 0));
}

console.log(getVoteCount({ upvotes: 2, downvotes: 33 }))