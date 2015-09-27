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

var playerList = []; var homeList = []; var awayList = [];
var divList = document.getElementsByTagName('div');
var homeTeam = 'UTA'; var awayTeam = 'SAC';
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
	$('div').hover(function() {
		$(this).fadeTo('fast', 0.5);
	}, function() {
		$(this).fadeTo('fast', 1);
	});
});

createLists();
createPlayerInfoArray();