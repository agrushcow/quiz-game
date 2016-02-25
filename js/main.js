var currentQuestion;
var correct;
var click;
var score;

var quiz = [{
    qNumber: 1,
    question: "Which of these receivers had the most touchdowns receiving in a single season during the 1980s?",
    choices: ["Mark Clayton", "Jerry Rice", "Ricky Sanders", "Sterling Sharpe"],
    feedback: "The GOAT helped carry the '89 Niners to another super bowl championship. He had a prolific season, with 82 receptions and nearly 1500 yards to go with a 1980s high of 17 TDs receiving.",
    correct: 1
}, { 
    qNumber: 2,
    question: "Which of these QBs have the most passing yards in their NFL career?",
    choices: ["Dan Marino", "Warren Moon", "Joe Montana", "Steve Young"],
    feedback: "Dan Marino ended his career with a then NFL record 61,361 yards. He also compiled 420 TD's and finished his career holding a handful of all-time records.",
    correct: 0
},  {
    qNumber: 3,
    question: "Which of these QBs set a record for most completions in a season?",
    choices: ["Peyton Manning", "Rich Gannon", "Warren Moon", "Drew Brees"],
    feedback: "In 2011 Drew Brees broke Peyton Manning's record a year after it was set for completions in a single season. He threw for 468 completions, besting the previous mark by 18.",
    correct: 3
},  {
    qNumber: 4,
    question: "Which of these running backs have not broken 2,000 yards in a single season?",
    choices: ["Eric Dickerson", "Marcus Allen", "O.J. Simpson", "Barry Sanders"],
    feedback: "Marcus Allen etched a hall-of-fame career, but never found his way over 2,000 yards rushing. The closest he got was 1,759 yards on the ground.",
    correct: 1
},  {
    qNumber: 5,
    question: "Which of these NFL players have the most career points?",
    choices: ["George Blanda", "Dan Marino", "Morten Anderson", "Adam Vinateri"],
    feedback: "Morten Anderson broke Gary Anderson's all-time mark with 2,544 points. It helped that he had one of the longest careers in NFL history, spanning 25 years.",
    correct: 2
},  {
    qNumber: 6,
    question: "Which of these running backs has the most rushing yards in a career?",
    choices: ["Emmitt Smith", "Barry Sanders", "Walter Payton", "Curtis Martin"],
    feedback: "Emmitt Smith finished his career with a record 18,355 yards rushing. A record to this day that he still holds. Walter Payton is second all-time.",
    correct: 0
},  {
    qNumber: 7,
    question: "Which of these NFL Players has the most combined TDs in a career?",
    choices: ["Walter Payton", "Barry Sanders", "Jerry Rice", "Randy Moss"],
    feedback: "Jerry Rice once again. Rice holds many NFL records, being the undisputed greatest WR in NFL history.",
    correct: 2
},  {
    qNumber: 8,
    question: "Which of the following set a record in 2002 for most receptions in a season?",
    choices: ["Terrell Owens", "Jerry Rice", "Marvin Harrison", "Torry Holt"],
    feedback: "Marvin Harrison set a record, that amazingly still stands today in the new pass happy NFL. As Peyton Manning's #1 receiver, Harrison finished the season with 143 receptions.",
    correct: 2
},  {
    qNumber: 9,
    question: "In 2003, which of the following set a record for most rushing yards in a game?",
    choices: ["Jamal Lewis", "Corey Dillon", "Curtis Martin", "Emmitt Smith"],
    feedback: "During the 2003 season, Jamal Lewis rushed for a then record 295 yards against the lowly Cleveland Browns. The record has since been broken by 1 yard by Adrian Peterson.",
    correct: 0
},  {
    qNumber: 10,
    question: "Which of the following set a record for most wins as a coach in NFL history?",
    choices: ["Don Shula", "Vince Lombardi", "Bill Walsh", "Tom Landry"],
    feedback: "Don Shula his career with 347 victories, leading the Miami Dolphins to 2 Super Bowl championships. His record still stands.",
    correct: 0
}];

$(document).ready(function() {

    /*-- Shows game instructions graphic --*/
    $('.what').click(function() {
        $('.overlay').fadeIn(1000);
    });

    /*-- Hides game instructions graphic --*/
    $('.button').click(function() {
        $('.overlay').fadeOut(1000);
    });

    /*-- Run new game at startup --*/
    newQuiz();
    askQuestion();

    /*-- Controls options selected --*/
    $('.option').click(function () {
        var correct = quiz[currentQuestion].correct;
        var feedback = quiz[currentQuestion].feedback;
        var qNumber = quiz[currentQuestion].qNumber;
        var totalAnswered = $("<div/>", {class:"total-answered", text:qNumber});
        $('.total-answered').html(qNumber);

        if (click == 0) {
            click++;
            if ($(this).attr("data-n") == correct) {
                $(this).addClass('correct');
                $('.feedback').prepend(feedback);
                $('.feedback-container').show();
                $('.next').show();
                correctAnswer();
            } else {
                $('.option[data-n=' + correct + ']').addClass('correct');
                $(this).addClass('incorrect');
                $('.feedback').prepend(feedback);
                $('.feedback-container').show();
                $('.next').show();
            }
        } else {
            alert("Press next!");
        }
    });

    /*-- Shows next button and moves to next question --*/
    $('.next').click(function() {
        nextQuestion();
    });

    
});

/*-- Creates quiz objects, including question, choices and correct answer --*/
function newQuiz() {
    currentQuestion = 0;
    score=0;
    $('.feedback-container').hide();
    $('.next').hide();
}

function askQuestion() {    
    var question = quiz[currentQuestion].question;
    var choicesArr = quiz[currentQuestion].choices;
    var qNumber = quiz[currentQuestion].qNumber;
    click = 0;

    $('.feedback-container').hide();
    $('.question-container').html(question);
    $('#option-1').html(choicesArr[0]);
    $('#option-2').html(choicesArr[1]);    
    $('#option-3').html(choicesArr[2]);
    $('#option-4').html(choicesArr[3]);
    $('.next').hide();
    $('#div' + qNumber).addClass('qColor');
    $('#qNumber').html(qNumber);

}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quiz.length) {
        askQuestion();
        $('.option').removeClass('correct incorrect');
        $('.feedback').text("");
    } else {
        $('.next').hide(); 
        $('.overlay').fadeIn(1000);        
        endQuiz();
    }
}

function correctAnswer() {
    score++;
    $('.total-correct').html(score);
}

function endQuiz() {
$('.heading').html("Results");
$('.button').html("Play again");

    if (score == 10) {
        $('.content').html("You scored perfect!");
    } else if (score > 8) {
        $('.content').html("You scored good!");
    } else if (score > 6) {
        $('.content').html("You scored ok!");
    } else {
        $('.content').html("Get back to the record books!");
    }
}

    var div = 360 / 10;
    var radius = 138;
    var parentdiv = document.getElementById('parentdiv');
    var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2.4);  //assumes parent is square
    var offsetToChildCenter = 7.5;
    var totalOffset = offsetToParentCenter - offsetToChildCenter;
    for (var i = 8; i <= 17; ++i)
    {
        var childdiv = document.createElement('div');
        var childspan = document.createElement('span');
        childspan.className = 'mini-circle';
        childdiv.className = 'div2';
        childdiv.id = "div" + (i - 7);
        childdiv.style.position = 'absolute';
        childdiv.style.textAlign = 'center'; 
        $(childspan).html(i - 7);
        var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
        childdiv.style.top = (y + totalOffset).toString() + "px";
        childdiv.style.left = (x + totalOffset).toString() + "px";
        childdiv.appendChild(childspan);
        parentdiv.appendChild(childdiv);
    }

