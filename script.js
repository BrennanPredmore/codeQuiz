var questionTitle = document.querySelector('#questionTitle');
var paragraphSection = document.querySelector('#paragraph');
var ul = document.querySelector('#choices')
var currentQuestionIndex = 0
var timer;

var startButton = document.querySelector('#startButton')
.addEventListener('click', startButtonClicked);

function startButtonClicked(e){
    var fiveMinutes = 15 * 5,
    display = document.querySelector('#time');
startTimer(fiveMinutes, display);
displayQuestion()
}

function answerButtonClicked(e){
       // check if the answer is correct
      // if: incorrect decrement time by 15 seconds
     // increment the next question 
    // manipulate the page 
    if(this.value !== questions[currentQuestionIndex].answer){
alert('incorrect'); 
timer -= 15;
    }else{
        alert('corrrect');
    }
currentQuestionIndex++ 
displayQuestion() 
}

function displayQuestion(e){
    var currentQuestion = questions[currentQuestionIndex];
    document.querySelector('#questionTitle').textContent = currentQuestion.title;
    document.querySelector('#paragraph').innerHTML = '';
    ul.innerHTML = '';
  
    for (var i = 0; i < currentQuestion.choices.length;i++){
        var li = document.createElement('li');
          var choiceButton = document.createElement("button");
          choiceButton.setAttribute('value', currentQuestion.choices[i])
 choiceButton.textContent = currentQuestion.choices[i];
 choiceButton.onclick = answerButtonClicked
 choiceButton.classList.add('answerChoice')
 li.append(choiceButton)
 ul.append(li);

    
}}


        // SET TIMER!
        var time = document.getElementById('time');

        time.addEventListener('click', startButtonClicked);

        function startTimer(duration, display) {
             timer = duration;
             var minutes; 
             var seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
        
                display.textContent = minutes + ":" + seconds;
        
                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }
        
        window.onload = function () {

        };

        //Local storage
        // Store
localStorage.setItem("initials", timer);
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem('intitials');
