var events 		 = require('events'),
	eventsConfig = require('./config'),
	func		 = require('./functions');

module.exports = class Votes{

	constructor(name, themeName, maxVotes) {
		this.themeName = themeName;
		this.maxVotes = maxVotes;
		this.name = name;
		this.votes = 0;
	}

	addVote() {
		this.votes += 1;	
	}

	resetVote(){
		this.votes = 0;
	}
}