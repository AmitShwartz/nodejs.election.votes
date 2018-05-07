var http     = require('http'),
    express  = require('express'),
    func 	 = require('./functions'),
    app      = express(),
    election = require('./election'),
    port	 = process.env.PORT || 3000;


const max = 4;
	election = new election(max);
	election.addTheme("Fevorite Pets");
	election.addTheme("Best NightClube");
	election.addTheme("The Best Shop");
	election.voteCandidate("Dizzy", "Best NightClube");
	election.voteCandidate("Dizzy", "Best NightClube");
	election.voteCandidate("Louis", "Best NightClube");
	election.voteCandidate("Adidas", "The Best Shop");
	election.voteCandidate("Adidas", "The Best Shop");
	election.voteCandidate("Adidas", "The Best Shop");
	election.voteCandidate("Nike", "The Best Shop");
	election.voteCandidate("Dog", "Fevorite Pets");
	election.voteCandidate("Dog", "Fevorite Pets");
	election.voteCandidate("Dog", "Fevorite Pets");
	election.voteCandidate("Dog", "Fevorite Pets");
	election.voteCandidate("Dog", "Fevorite Pets");
	election.voteCandidate("Cat", "Fevorite Pets");
	election.getAllvotes();
	election.resetAllvotes();
	election.getAllvotes();

app.get('/', (req, res) => {
	res.send(arr);
}).listen(port);

// http.createServer(app).listen(3000);

// console.log('listening on port 3000');
	


