// console.log("Mohammed Abrar Shareef")
var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0

var questions = [
  {
    question: "What is your name? ",
    answer: "Abrar"
  },
  {
    question: "What is your age? ",
    answer: "25"
  },
  {
    question: "Where do you live? ",
    answer: "Bangalore"
  }
]

var highScores=[
  {
    userName: "Abrar",
    score: 9
  },
  {
    userName: "Mariam",
    score: 8
  },
]

function Quiz (question, answer){
  userAnswer= readlineSync.question(question)
  if(userAnswer === answer){
    score +=1;
    console.log(chalk.blue("Correct", score))
  }
  else{
    console.log(chalk.red("Wrong", score))
  }
}



for( i=0; i<questions.length; i++){
  var quizQuestion=questions[i]
  Quiz(quizQuestion.question, quizQuestion.answer)
}
  console.log("Final Score ", score)
  console.log("Check out the leaderboard: ")

  for(i=0;i<highScores.length;i++){
    var scores=highScores[i];
  console.log(chalk.green(scores.userName + " : " + scores.score))
  }

  console.log("If you have beat any of the High Scores, please send a screenshot at xxxx@xxxxx.com")

