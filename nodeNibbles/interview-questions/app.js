
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const interviewQuestions = {
  index: 0,
  questions: [
    function () {
      console.log('Copyright https://www.toptal.com/javascript/interview-questions');
      console.log('Title: 37 Essential JavaScript Interview Questions');
    },
    function () {
      console.log('1. What is a potential pitfall with using typeof bar === "object" to determine if bar is and object? ow can this pitfall be avoided?');
      console.log('Answer:');
      console.log('null is also considered a object');
      console.log('So the code \'typeof null === "object"\' logs:', typeof null === "object");
    },
  ],
  init: function () {
    console.log("init");
    this.waitEnterAndCallNextQuestion();
  },
  callNextQuestion: function () {
    console.log("callNextQuestion");
    questions[index]();
    index++;
    this.waitEnterAndCallNextQuestion();
  },
  waitEnterAndCallNextQuestion: function () {
    console.log("waitEnterAndCallNextQuestion");
    rl.question('Press enter to continue...', (answer) => {
      this.callNextQuestion();
    });
  }
};
interviewQuestions.init();
