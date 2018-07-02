	// var game = new Phaser.Game(1366,768, Phaser.AUTO );
var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO );
var sound_flag = 0;
var minutes;
var seconds;
var left = 1;


var person="";
var array = [
	'Q',
	'W',
	'E',
	'R',
	'T',
	'Y',
	'U',
	'I',
	'O',
	'P',
	'A',
	'S',
	'D',
	'F',
	'G',
	'H',
	'J',
	'K',
	'L',
	'Z',
	'X',
	'C',
	'V',
	'B',
	'N',
	'M',
];
var taken = [];
var showarray = [];
var i,j=347,k=365;
var templ = 0;
var count=0;
var at;
var correct = 0;
var letters;
var gndfn=0;
var gndfn_text;
var key;
var input = [];
var index = 0;
var typed_text = " ";
var tempc;
var key_array = [];
var timeoutflag = 1;
var timeRemaining;
var me;
var timeflag=0;
var timeout_sound;
var wrong_sound;
var bm_sound;


var list = [
	'HI'+' ',
	'SO'+' ',
	'MY'+' ',
	'THE'+' ',
	'EASY'+' ',
	'MORE'+' ',
	'WHY'+' ',
	'HOW'+' ',
	'YES'+' ',
	'THIS'+' ',
	'YAY'+' ',
	'WOW'+' ',
	'BINGO'+' ',
	'CRAZY'+' ',
	'NICE'+' ',
	'GAMER'+' ',
	'NAUGHTY'+' ',
	'WACKY'+' ',
	'LEVEL'+' ',
	'TIGER'+' ',
	'NATIVE'+' ',
	'POSSIBLE'+' ',
	'RELATIVE'+' ',
	'DIFFICULT'+' ',
	'NEIGHBOUR'+' ',
	'BADASS'+' ',
	'TEMPORARY'+' ',
	'TEMPORARY'+' ',
	'DIFFERENCE'+' ',
	'MEASUREMENT'+' ',
	'ANTARTICA'+' ',
	'PACIFIC'+' ',
	'COMPUTER'+' ',
	'LAPTOP'+' ',
	'SMARTPHONE'+' ',
	'DAYS'+' ',
	'PERMANENT'+' ',
	'HAMMER'+' ',
	'COLLEGE'+' ',
	'CELEBRATE'+' ',
	'FESTIVAL'+' ',
	'EXAMS'+' ',
	'OUT'+' ',
	'OF'+' ',
	'WORDS'+' ',
]

var me;
var A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,BACKSPACE,ENTER;
var currentTime;
var timeDifference;
var bonus = 0;
var gndfn_increase_sound;
var style = {font: "100px Arial", fill: "#fff"};
var gameb;
var blob;

var gameState1 = function(){
}

gameState1.prototype = {
    preload:preload,
    create:create,
    update:update
};

var gameState2 = function(){
}

gameState2.prototype = {
    preload:preload2,
    create:create2,
    update:update2,

    createTimer: function(){
    me = this;
    me.timeLabel = me.game.add.text(game.world.width - 100, 50, "00:00",style);	

    me.timeLabel.anchor.setTo(0.5, 0);
    me.timeLabel.align = 'center';
    me.timeLabel.scale.setTo(0.4,0.4);


    },
    updateTimer: function(){
 	
    me = this;
 
    currentTime = new Date();
    var change = currentTime.getTime();
    
    if (timeflag) 
    {
    	bonus = bonus - 5000;
    	timeflag = 0;
    }

    change = change + bonus;
    
    

    timeDifference = me.startTime.getTime() - change;
    me.timeElapsed = Math.abs(timeDifference / 1000);
    timeRemaining = 30 - me.timeElapsed;
    minutes = Math.floor(timeRemaining / 60);
    seconds = Math.floor(timeRemaining) - (60 * minutes);
    var result = (minutes < 10) ? "0" + minutes : minutes; 
    result += (seconds < 10) ? ":0" + seconds : ":" + seconds;
    me.timeLabel.text = result;
	}

}

var gameState3 = function(){
}

gameState3.prototype = {
    preload:preload3,
    create:create3,
    update:update3
};

var gameState4 = function(){
}

gameState4.prototype = {
    preload:preload4,
    create:create4,
    update:update4
};

game.state.add('gameState1',gameState1); // home
game.state.add('gameState2',gameState2); // main game
game.state.add('gameState3',gameState3); // leaderboard
game.state.add('gameState4',gameState4); // instructions
game.state.start('gameState1');

function preload(){
	game.load.image('hb', 'images/lb1.jpg');
	game.load.image('ht', 'images/hometext.png');
	game.load.image('playb', 'images/play1.png');
	game.load.image('instructions', 'images/instructions.png');
	game.load.audio('blob','audio/blop.mp3');
}

function create(){
	blob = game.add.audio('blob');
   var hb = game.add.sprite(0, 0, 'hb');
   var ht = game.add.sprite(365, 150, 'ht');
   hb.scale.setTo(1, 1);
   var playb = game.add.button(615, 325, 'playb', playState, this, 2, 1, 0);
   var instructions = game.add.button(510, 430, 'instructions', instState, this, 2, 1, 0);
   playb.scale.setTo(0.7, 0.7);
   instructions.scale.setTo(0.7, 0.7);
}

function playState()
{
	blob.play();
	game.state.start('gameState2');
}


function instState()
{
	blob.play();
	game.state.start('gameState4');
}

function leadplayState()
{
	blob.play();
	setTimeout(function(){ game.state.start('gameState3'); }, 100);
}



function preload4(){
	game.load.image('inst', 'images/inst.png');
}

function create4(){
	var inst = game.add.sprite(0, 0, 'inst');
	setTimeout(function(){ game.state.start('gameState1'); }, 15000);
}

function update4(){
	
	
}




function update(){

}


function preload3(){
	game.load.image('home', 'images/home.png');
	game.load.image('play_again', 'images/play_again.png');
	game.load.image('lb', 'images/lb1.jpg');
	game.load.audio('blob','audio/blop.mp3');
}


function create3(){

game.sound.stopAll();
if (person!="") 
{
	gameOver();
}	

 
	console.log("score:"+gndfn)

  	blob = game.add.audio('blob');

	var lb = game.add.sprite(0, 0, 'lb');
	lb.scale.setTo(1, 1);

	var home = game.add.button(470, 550, 'home', homeState, this, 2, 1, 0);
	home.scale.setTo(0.5, 0.5);

	var play_again = game.add.button(670, 545, 'play_again', playAgain, this, 2, 1, 0);
	play_again.scale.setTo(0.5, 0.5);

  	game.add.text(575,175,"GAME OVER",{font: "Garamond" ,fontSize: '45px', fill:'#FFF'});
  	game.add.text(625,300,"Your Score: "+gndfn,{font: "Garamond" ,fontSize: '30px', fill:'#FFF'});

   
}

function homeState() {
	blob.play();
	game.state.start('gameState1');
}

function playAgain()
{
	blob.play();
	game.state.start('gameState2');
}


function update3(){

}


function preload2(){

	// generateList();
	game.load.image('monitor', 'images/monitor.png');
	game.load.image('keyboard', 'images/keyboard3.png');
	game.load.image('gameb', 'images/lb1.jpg');
	// game.load.image('gameb', 'public/images/hb-min.jpeg');
	game.load.audio('gndfn_increase_sound','audio/score_increase.mp3');
	game.load.audio('timeout_sound','audio/timeout.mp3');
	game.load.audio('wrong_sound','audio/wrong_sound.mp3');
	game.load.audio('bm_sound','audio/bm.ogg');
}

function create2(){
	

	j=347;
	k=365;
	index = 0;
	timeflag=0;
	correct = 0;
	count=0;
	templ = 0;
	timeoutflag = 1;
	input = [];
	gndfn=0;
	bonus = 0;

	gndfn_increase_sound = game.add.audio('gndfn_increase_sound');
	timeout_sound = game.add.audio('timeout_sound');
	wrong_sound = game.add.audio('wrong_sound');
	bm_sound = game.add.audio('bm_sound');
	bm_sound.loop = true;
	bm_sound.play();

	gameb = game.add.sprite(0, 0, 'gameb');
	
    
    // gameb.scale.setTo(1.7, 1.5);
    // gameb.scale.setTo(0.5, 0.358);
    gameb.scale.setTo(2,2);
    var monitor = game.add.sprite(500, 25, 'monitor');
    monitor.scale.setTo(0.30, 0.30);
    var keyboard = game.add.sprite(250, 300, 'keyboard');
    // keyboard.scale.setTo(1, 0.8);
    keyboard.scale.setTo(1, 1);

	var me = this;

	// document.getElementById("input").style.visibility = "visible";


    me.startTime = new Date();
    me.totalTime = 120;
    me.timeElapsed = 0;
 
    me.createTimer();
 
    me.gameTimer = game.time.events.loop(100, function()
    {
        me.updateTimer();

        if (minutes<0&&timeoutflag==1) 
		{
			game.state.start('gameState3');
			timeoutflag=0;
		}
    });

    
    for (i = 0; i < 26; i++) 
    {	
    	taken[i] = 0;
    }

    i=0;
    count = 0;
    while(count<26)
    {
    	templ = Math.floor(Math.random() * 26) + 0;

    	if (taken[templ]==0) 
    	{
    		showarray[templ] = String.fromCharCode(65+i);
    		taken[templ] = 1;
    		count++;
    		i++;
    	}
    }


   	letters = game.add.group();
   	tempc = list[gndfn/10];
	key_array = tempc.split('');

    for (i = 0; i < 26; i++) 
    {
    	at = game.add.text(j,k,showarray[i],{font: "Garamond" ,fontSize: '25px', fill:'#fff'});
    	letters.add(at);
    	j = j+54;
    	if (i == 9) 
    	{
    		k = k + 55;
    		j = 360;
    	}
    	if (i == 18) 
    	{
    		k = k + 58;
    		j = 390;
    	}

    }
    key = game.add.text(600,100,list[0],{font: "Garamond" ,fontSize: '25px', fill:'#000'});
   
	gndfn_text = game.add.text(50,50,'Score: 0',{font: "Garamond" ,fontSize: '35px', fill:'#fff'});


	UP = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	A = game.input.keyboard.addKey(Phaser.Keyboard.A);
	B = game.input.keyboard.addKey(Phaser.Keyboard.B);
	C = game.input.keyboard.addKey(Phaser.Keyboard.C);
	D = game.input.keyboard.addKey(Phaser.Keyboard.D);
	E = game.input.keyboard.addKey(Phaser.Keyboard.E);
	F = game.input.keyboard.addKey(Phaser.Keyboard.F);
	G = game.input.keyboard.addKey(Phaser.Keyboard.G);
	H = game.input.keyboard.addKey(Phaser.Keyboard.H);
	I = game.input.keyboard.addKey(Phaser.Keyboard.I);
	J = game.input.keyboard.addKey(Phaser.Keyboard.J);
	K = game.input.keyboard.addKey(Phaser.Keyboard.K);
	L = game.input.keyboard.addKey(Phaser.Keyboard.L);
	M = game.input.keyboard.addKey(Phaser.Keyboard.M);
	N = game.input.keyboard.addKey(Phaser.Keyboard.N);
	O = game.input.keyboard.addKey(Phaser.Keyboard.O);
	P = game.input.keyboard.addKey(Phaser.Keyboard.P);
	Q = game.input.keyboard.addKey(Phaser.Keyboard.Q);
	R = game.input.keyboard.addKey(Phaser.Keyboard.R);
	S = game.input.keyboard.addKey(Phaser.Keyboard.S);
	T = game.input.keyboard.addKey(Phaser.Keyboard.T);
	U = game.input.keyboard.addKey(Phaser.Keyboard.U);
	V = game.input.keyboard.addKey(Phaser.Keyboard.V);
	W = game.input.keyboard.addKey(Phaser.Keyboard.W);
	X = game.input.keyboard.addKey(Phaser.Keyboard.X);
	Y = game.input.keyboard.addKey(Phaser.Keyboard.Y);
	Z = game.input.keyboard.addKey(Phaser.Keyboard.Z);
	ENTER = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
	BACKSPACE = game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);

	// game.input.keyboard.removeKeyCapture(Phaser.Keyboard.ONE);
	// game.input.keyboard.removeKeyCapture(Phaser.Keyboard.Q);





	typed_text = game.add.text(600,250,"",{font: "Garamond" ,fontSize: '25px', fill:'#0f0'});
	timeout_sound.play();
	timeout_sound.pause();
	
}


function update2(){
	
if (minutes==0) 
{
	if (seconds<8) 
	{
		if (sound_flag==0) 
		{
			timeout_sound.play();
			sound_flag = 1;	
		}
					
		if (seconds%2==0) 
		{

			gameb.tint = 0xff0000;
		}
		else
		{

			gameb.tint = 0xffffff;
		}
	}
	else
	{
		timeout_sound.stop();
		sound_flag = 0;
	}

}


	
	// if (seconds%2==0) {
	// 	console.log(typed_text);
	// }


	// console.log(input[0]);
	// console.log(input[1]);



	if (Q.downDuration(1)) 
	{
		input[index++] = showarray[0];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (W.downDuration(1)) 
	{
		input[index++] = showarray[1];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (E.downDuration(1)) 
	{
		input[index++] = showarray[2];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (R.downDuration(1)) 
	{
		input[index++] = showarray[3];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (T.downDuration(1)) 
	{
		input[index++] = showarray[4];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (Y.downDuration(1)) 
	{
		input[index++] = showarray[5];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (U.downDuration(1)) 
	{
		input[index++] = showarray[6];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (I.downDuration(1)) 
	{
		input[index++] = showarray[7];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (O.downDuration(1)) 
	{
		input[index++] = showarray[8];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (P.downDuration(1)) 
	{
		input[index++] = showarray[9];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (A.downDuration(1)) 
	{
		input[index++] = showarray[10];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (S.downDuration(1)) 
	{
		input[index++] = showarray[11];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (D.downDuration(1)) 
	{
		input[index++] = showarray[12];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (F.downDuration(1)) 
	{
		input[index++] = showarray[13];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (G.downDuration(1)) 
	{
		input[index++] = showarray[14];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (H.downDuration(1)) 
	{
		input[index++] = showarray[15];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (J.downDuration(1)) 
	{
		input[index++] = showarray[16];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (K.downDuration(1)) 
	{
		input[index++] = showarray[17];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (L.downDuration(1)) 
	{
		input[index++] = showarray[18];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (Z.downDuration(1)) 
	{
		input[index++] = showarray[19];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (X.downDuration(1)) 
	{
		input[index++] = showarray[20];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (C.downDuration(1)) 
	{
		input[index++] = showarray[21];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (V.downDuration(1)) 
	{
		input[index++] = showarray[22];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (B.downDuration(1)) 
	{
		input[index++] = showarray[23];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (N.downDuration(1)) 
	{
		input[index++] = showarray[24];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (M.downDuration(1)) 
	{
		input[index++] = showarray[25];
		typed_text.text = typed_text.text + input[index-1];

	}
	else if (BACKSPACE.downDuration(1)&&input.length>0) 
	{
		// input[--index] = "";
		input.pop();
		index--;
		var temp_input = [];
		temp_input = input;
		temp_input = temp_input.join("");
		// console.log(temp_input);
		typed_text.text = temp_input;
		// console.log("  " + typed_text.text);
	}
	else if (ENTER.downDuration(1)) 
	{
		var check=0;
		while(key_array[check]!=" ")
		{
			if (input[check]==key_array[check]) 
			{
				correct = 1;
			}
			else
			{
				correct = 2;
				break;
			}
			
			check++;
		}
		if (correct==2) 
		{
			correct = 0;
		}

		if (correct==1) 
		{
			timeflag = 1;
			gndfn_increase_sound.play();
			gndfn = gndfn + 10;
			gndfn_text.text = 'Score: ' + gndfn;


			next();
			correct = 0;
			
			// input = [];			
		}
		else
		{
			wrong_sound.play();
		}
		
		input.length = 0;
		index = 0;
		typed_text.text = input;
	}

	

}


function next()
{
	left = left + 1;
	if (left <= list.length) 
	{
	
		tempc = list[gndfn/10];
		key_array = [];
		key_array = tempc.split('');
		index = 0;
		j=347;
		k=365;
		key.kill();
		key = game.add.text(600,100,list[gndfn/10],{font: "Garamond" ,fontSize: '25px', fill:'#000'});
	    for (i = 0; i < 26; i++) 
	    {	
	    	taken[i] = 0;
	    }

		i=0;
	    count = 0;
	    while(count<26)
	    {
	    	templ = Math.floor(Math.random() * 26) + 0;
	    	if (taken[templ]==0) 
	    	{
	    		showarray[templ] = String.fromCharCode(65+i);
	    		taken[templ] = 1;
	    		count++;
	    		i++;
	    	}
	    }

	   	letters.forEach(function (c) { 
	   		c.kill();
	    });

	    for (i = 0; i < 26; i++) 
	    {
	    	at = game.add.text(j,k,showarray[i],{font: "Garamond" ,fontSize: '25px', fill:'#fff'});
	    	letters.add(at);
	    	j = j+54;
	    	if (i == 9) 
	    	{
	    		k = k + 55;
	    		j = 360;
	    	}
	    	if (i == 18) 
	    	{
	    		k = k + 58;
	    		j = 390;
	    	}

	    }
	}
	else
	{
		game.state.start('gameState3');
	}
}


function gameOver()
{

	
}



