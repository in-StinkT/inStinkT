var questions = [
    {
        question: 'Which do you prefer?',
        options: ['Amber/Wood', 'Citrus'],
    },
    {
        question: 'Which do you prefer?',
        options: ['Amber/Wood', 'Citrus'],
    },
]

var countFloral = 0;
var countSpice = 0;
var countCitrus = 0;
var countWood = 0;
var countFruity = 0;
var countFresh = 0;


// $(".startBtn").onClick(function () {
//     // $('#questions').show();
//     // $('#intro').hide();
// });

var answerEl = document.querySelector('.choices');

function startQuiz () {
    const questionArr = questions[i];
    var questionChoices= document.querySelector('.question');
    questionChoices.textContent = questionArr.question;
    answerEl.innerHTML = '';
    for (let i = 0; i < questionArr.options.length; i++) {
        const  answerOptions = questionArr.options[i];
        var btnOption = document.createElement('button');
        btnOption.setAttribute('class', 'opt1');
        btnOption.setAttribute('value', answerOptions);
        btnOption.textContent = i + 1 + answerOptions;
        answerEl.append(btnOption);
    }
}

document
    .querySelector('.startBtn')
    .addEventListener('submit', startQuiz)