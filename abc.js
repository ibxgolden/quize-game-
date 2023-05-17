function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
	}

	function showResults(questions, quizContainer, resultsContainer){
	}
	showQuestions(questions, quizContainer);
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
	{
		question: "What is 300/3?",
		answers: {
			a: '3',
			b: '5',
			c: '100'
		},
		correctAnswer: 'c'
	}
	{
		question: "What is 2*56?",
		answers: {
			a: '3',
			b: '5',
			c: '112'
		},
		correctAnswer: 'c'
	}
{
		question: "What is 500*4?",
		answers: {
			a: '2000',
			b: '5',
			c: '2100'
		},
		correctAnswer: 'a'
	}
{
		question: "What is 9*0?",
		answers: {
			a: '3',
			b: '0',
			c: '10'
		},
		correctAnswer: 'b'
	}
{
		question: "What is 30/30?",
		answers: {
			a: '1',
			b: '5',
			c: '10'
		},
		correctAnswer: 'a'
	}
];
function showQuestions(questions, quizContainer){
	var output = [];
	var answers;
	for(var i=0; i<questions.length; i++){
		
	
		answers = [];

		for(letter in questions[i].answers){

		
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

	
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	quizContainer.innerHTML = output.join('');
}
