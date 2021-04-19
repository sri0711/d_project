const body = document.getElementById('body');
const reset = document.getElementById('reset');
const no = Math.floor(Math.random() * 3 + 1);
body.style = `background-image:url('/images/bg_images/bg_${no}.jpg');`;

// this is begins the game functions

// random value generated
const y = Math.floor(Math.random() * 100 + 1);

// counting the number of guesses
// made for correct Guess
var guess = 1;
const form = document.getElementById('form');
const start = document.getElementById('start');
const image = document.getElementById('image');
const image1 = document.getElementById('image1');
const msg = document.getElementById('game_msg');
const infomsg = document.getElementById('infomsg');

start.addEventListener('click', start_game);

window.onload = function () {
	start.style = 'display:block;';
	infomsg.style = 'display:none;';
};

function start_game() {
	start.style = 'display :none';
	form.style = 'display:inline-flex';
	image.src = '/images/think.gif';
	msg.innerHTML = 'Guess the Correct Number';
}

form.addEventListener('submit', run_prog);
reset.addEventListener('click', function () {
	location.reload();
});
function run_prog(event) {
	// number guessed by user
	var x = document.getElementById('guessField').value;
	event.preventDefault();

	// change the emoji for the number of guess
	if (0 == guess % 3) {
		image.src = '/images/anger1.gif';
		setTimeout(() => {
			image.src = '/images/think.gif';
		}, 3000);
	} else if (0 == guess % 5) {
		image.src = '/images/anger2.gif';
		setTimeout(() => {
			image.src = '/images/think.gif';
		}, 3000);
	} else {
		image.src = '/images/sad1.gif';
		setTimeout(() => {
			image.src = '/images/think.gif';
		}, 3000);
	}

	// this for checking the guess number correction
	if (x == null || x == '') {
		x = null;
		alert('Enter any number');
	} else if (x == y) {
		image1.style = 'display : block';
		image.style = 'display:none';
		msg.innerHTML =
			'CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN ' + guess + ' GUESS ';
		form.reset();
		form.style = 'display:none';
		reset.style = 'display:block';
	} else if (x > y) {
		/* if guessed number is greater 
       than actual number*/
		guess++;
		msg.innerHTML = `OOPS SORRY!! TRY A SMALLER THAN ${x}`;
		form.reset();
	} else {
		guess++;
		msg.innerHTML = `OOPS SORRY!! TRY A GREATER THAN ${x}`;
		form.reset();
	}
}
