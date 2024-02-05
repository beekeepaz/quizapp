let questionforce = [{
    "question": "Wie definiert man in Javascript eine Variable",
    "answer_1": "let 100 = rate;",
    "answer_2": "let rate = 100",
    "answer_3": "let 100 = let rate;",
    "answer_4": "let rate = 100;",
    "right_answer": 2
}, {
    "question": "Wie definiert man in Javascript eine Variable",
    "answer_1": "let 100 = rate;",
    "answer_2": "let rate = 100",
    "answer_3": "let 100 = let rate;",
    "answer_4": "let rate = 100;",
    "right_answer": 4
}, {
    "question": "Wie definiert man in Javascript eine Variable",
    "answer_1": "let 100 = rate;",
    "answer_2": "let rate = 100",
    "answer_3": "let 100 = let rate;",
    "answer_4": "let rate = 100;",
    "right_answer": 3
}, {
    "question": "Wie definiert man in Javascript eine Variable",
    "answer_1": "let 100 = rate;",
    "answer_2": "let rate = 100",
    "answer_3": "let 100 = let rate;",
    "answer_4": "let rate = 100;",
    "right_answer": 1
}, {
    "question": "Wie definiert man in Javascript eine Variable",
    "answer_1": "let 100 = rate;",
    "answer_2": "let rate = 100",
    "answer_3": "let 100 = let rate;",
    "answer_4": "let rate = 100;",
    "right_answer": 4
},];

let currentquestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questionforce.length;

    showQuestion();
}

function showQuestion() {
    let question = questionforce[currentquestion];

    document.getElementById('questiontxt').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questionforce[currentquestion];
    console.log('Selected answer is ', selection);
    let selectedQuestenNumber = selection.slice(-1);
    console.log('selectedQuestenNumber is',selectedQuestenNumber);
    console.log('Current question is ', question['right_answer']);
    
    if(selectedQuestenNumber == question['right_answer']) {
        console.log('Richtige Antwort!!');
    } else {
        console.log('Falsche Antwort!!');
    }
}