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
	
};

var playerList = []; var homeList = []; var awayList = [];
var divList = document.getElementsByTagName('div');
var homeRoster = ['Stephen Curry', 'Klay Thompson', 'Harrison Barnes', 'Draymond Green', 'Andrew Bogut']; 
var awayRoster = ['John Wall', 'Bradley Beal', 'Otto Porter, Jr.', 'Nene Hilario', 'Marcin Gortat'];
var positions = ['PG', 'SG', 'SF', 'PF', 'C'];
var infoArray = {};


function Player(name, position, elm, id, home) {
	this.pos = position;
	this.name = name;
	this.id = id
	this.hasBall = false;
	this.home = home;
	this.elm = elm;
	this.addID = function() {
		this.elm.id = this.id;
	};
	this.move = function(left, right, top, bottom, time) {
		$(document).ready(function() {
			$('#'+id).animate({
				left: '+='+left.toString(),
				right: '+='+right.toString(),
				top: '+='+top.toString(),
				bottom: '+='+bottom.toString()
			}, time);
		});
	};
	if(home) {
		this.elm.style.backgroundColor = homeColors[0];
		this.elm.style.borderColor = homeColors[1];	
	} else {
		this.elm.style.backgroundColor = awayColors[0];
		this.elm.style.borderColor = awayColors[1];
	};
	
	if(this.pos == 'PG') {
		this.hasBall = true;
		this.elm.style.backgroundImage = 'bball.jpg';
		console.log(this.hasBall);
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