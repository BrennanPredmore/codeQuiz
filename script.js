var questionTitle = document.querySelector('#questionTitle');
var paragraphSection = document.querySelector('#paragraph');
var ul = document.querySelector('#choices')

var choiceOneElem = document.querySelector("#choiceOne");
var choiceTwoElem = document.querySelector("#choiceTwo");
var choiceThreeElem = document.querySelector("#choiceThree");
var choiceFourElem = document.querySelector("#choiceFour");

var startButton = document.querySelector('#startButton')
.addEventListener('click', buttonClicked);

function buttonClicked(e){
    document.querySelector('#questionTitle').textContent = 'Commonly used data types do not include:';
    document.querySelector('#paragraph').innerHTML = '';

    var choiceOneBtn = document.createElement("button");
    choiceOneBtn.textContent = '1. Strings';
    choiceOneElem.append(choiceOneBtn);

    var choiceTwoBtn = document.createElement("button");
    choiceTwoBtn.textContent = '2. booleans';
    choiceTwoElem.append(choiceTwoBtn);

    var choiceThreeBtn = document.createElement("button");
    choiceThreeBtn.textContent = '3. alerts';
    choiceThreeElem.append(choiceThreeBtn);

    var choiceFourBtn = document.createElement("button");
    choiceFourBtn.textContent = '4. numbers';
    choiceFourElem.append(choiceFourBtn);

    // document.querySelector('#choiceOne').textContent = 'Strings';
    // document.querySelector('#choiceTwo').textContent = 'booleans';
    // document.querySelector('#choiceThree').textContent = 'alerts';
    // document.querySelector('#choiceFour').textContent = 'numbers';
    // document.querySelector('#startButton').textContent = 'Submit Answer';
}

// var submitButton = document.querySelector('#startButton')
// .addEventListener('click', submitAnswer);

        // Use delegator strategy, have event listener on predefined element main
        // wait for clicks on main element
        ul.addEventListener("click", function(event) {

            var targetedClick = event.target;
            
            // Only target li tags to proceed to next classroom
            if(targetedClick.matches("button")) {

                console.log(targetedClick.textContent);




            }
        });


        // SET TIMER!
        var time = document.getElementById('time');

        time.addEventListener('click', buttonClicked);

        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
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
            var fiveMinutes = 15 * 5,
                display = document.querySelector('#time');
            startTimer(fiveMinutes, display);
        };
