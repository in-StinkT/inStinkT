

var questions = [
    {
        question: 'Which do you prefer?',
        options: ["https://www.carrementbelle.com/blog/wp-content/uploads/2020/08/sandalwood.jpg", 'Citrus'],
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



// function endgame() {
//     clearInterval(countFloral,countSpice,countCitrus,countWood,countFruity,countFresh);
//     $('#quiz').hide();
//     $('#finish').show();
//     document.querySelector('#recommendation').textContent = //scentclass,
// }

var answerEl = document.querySelector('.choices');

var qIndex = 0;

function showQuestion () {
    const questionArr = questions[i];
    var questionChoices= document.querySelector('.question');
    questionChoices.textContent = questionArr.question;
    answerEl.innerHTML = '';
    for (let i = 0; i < questionArr.options.length; i++) {
        const  answerOptions = questionArr.options[i];
        var btnOption = document.createElement('button');
        btnOption.setAttribute('class', 'option1');
        btnOption.setAttribute('value', answerOptions);
        btnOption.textContent = i + 1 + " " + answerOptions;
        answerEl.append(btnOption);
    }
}


function checkQuestion(event) {
    var buttonEl = event.target
    // var correct = questions[qIndex].answer.click

    if (!buttonEl.matches('.option1')) {
        return
    }

    if (buttonEl.value !== questions[qIndex].answer) {

        qIndex++;

    if (qIndex === questions.length) {
            endgame()
        }
        else {
            showQuestion()
        }
    }
}
answerEl.onclick = checkQuestion


document
    .querySelector('.startBtn')
    .addEventListener('submit', showQuestion)