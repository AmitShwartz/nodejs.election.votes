var events 		 = require('events'),
	eventsConfig = require('./config'),
	votes		 = require('./votes'),
	func		 = require('./functions');
	
module.exports = class Election extends events.EventEmitter{
	constructor(maxVotes){
		super();
		this.maxVotes 	= maxVotes;
		this.themes		= new Array();
		this.on(eventsConfig.events.print, func.print);
		this.on(eventsConfig.events.reset, func.reset);
		this.on(eventsConfig.events.add, func.addVotes);
		this.on(eventsConfig.events.err, func.errMax);
	}
	addTheme(theme){
		if(!(`${theme}` in this.themes))
	 		this.themes[`${theme}`] = new Array();
	}
//add vote to the candidate in theme that mentioned , if not exist create new candidate 	
	voteCandidate(candidate, theme) {
		if(!(`${theme}` in this.themes)) {
			console.log('ERROR: in addCandidate(), theme does not exist.');
			return;
		}
		if(!(`${candidate}` in this.themes[`${theme}`]))
			this.themes[`${theme}`][`${candidate}`] = new votes(candidate, theme, this.maxVotes);
		
		if(this.themes[`${theme}`][`${candidate}`].votes < this.maxVotes) 
			this.emit(eventsConfig.events.add, this.themes[`${theme}`][`${candidate}`]);
		else
			this.emit(eventsConfig.events.err, this.themes[`${theme}`][`${candidate}`]);	
	}
//do emit(reset) to all the candidates of all themes 	
	resetAllvotes(){
		Object.keys(this.themes).forEach((element) => {
						Object.keys(this.themes[`${element}`]).forEach((candidate) => {
							this.emit(eventsConfig.events.print,`Reseting votes for ${candidate}..`)
							this.emit(eventsConfig.events.reset, this.themes[element][candidate]);
						});	
					});
	}
//do emit(print) for all of the themes, candidate and results	
	getAllvotes(){
		Object.keys(this.themes).forEach((element) => {
						this.emit(eventsConfig.events.print, `The theme is: ${element}`);
						Object.keys(this.themes[`${element}`]).forEach((candidate) => {
							this.emit(eventsConfig.events.print, `The total votes for ${candidate} is: ${this.themes[element][candidate].votes}`);		
						});	
					});
	}
}



