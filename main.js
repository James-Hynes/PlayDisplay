var teamColors = {
	'LAL': ['#4A2583', '#F5AF1B', '#FFFFFF'],
	'BOS': ['#009E60', '#000000', '#FFFFFF'],
	'ATL': ['#000080', '#FF0000', '#C0C0C0'],
	'CHA': ['#1D8CAA', '#1C0C65', '#969491'],
	'CHI': ['#D4001F', '#000000', '#FFFFFF'],
	'CLE': ['#B3121D', '#FFD700', '#000080'],
	'DAL': ['#0B60AD', '#072156', '#A9A9A9'],
	'DEN': ['#4B90CD', '#FDB827', '#002D62'],
	'DET': ['#00519A', '#EB003C', '#041E40'],
	'GSW': ['#04529C', '#FFCC33', '#FFFFFF'],
	'HOU': ['#CE1138', '#CCCCCC', '#000000'],
	'IND': ['#092C57', '#FFC322', '#C0C0C0'],
	'LAC': ['#EE2944', '#146AA2', '#FFFFFF'],
	'MEM': ['#001F70', '#7399C6', '#FDB927'],
	'MIA': ['#000000', '#B62630', '#FF9F00'],
	'MIL': ['#003614', '#E32636', '#C0C0C0'],
	'MIN': ['#0F4D92', '#8C92AC', '#50C878'],
	'BKN': ['#000000', '#000000', '#FFFFFF'],
	'NOP': ['#002B5C', '#B4975A', '#E31836'],
	'NYK': ['#0953A0', '#FF7518', '#C0C0C0'],
	'OKC': ['#007DC3', '#F05133', '#FDBB30'],
	'ORL': ['#0047AB', '#000000', '#708090'],
	'PHI': ['#0046AD', '#D0103A', '#FFFFFF'],
	'PHO': ['#1C105E', '#E65F20', '#B1B3B3'],
	'POR': ['#F0163A', '#B6BFBF', '#000000'],
	'SAC': ['#753BBD', '#000000', '#8A8D8F'],
	'SAS': ['#000000', '#BEC8C9', '#FFFFFF'],
	'TOR': ['#B31B1B', '#000000', '#708090'],
	'UTA': ['#00275D', '#FF9100', '#0D4006'],
	'WAS': ['#C60C30', '#002244', '#BCC4CC']
};

var teamStarters = {
	"BOS_STARTERS": ['Marcus Smart', 'Avery Bradley', 'Jae Crowder', 'Jared Sullinger', 'Amir Johnson'],
    "BKN_STARTERS": ['Jarrett Jack', 'Joe Johnson', 'Bojan Bogdanovic', 'Thaddeus Young', 'Brook Lopez'],
    "NYK_STARTERS": ['Jose Calderon', 'Aaron Afflalo', 'Carmelo Anthony', 'Kyle O\'Quinn', 'Robin Lopez'],
    "TOR_STARTERS": ['Kyle Lowry', 'DeMar DeRozan', 'DeMarre Carrol', 'Patrick Patterson', 'Jonas Valanciunas'],
    "PHI_STARTERS": ['Tony Wroten', 'Hollis Thompson', 'Robert Covington', 'Nerlens Noel', 'Jahlil Okafor'],
    "CHI_STARTERS": ['Derrick Rose', 'Jimmy Butler', 'Doug McDermott', 'Pau Gasol', 'Joakim Noah'],
    "CLE_STARTERS": ['Kyrie Irving', 'Iman Shumpert', 'LeBron James', 'Kevin Love', 'Timofey Mozgov'],
    "DET_STARTERS": ['Reggie Jackson', 'Kentavious Caldwell-Pope', 'Marcus Morris', 'Ersan Ilyasova', 'Andre Drummond'],
    "IND_STARTERS": ['George Hill', 'Monta Ellis', 'Paul George', 'Jordan Hill', 'Ian Mahimi'],
    "MIL_STARTERS": ['Michael Carter-Williams', 'Khris Middleton', 'Giannis Antetokounmpo', 'Jabari Parker', 'Greg Monroe'],
    "ATL_STARTERS": ['Jeff Teague', 'Kyle Korver', 'Thabo Sefalosha', 'Paul Millsap', 'Al Horford'],
    "CHA_STARTERS": ['Kemba Walker', 'Nicolas Batum', 'Michael Kidd-Gilchrist', 'Cody Zeller', 'Al Jefferson'],
    "WAS_STARTERS": ['John Wall', 'Bradley Beal', 'Otto Porter, Jr.', 'Nene Hilario', 'Marcin Gortat'],
    "MIA_STARTERS": ['Goran Dragic', 'Dwyane Wade', 'Luol Deng', 'Chris Bosh', 'Hassan Whiteside'],
    "ORL_STARTERS": ['Elfrid Payton', 'Victor Oladipo', 'Tobias Harris', 'Aaron Gordon', 'Nikola Vucevic'],
    "DAL_STARTERS": ['Deron Williams', 'Wesley Matthews', 'Chandler Parsons', 'Dirk Nowitzki', 'Zaza Pachulia'],
    "HOU_STARTERS": ['Ty Lawson', 'James Harden', 'Trevor Ariza', 'Donatas Motiejunas', 'Dwight Howard'],
    "SAS_STARTERS": ['Tony Parker', 'Danny Green', 'Kawhi Leonard', 'LaMarcus Aldridge', 'Tim Duncan'],
    "NOP_STARTERS": ['Jrue Holiday', 'Eric Gordon', 'Quincy Pondexter', 'Anthony Davis', 'Omer Asik'],
    "MEM_STARTERS": ['Mike Conley', 'Courtney Lee', 'Tony Allen', 'Zach Randolph', 'Marc Gasol'],
    "DEN_STARTERS": ['Emmanuel Mudiay', 'Randy Foye', 'Wilson Chandler', 'Danilo Gallinari', 'Kenneth Faried'],
    "POR_STARTERS": ['Damian Lillard', 'Gerald Henderson', 'Al-Farouq Aminu', 'Meyers Leonard', 'Mason Plumlee'],
    "MIN_STARTERS": ['Ricky Rubio', 'Kevin Martin', 'Andrew Wiggins', 'Kevin Garnett', 'Karl-Anthony Towns'],
    "OKC_STARTERS": ['Russell Westbrook', 'Dion Waiters', 'Kevin Durant', 'Serge Ibaka', 'Enes Kanter'],
    "UTA_STARTERS": ['Trey Burke', 'Alec Burks', 'Gordon Hayward', 'Derrick Favors', 'Rudy Gobert'],
    "GSW_STARTERS": ['Stephen Curry', 'Klay Thompson', 'Harrison Barnes', 'Draymond Green', 'Andrew Bogut'],
    "LAC_STARTERS": ['Chris Paul', 'J.J. Reddick', 'Wesley Johnson', 'Blake Griffin', 'DeAndre Jordan'],
    "LAL_STARTERS": ['D\'Angelo Russell', 'Jordan Clarkson', 'Kobe Bryant', 'Brandon Bass', 'Roy Hibbert'],
    "PHO_STARTERS": ['Eric Bledsoe', 'Brandon Knight', 'PJ Tucker', 'Markieff Morris', 'Tyson Chandler'],
    "SAC_STARTERS": ['Rajon Rondo', 'Ben McLemore', 'Rudy Gay', 'DeMarcus Cousins', 'Kosta Koufos']
};


var teamList = [
	// Atlantic Division \\
	'Boston Celtics',
	'Brooklyn Nets',
	'New York Knicks',
	'Toronto Raptors',
	'Philadelphia 76ers',
	
	// Central Division \\
	'Chicago Bulls',
	'Cleveland Cavaliers',
	'Detroit Pistons',
	'Indiana Pacers',
	'Milwuakee Bucks',
	
	// Southeast Division \\
	'Atlanta Hawks',
	'Charlotte Hornets',
	'Washington Wizards',
	'Miami Heat',
	'Orlando Magic',
	
	// Southwest Division \\
	'Dallas Mavericks',
	'Houston Rockets',
	'San Antonio Spurs',
	'New Orleans Pelicans',
	'Memphis Grizzlies',
	
	// Northwest Division \\
	'Denver Nuggets',
	'Portland Trailblazers',
	'Minnesota Timberwolves',
	'Oklahoma City Thunder',
	'Utah Jazz',
	
	// Pacific Division \\
	'Golden State Warriors',
	'Los Angeles Clippers',
	'Los Angeles Lakers',
	'Phoenix Suns',
	'Sacramento Kings'
]

// Defines basic variables used globally 
var playerList = []; var homeList = []; var awayList = [];
var homeTeam; var awayTeam;
// the names of the teams
var homeRoster = [];
// roster of home team, to be filled with strings aka names of players
var awayRoster = [];
// roster of away team, to be filled with string aka names of players
var positions = ['PG', 'SG', 'SF', 'PF', 'C'];
// positional array for easy access to play positions
var infoArray = {};

// Autocomplete for inputs on starting page -- sources table above
$(document).ready(function() {
	$('#left').autocomplete({
		source: teamList,
		autoFocus: true
	});
	$('#right').autocomplete({
		source: teamList,
		autoFocus: true
	});
});

// Player class -- makes editing the player divs easy
function Player(name, position, elm, id, home) {
	this.pos = position;
	this.name = name;
	this.id = id
	this.home = home;
	this.elm = elm;
	this.addID = function() {
		this.elm.id = this.id;
	};
	this.move = function(left, right, top, bottom, time) {
		$(document).ready(function() {
			$('#'+id).animate({
				left: '+='+left,
				right: '+='+right,
				top: '+='+top,
				bottom: '+='+bottom
			}, time);
		});
	};
	// design color scheme based on team colors
	if(home) {
		this.elm.style.backgroundColor = teamColors[homeTeam][0];
		this.elm.style.borderColor = teamColors[homeTeam][1];	
	} else {
		this.elm.style.backgroundColor = teamColors[awayTeam][0];
		this.elm.style.borderColor = teamColors[awayTeam][1];
	};
};

// Creates lists of div elements from HTML page, this is used for setting the player.elm item for each player. Allows for easy access to each player's item.
// The general concept is to be able to select a player by name like 'Bradley Beal'.move(1000, 0, 0, 0, 1000), with easy access to name and number
function createLists() {
	var divList = document.getElementsByClassName('player');
	// get a list of all divs with class player in the document
	for(var div in divList) {
		if(hasClass(divList[div], 'home_team')) {
			// if it is a home player, add it to the home list and the full player list
			homeList.push(divList[div]);
			playerList.push(divList[div]);
		} else if(hasClass(divList[div], 'away_team')) {
			awayList.push(divList[div]);
			playerList.push(divList[div]);
		};
	};
};

// quick function to test if an object has a specified class
// moved to it's own function because of different browser issues / function being slightly too unreadable while contained in createLists() function
function hasClass(elm, cls) {
	// make sure the element actually has a classList, this is undefined on some browsers as well.
	if(elm.classList != undefined) {
		if(elm.classList.contains(cls)) {
			// simple function, returns true if it finds the specified class
			return true;
		} else {
			return false;
		};
	} else {
		return false;	
	};
};

// This function just parses through the two designated lists (homeRoster and awayRoster) and creates Player() objects with all of the required params
// This makes for very easy access to the html elements + positions + all of the good info one could use
function createPlayerInfoArray() {
	for(var player in homeRoster) {
		infoArray[homeRoster[player]] = new Player(homeRoster[player], positions[player], homeList[player], 'home'+player, true);
		infoArray[homeRoster[player]].addID();
	};
	for(var player in awayRoster) {
		infoArray[awayRoster[player]] = new Player(awayRoster[player], positions[player], awayList[player], 'away'+player, false);
		infoArray[awayRoster[player]].addID();
	};
};

// function not in use for now, makes sure a given string is a valid hexadecimal color
// will be used when users are able to enter their own colors instead of just teams
function isValidHexa(_string) {
	var invalidalphabet = ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	// letters after 'f'
	if(_string.indexOf('#') != -1 && _string.length === 7) {
		// just checks for any characters after the letter f
		for(var letter in invalidalphabet) {
			if(_string.indexOf(invalidalphabet[letter]) != -1) {
				return false;
			};
		};
	return true;
	
	} else {
		return false;
	};
};

// converts team names such as 'Golden State Warriors' to GSW, and 'Washington Wizards' to WAS
// used to set one global standard for team naming -- reduces the length that tables must be, and makes all values much simpler
// there are no checks here because after the word is returned, it goes through the loadPlayers() check to confirm that it is a real team / real team name
function convertToAcronym(teamName) {
	var splitName = teamName.split(' ');
	// split the team name into an array
	if(teamName === 'Brooklyn Nets') {
		return 'BKN';
	} else if(teamName === 'Oklahoma City Thunder') {
		return 'OKC';
	} else if(teamName === 'BRK') {
		return 'BKN';
	};
	
	if(splitName.length === 2) {
		// if it is a two word team name, take the first three letters and capitalize them
		return teamName.substring(0, 3).toUpperCase();
	} else if(splitName.length === 3) {
		// if it a three word team name, take the first letter of each word and capitalize them
		return (splitName[0][0] + splitName[1][0] + splitName[2][0]).toUpperCase();
	} else if(teamName.length === 3) {
		// if the name is submitted as an acronym, just return that in uppercase.
		return teamName.toUpperCase();
	} else {
		// return a string so that no functions get broken when comparing in the loadPlayers() check
		return '';
	};
};

// function used to make all player elements have an effect when hovering over them
// in a function so that when new elements are created, this effect can be quickly applied.
function updateHoverStatus() {
	$(document).ready(function() {
		$('.player').hover(function() {
			$(this).fadeTo('fast', 0.5);
			
			}, function() {	
			$(this).fadeTo('fast', 1);	
		});
	});
};

// quick function to fill each team's roster with their starting 5.
// has a quick check to confirm that the team exists, just in case.
function fillRosterLists(home, away) {
	var starterConstant = '_STARTERS';
	console.log(home, away);
	if(teamStarters.hasOwnProperty(home+starterConstant) && teamStarters.hasOwnProperty(away+starterConstant)) {
		homeRoster = teamStarters[home+starterConstant];
		awayRoster = teamStarters[away+starterConstant];
	} else {
		console.error('Could not find team roster, something must have gone very wrong');
	}
};


// function to animate the header sliding out and the hardwood backing coming in.
// in a function for repetition
function introAnimations() {
	$(document).ready(function() {
		$('#header').animate({
			top: '-=110'
		}, 750);
		
		$('#startbutton').attr('disabled', 'true');
		
	// $('<img src=\'basketball-floor-texture.png\' id="background-image"></img>').appendTo('body');
	});
};

function resetAnimations() {
	$(document).ready(function() {
		$('#header').animate({
			top: '+=110'
		}, 750);
		
		$('#startbutton').attr('disabled', false);
	});
};

// big function called when start button is pressed
// starts out by getting the values of the two inputs, then converts them to their acronym forms, then goes through checks to confirm that they are real teams -- if either isn't,
// it is randomly selected from the current list of teams, then it goes through simple animations to remove the header, and finally it creates the player divs, and calls all of
// the previous functions that are used to fill in all necessary info about the teams, players, colors, etc, etc.
function loadPlayers() {
	var homeInput = document.getElementById('left').value; var awayInput = document.getElementById('right').value;
	homeInput = convertToAcronym(homeInput); awayInput = convertToAcronym(awayInput);
	
	if(homeInput in teamColors) {
		homeTeam = homeInput;
	} else {
		homeTeam = convertToAcronym(teamList[Math.floor(Math.random() * teamList.length)]);
	};
		
	if(awayInput in teamColors) {
		awayTeam = awayInput; 
	} else {
		awayTeam = convertToAcronym(teamList[Math.floor(Math.random() * teamList.length)]);	
	};
	
	introAnimations();
	resetAnimations();
	
	for(var i = 0; i < 10; i++) {
		var player = document.createElement('div')
		if(i < 5) {
			player.className = 'player home_team';
		} else {
			player.className = 'player away_team';
		};
		document.body.appendChild(player);
	};
	
	fillRosterLists(homeTeam, awayTeam);
	createLists();
	createPlayerInfoArray();
	updateHoverStatus();
	
};


