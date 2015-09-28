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
	'WAS': ['#C60C30', '#002244', '#BCC4CC'],
	'Los Angeles Lakers': ['#4A2583', '#F5AF1B', '#FFFFFF'],
	'Boston Celtics': ['#009E60', '#000000', '#FFFFFF'],
	'Atlanta Hawks': ['#000080', '#FF0000', '#C0C0C0'],
	'Charlotte Hornets': ['#1D8CAA', '#1C0C65', '#969491'],
	'Chicago Bulls': ['#D4001F', '#000000', '#FFFFFF'],
	'Cleveland Cavaliers': ['#B3121D', '#FFD700', '#000080'],
	'Dallas Mavericks': ['#0B60AD', '#072156', '#A9A9A9'],
	'Denver Nuggets': ['#4B90CD', '#FDB827', '#002D62'],
	'Detroit Pistons': ['#00519A', '#EB003C', '#041E40'],
	'Golden State Warriors': ['#04529C', '#FFCC33', '#FFFFFF'],
	'Houston Rockets': ['#CE1138', '#CCCCCC', '#000000'],
	'Indiana Pacers': ['#092C57', '#FFC322', '#C0C0C0'],
	'Los Angeles Clippers': ['#EE2944', '#146AA2', '#FFFFFF'],
	'Memphis Grizzlies': ['#001F70', '#7399C6', '#FDB927'],
	'Miami Heat': ['#000000', '#B62630', '#FF9F00'],
	'Milwuakee Bucks': ['#003614', '#E32636', '#C0C0C0'],
	'Minnesota Timberwolves': ['#0F4D92', '#8C92AC', '#50C878'],
	'Brooklyn Nets': ['#000000', '#000000', '#FFFFFF'],
	'New Orleans Pelicans': ['#002B5C', '#B4975A', '#E31836'],
	'New York Knicks': ['#0953A0', '#FF7518', '#C0C0C0'],
	'Oklahoma City Thunder': ['#007DC3', '#F05133', '#FDBB30'],
	'Orlando Magic': ['#0047AB', '#000000', '#708090'],
	'Philadelphia 76ers': ['#0046AD', '#D0103A', '#FFFFFF'],
	'Phoenix Suns': ['#1C105E', '#E65F20', '#B1B3B3'],
	'Portland Trailblazers': ['#F0163A', '#B6BFBF', '#000000'],
	'Sacramento Kings': ['#753BBD', '#000000', '#8A8D8F'],
	'San Antonio Spurs': ['#000000', '#BEC8C9', '#FFFFFF'],
	'Toronto Raptors': ['#B31B1B', '#000000', '#708090'],
	'Utah Jazz': ['#00275D', '#FF9100', '#0D4006'],
	'Washington Wizards': ['#C60C30', '#002244', '#BCC4CC']
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

var playerList = []; var homeList = []; var awayList = [];
var homeTeam; var awayTeam;
var homeRoster = ['Stephen Curry', 'Klay Thompson', 'Harrison Barnes', 'Draymond Green', 'Andrew Bogut']; 
var awayRoster = ['John Wall', 'Bradley Beal', 'Otto Porter, Jr.', 'Nene Hilario', 'Marcin Gortat'];
var positions = ['PG', 'SG', 'SF', 'PF', 'C'];
var infoArray = {};


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
	if(home) {
		this.elm.style.backgroundColor = teamColors[homeTeam][0];
		this.elm.style.borderColor = teamColors[homeTeam][1];	
	} else {
		this.elm.style.backgroundColor = teamColors[awayTeam][0];
		this.elm.style.borderColor = teamColors[awayTeam][1];
	};
};

function createLists() {
	var divList = document.getElementsByClassName('player');
	for(var div in divList) {
		if(hasClass(divList[div], 'home_team')) {
			homeList.push(divList[div]);
			playerList.push(divList[div]);
		} else if(hasClass(divList[div], 'away_team')) {
			awayList.push(divList[div]);
			playerList.push(divList[div]);
		};
	};
};

function hasClass(elm, cls) {
	if(elm.classList != undefined) {
		if(elm.classList.contains(cls)) {
			return true;
		} else {
			return false;
		};
	} else {
		return false;	
	};
};

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


function loadPlayers() {
	var homeInput = document.getElementById('left').value; var awayInput = document.getElementById('right').value;
	if(homeInput in teamColors) {
		homeTeam = homeInput;
	} else {
		homeTeam = teamList[Math.floor(Math.random() * teamList.length)];	
	};
	
	if(awayInput in teamColors) {
		awayTeam = awayInput; 
	} else {
		awayTeam = teamList[Math.floor(Math.random() * teamList.length)];	
	};
	
	if(awayTeam in teamColors && homeTeam in teamColors) {
		$(document).ready(function() {
			$('#header').animate({
				top: '-=110'
			}, 750);
			$('#startbutton').attr('disabled', 'true');
		});
		
		for(var i = 0; i < 10; i++) {
			var player = document.createElement('div')
			if(i % 2 === 0) {
				player.className = 'player home_team';
			} else {
				player.className = 'player away_team';
			};
			document.body.appendChild(player);
		};
		
		$(document).ready(function() {
			$('.player').hover(function() {
				$(this).fadeTo('fast', 0.5);
				
				}, function() {
					
				$(this).fadeTo('fast', 1);
	});
		});
		createLists();
		createPlayerInfoArray();
		console.log(infoArray);
		
		infoArray['Bradley Beal'].move(100, 100, 100, 100, 1000);
	};
};

