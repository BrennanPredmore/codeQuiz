var questionTitle = document.querySelector('#questionTitle');
var paragraphSection = document.querySelector('#paragraph');
var ul = document.querySelector('#choices');
var currentQuestionIndex = 0;
var timer;
var timerInterval;
var display;

var startButton = document
  .querySelector('#startButton')
  .addEventListener('click', startButtonClicked);

function startButtonClicked(e) {
  var fiveMinutes = 15 * 5,
    display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
  displayQuestion();
}

function answerButtonClicked(e) {
  // check if the answer is correct
  // if: incorrect decrement time by 15 seconds
  // increment the next question
  // manipulate the page
  if (this.value !== questions[currentQuestionIndex].answer) {
    alert('incorrect');
    timer -= 15;
  } else {
    alert('corrrect');
  }
  currentQuestionIndex++;
  displayQuestion();
}

function endGame() {
  clearInterval(timerInterval);
  console.log('game over');
  //display results DIV
  document.querySelector('#resultsDIV').style.display = 'block';
  // Hide Choices DIV
  document.querySelector('.container').style.display = 'none';
  // add score final
  document.querySelector('#score').textContent = timer;
  document.querySelector('#time').textContent = timer;
}

function displayQuestion(e) {
  var currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) {
    return endGame();
  }
  document.querySelector('#questionTitle').textContent = currentQuestion.title;
  document.querySelector('#paragraph').innerHTML = '';
  ul.innerHTML = '';

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var li = document.createElement('li');
    var choiceButton = document.createElement('button');
    choiceButton.setAttribute('value', currentQuestion.choices[i]);
    choiceButton.textContent = currentQuestion.choices[i];
    choiceButton.onclick = answerButtonClicked;
    choiceButton.classList.add('answerChoice');
    li.append(choiceButton);
    ul.append(li);
  }
}

// SET TIMER!
var time = document.getElementById('time');
time.addEventListener('click', startButtonClicked);

function startTimer(duration, display) {
  timer = duration;
  var minutes;
  var seconds;
  timerInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      // timer = duration;
    }
  }, 1000);
}

window.onload = function () {};

//Local storage
// Store
document.querySelector('#submit').addEventListener('submit', function (event) {
  event.preventDefault();
  var initials = document.querySelector('#initials').value;
  localStorage.setItem(initials, timer);
  displayScores();
});

// Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem('intitials');
document.querySelector('#resultsDIV').style.display = 'none';
document.querySelector('#scoresDIV').style.display = 'none';

document.querySelector('#viewScores').addEventListener('click', displayScores);
function displayScores() {
  document.querySelector('#scoresDIV').style.display = 'block';
  Object.keys(localStorage).forEach(function (key) {
    console.log(localStorage.getItem(key));

    var li = document.createElement('li');
    li.textContent = key + '-' + localStorage.getItem(key);
    document.querySelector('#scoreslist').appendChild(li);
  });
  document.querySelector('.container').style.display = 'none';
  document.querySelector('#resultsDIV').style.display = 'none';
}
