var triviaGame = {
	unanswered: 4,
	correct: 0,
	wrong: 0,
	answers: ["c","c","c","c"],

	userResponses: [],

    displayGame: function() {
		$('#start').addClass('hidden');
		$('#triviaTitle').html("Ready...");
		setTimeout(triviaGame.set,1000);
		setTimeout(triviaGame.go,2000);
		setTimeout(timer.start,2800);

    },

    set: function() {
    	$('#triviaTitle').html("Get Set");
    },

    go: function () {
    	$('#triviaTitle').html("GO!").addClass('grande');
    },

	result: function() {
		for (var i = 0; i < this.userResponses.length; i++) {
			if (this.userResponses[i] === this.answers[i]) {
				this.correct++;
				this.unanswered--;
			}
			if (this.userResponses[i] !== this.answers[i]) {
				this.wrong++;
				this.unanswered--;
			}
		};

		$('#triviaTitle').html("GAME OVER").addClass('grande'); //Display GAME OVER text
		$('.questions').addClass('hidden');	//hide the questions
		$('#scoreboard').removeClass('hidden');	//show the reset div
		$('#unansweredQuestions').html("Unanswered Questions: " + this.unanswered); //display the no. of unanswered 
		$('#correct').html("Correct: " + this.correct);	//display the no. of correct 
		$('#incorrect').html("Wrong: " + this.wrong);	//display the no. of wrong 

	},


};

var timer = {
	time: 10,


	start: function() {
		$('.questions').removeClass('hidden');
		$('#triviaTitle').html("Time Remaining: " + timer.timeConverter(timer.time) + " seconds!").removeClass('grande');
		intervalId = setInterval(timer.count, 1000);
      	console.log(timer.time)
  	},

	stop: function() {
		clearInterval(intervalId);
		triviaGame.result();
	},

  count: function() {
  	if (timer.time > 0) {
		timer.time--;
		var currentTime = timer.timeConverter(timer.time);
		$('#triviaTitle').html("Time Remaining: " + currentTime + " seconds!");
	}
	else { 
		timer.stop(); 
	};
  },

  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  },
};

//EVENTS
$(document).ready(function() { 
	$('#triviaTitle').html("Start Game");
	$('.questions').addClass('hidden');
	$('#scoreboard').addClass('hidden');

});

$('#start').on('click', function() {
	triviaGame.displayGame();
});

function QuestionClick(x, y,z){
   this.y = y;
   this.x = x;
   console.log(x);
   console.log(y)
   $('input[name="'+x+'"]').on('click', function(){
       var answer = $('input[name="'+x+'"]:checked').val();
           triviaGame.userResponses[z] = answer;
	});
};
QuestionClick('q1', 'q1r' ,0);
QuestionClick('q2', 'q2r' , 1);
QuestionClick('q3', 'q3r', 2);
QuestionClick('q4', 'q4r', 3);