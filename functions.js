module.exports = arr = Array();

module.exports.addVotes = (vote) => {
	vote.addVote();
	let toSend = `Candidate ${vote.name} in ${vote.themeName} currently have ${vote.votes} number of votes`;
	console.log(toSend);
	arr.push(toSend);
}

module.exports.errMax = (vote) => {
	let toSend = `ERR: MAX- Can not add The candidate ${vote.name} any more votes!`;
	console.log(toSend);
	arr.push(toSend);
}

module.exports.print = (msg) => {
	console.log(msg);
	arr.push(msg);
}

module.exports.reset = (vote) => {
	vote.resetVote();
	let toSend = 'Votes have been reset';
	console.log(toSend);
	arr.push(toSend);
}
