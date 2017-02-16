var triviaGame = {
	correctAnswer: 0,
	incorrectAnswer: 0,
	unansweredQuestions: 0,
	answers: ['Blue', 'Yellow', 'Black', 'White'],
	userGuesses: [],
	
	displayGame: function() {
//when game starts - start button appears, timer is shown, timer starts, and questions are shown
		
		
		//start button disppear
		$('#startButton').addClass('hidden');
		//timer starts
		$('#questions').removeClass('hidden');
		//timer = shown
		//question shown
		timer.commence(); 

		//show the Questions & Timer (hint: remove the "hidden" class)
	},
	results: function() {
		for (var i = 0; i < this.userGuesses.length; i++){
			if (this.userGuesses[i] === this.answers[i]) {
				this.correctAnswer++;
				this.unansweredQuestions--;
			}
				
			if (this.userGuesses[i] !== this.answers[i]) {
				this.incorrectAnswer--;
				this.unansweredQuestions--;
			}
				
		}

	$('.gameHeader').html("End"); //Display GAME OVER text
	$('#questions').addClass('hidden');	//hide the questions
	$('.scoreboard').removeClass('hidden');	//show the reset div
	$('.unanswered').html("Unanswered Questions: " + this.unanswered); //display the no. of unanswered 
	$('.correct').html("Correct: " + this.correct);	//display the no. of correct 
	$('.incorrect').html("Incorrect Answers: " + this.wrong);	//display the no. of wrong 

},

};
//IF TIMER INSIDE OF GAME OBJECT, I NEED FUNCTIONS FOR START, COUNT, TIMECONVERT, STOP WITHIN THE GAME OBJECT AS WELL
//those timer functions would need to be called properly in order for it to work


//questions have radio buttons
//questions display 
// click on answers
//selected answer can switch
	
//when timer = 0 
	// questions disppear
	//.hidden class is reapplied to questions
	//scoreboard is shown - unanswered, correct, wrong
	//total correct and answered questions are displayed
	//restart button appears

	
var timer = {
	countDown: 10,
	flags: 0,

	commence: function() {
	if (timer.flags === 0) {
		intervalId = setInterval(timer.count, 1000);
		timer.flags++;
	};

  },
  // Stop 
  	stop: function() {
  		clearInterval(intervalId);
  		triviaGame.results();
  	},

  	count: function() {
         if (timer.countDown > 0) {
             timer.countDown--;
             var time = timer.timeConverter(timer.countDown);
             $('.gameHeader').html("Time: " + time + " seconds");
         }
         else { timer.stop(); };
     },

  	timeConverter: function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
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
//when the document loads...
$(document).ready(function() {
	//HIDE QUESTIONS, TIMER, RESULTS BOX, RESTART BUTTON
	$('.gameHeader').html("Commence"); //MAKE SURE YOU CREATE CLASS in CSS for 'hidden'
	$('#questions').addClass('hidden');//MAKE SURE YOU CREATE CLASS in CSS for 'hidden'
	$('.scoreboard').addClass('hidden'); //MAKE SURE YOU CREATE CLASS in CSS for 'hidden'

});


$('.startButton').on('click', function() {
	triviaGame.displayGame();
});

function QuestionClick(x, y,z){
   this.y = y;
   this.x = x;
   console.log(x);
   console.log(y);
   $('input[name="'+x+'"]').on('click', function(){
       var answer = $('input[name="'+x+'"]:checked').val();
           triviaGame.userGuesses[z] = answer;
	});
}

	QuestionClick('q1', 'q1r' ,0);
	QuestionClick('q2', 'q2r' , 1);
	QuestionClick('q3', 'q3r', 2);
	QuestionClick('q4', 'q4r', 3);