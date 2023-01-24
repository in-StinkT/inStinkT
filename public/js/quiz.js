
const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')
const finishQuiz = document.getElementById('finish');

const questions = [
    {
        id: 0,
        text: 'Choose one:',
        answers: [
            {
                text: "Flowers (Floral)",
                image: "https://static01.nyt.com/images/2021/10/04/t-magazine/04tmag-doan-slide-8ILB/04tmag-doan-slide-8ILB-jumbo.jpg?quality=75&auto=webp",
                alt: "Photo of assorted flowers",
                value: 'floral'
            },
            {
                text: "Sandalwood (Woody)",
                image: "https://blogstudio.s3.theshoppad.net/harlem-candle-company/35adb3b9d9b1793436e254be8c7d7cd5.jpg",
                alt: "Photo of sandalwood shavings",
                valuse: 'woody'
            },
        ],
    },
    {
        id: 1,
        text: 'Choose one:',
        answers: [
            {
                text: "Citrus (Citrus)",
                image: "https://www.byrdie.com/thmb/yc29t-bItBMOpWBd7ysBDaI6Egc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/best-citrus-perfumes-b441396ed05e43b59da2d007a67569e7.jpg",
                alt: "Photo of assorted citrus fruit",
                value: 'citrus'
            },
            {
                text: "Honey (Floral)",
                image: "https://www.parents.com/thmb/QUbieV2ZnionCdn5vR8r_Sak14s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/honey-e396fd81cc2d4275bfaee2948d414fd8.jpg",
                alt: "Photo of honey and honeycomb",
                value: 'floral'
            },
        ],
    },
    {
        id: 2,
        text: 'Choose one:',
        answers: [
            {
                text: "Coconut (Fruity)",
                image: "https://www.alphafoodie.com/wp-content/uploads/2020/10/how-to-open-a-coconut.jpeg",
                alt: "Photo of opened coconut",
                value: 'fresh'
            },
            {
                text: "Mint (Fresh)",
                image: "https://cdn11.bigcommerce.com/s-bh7d5jhpn7/images/stencil/2048x2048/products/1772/2037/gmlgg__18379.1553193077.gif?c=2",
                alt: "Photo of mint leaves",
                value: 'fresh'
            },
        ],
    },
    {
        id: 3,
        text: 'Choose one:',
        answers: [
            {
                text: "Lemon (Citrus)",
                image: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_471141162_401779.jpg",
                alt: "Photo of halved lemons",
                value: 'citrus'
            },
            {
                text: "Cedarwood (Woody)",
                image: "https://d384u2mq2suvbq.cloudfront.net/public/spree/products/2340/large/cedarwood-blanc-web.jpg?1654514097",
                alt: "Photo of cedarwood shavings",
                value: 'woody'
            },
        ],
    },
    {
        id: 4,
        text: 'Choose one:',
        answers: [
            {
                text: "Cinnamon (Oriental)",
                image: "https://images.immediate.co.uk/production/volatile/sites/30/2016/08/cinnamon-benefits44-724deaf.jpg?quality=90&resize=440,400",
                alt: "Photo of cinnamon sticks and ground cinnamon",
                value: 'spice'
            },
            {
                text: "Cotton (Fresh)",
                image: "https://cs-content-manager-production.s3.amazonaws.com/clean-cotton-fragrance-oil-web.jpg",
                alt: "Photo of cotton plant and cotton fabric",
                value: 'fresh'
            },
        ],
    },
    {
        id: 5,
        text: 'Choose one:',
        answers: [
            {
                text: "Patchouli (Woody)",
                image: "https://media.istockphoto.com/id/911314320/photo/burning-embossed-sticks-and-smoke-from-incense-burning-and-smoke.jpg?s=170667a&w=0&k=20&c=AtP_ARshKMCQXXOUsxQQoIma8JXW4V7qWJB-ual38z8=",
                alt: "Photo of patchouli incense burning",
                value: 'woody'
            },
            {
                text: "Spices (Oriental)",
                image: "https://www.scentbird.com/blog/wp-content/uploads/2015/11/Thanksgiving-spicy-perfumes1.jpg",
                alt: "Photo of assorted oriental spices",
                value: 'spice'
            },
        ],
    },
    {
        id: 6,
        text: 'Choose one:',
        answers: [
            {
                text: "Anise (Oriental)",
                image: "https://m.media-amazon.com/images/I/71b8k-5cySL.jpg",
                alt: "Photo of anise and other oriental spices incense",
                value: 'spice'
            },
            {
                text: "Vanilla (Floral)",
                image: "https://m.media-amazon.com/images/I/31jvvQ+l-YL.jpg",
                alt: "Photo of vanilla extract and vanilla beans",
                value: 'floral'
            },
        ],
    },
    {
        id: 7,
        text: 'Choose one:',
        answers: [
            {
                text: "Wood (Woody)",
                image: "https://d384u2mq2suvbq.cloudfront.net/public/spree/products/2732/large_webp/smoked-oud-fragrance-oil-web.webp?1654514180",
                alt: "Photo of a pile of wood chunks",
                value: 'woody'
            },
            {
                text: "Roses (Floral)",
                image: "https://uploads-ssl.webflow.com/62ad9f0642bdf84084d9e79e/62b84371e640095d663a6b32_featuredImage-p-1080.jpeg",
                alt: "Photo of roses",
                value: 'floral'
            },
        ],
    }
];

var countQuestions = 0;
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

// var answerEl = document.querySelector('.choices');

// var qIndex = 0;


const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleHeading.classList.add('quizH2')
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)


        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + '-questions'
        answersBlock.classList.add('answer-options')


        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () =>handleClick(answer.value))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)
            answerImage.setAttribute('value', answer.value)

            answerBlock.append(answerImage)
            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)

    })
}
const handleClick = (value) => {
    if (value == 'floral') {
        floral();
    }
    else if (value == 'woody') {
        woody();
    }
    else if (value == 'fruity') {
        fruity();
    }
    else if (value == 'spice') {
        spice();
    }
    else if (value == 'citrus') {
        citrus();
    }
    else if(value == 'fresh') {
        fresh();
    }

    countQuestions += 1;
    if (countQuestions >= 8) {
        return endQuiz();
    }
}


populateQuestions();

function floral() {
    countFloral += 1;
}

function woody() {
    countWood += 1;
}

function fruity() {
    countFruity += 1;
    countQuestions += 1;
    if (countQuestions >= 8) {
        showResults()
    }
}

function spice() {
    countSpice += 1;
}

function citrus() {
    countCitrus += 1;
}

function fresh() {
    countFresh += 1;
}


function showResults () {
    if (countFloral >= Math.max(countCitrus, countFresh, countFruity, countSpice, countWood)) {
        return 'Floral'
    }
    else if (countCitrus >= Math.max(countFloral, countFresh, countFruity, countSpice, countWood)) {
        return 'Citrus'
    }
    else if (countFresh >= Math.max(countFloral, countCitrus, countFruity, countSpice, countWood)) {
        return 'Fresh'
    }
    else if (countFruity >= Math.max(countFloral, countFresh, countCitrus, countSpice, countWood)) {
        return 'Fruity'
    }
    else if (countSpice >= Math.max(countFloral, countFresh, countCitrus, countFruity, countWood)) {
        return 'Spice'
    }
    else if (countWood >= Math.max(countFloral, countFresh, countCitrus, countSpice, countFruity)) {
        return 'Wood'
    }
}

function showQuiz() {
    document.getElementById('intro').style.display = "none";
    document.getElementById('quiz').style.display = "initial";
    document.getElementById('finish').style.display = "flex";
    document.getElementById('retake').style.display = "initial";
    populateQuestions();
  };

  function endQuiz(){
    document.getElementById('quiz').style.display = 'none'
    let result = showResults(); // floral, woody, etc.
    let scentLink = document.createElement('a');
    scentLink.setAttribute('href', `/scent=${result}/page=1`)
    scentLink.classList.add('finalScent')
    scentLink.textContent = result;
    let scentType = document.createElement('p');
    scentType.classList.add('finalScent')
    let scentContainer = document.createElement('div');
    scentContainer.classList.add('result-container')
    scentContainer.appendChild(scentType);
    scentContainer.appendChild(scentLink);
    scentType.textContent = (`Your preferred scent type: `)
    const endButton = document.querySelector('#endButton')

    endButton.addEventListener('click', ()=>{
        document.location.replace("/");
    })
    
    finishQuiz.append(scentType)
    finishQuiz.append(scentLink)
    
    
}


document
    .querySelector('.startBtn')
    .addEventListener('click', showQuiz)