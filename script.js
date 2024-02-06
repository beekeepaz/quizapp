let questionforce = [{
    "question": "Wie definiert man in Javascript eine Variable",
    "answer_1": "let 100 = rate;",
    "answer_2": "let rate = 100",
    "answer_3": "let 100 = let rate;",
    "answer_4": "let rate = 100;",
    "right_answer": 2
}, {
    "question": "Wie  eine Variable",
    "answer_1": "let 100 = rate;",
    "answer_2": "let rate = 100",
    "answer_3": "let 100 = let rate;",
    "answer_4": "let rate = 100;",
    "right_answer": 4
}, {
    "question": "Wie definiert man in eine Variable",
    "answer_1": "let 100 = rate;",
    "answer_2": "let rate = 100",
    "answer_3": "let 100 = let rate;",
    "answer_4": "let rate = 100;",
    "right_answer": 3
}, {
    "question": "Wie definiein Javascript eine Variable",
    "answer_1": "let 100 = rate;",
    "answer_2": "let rate = 100",
    "answer_3": "let 100 = let rate;",
    "answer_4": "let rate = 100;",
    "right_answer": 1
}, {
    "question": "Wirt man in Javascript eine Variable",
    "answer_1": "let 100 = rate;",
    "answer_2": "let rate = 100",
    "answer_3": "let 100 = let rate;",
    "answer_4": "let rate = 100;",
    "right_answer": 4
},];

let rightquestions = 0;

let currentquestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questionforce.length;

    showQuestion();
}

function showQuestion() {

    if (currentquestion >= questionforce.length) {
        document.getElementById('end_screen').style = ``;
        document.getElementById('question_body').style = `display: none;`;

        document.getElementById('amount_questions').innerHTML = questionforce.length;
        document.getElementById('amount_right').innerHTML = rightquestions;
        document.getElementById('amount_right').innerHTML = rightquestions;
        document.getElementById('header-image').src = `img/win.jpg`;
    } else {

        let question = questionforce[currentquestion];

        document.getElementById('question-number').innerHTML = currentquestion + 1;
        document.getElementById('questiontxt').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];

    }
}

function answer(selection) {
    let question = questionforce[currentquestion];
    // console.log('Selected answer is ', selection);
    let selectedQuestenNumber = selection.slice(-1);
    // console.log('selectedQuestenNumber is', selectedQuestenNumber);
    // console.log('Current question is ', question['right_answer']);

    let idofRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestenNumber == question['right_answer']) {
        console.log('Richtige Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightquestions++;
    } else {
        console.log('Falsche Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idofRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentquestion++;
    // showQuestion();

    document.getElementById('next-button').disabled = true;

    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

