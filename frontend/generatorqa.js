var drl_q_no_import = drl_q.split('-- DRL')[1];

qr = {

}

drl_q_no_import.split('\n\n').forEach(e => {
    let questionId = e.split('$previousQuestion : PreviousQuestion(questionId == ')[1].split(',')[0];
    let answerId = e.split('$previousQuestion : PreviousQuestion(questionId == ')[1].split(', answerId == ')[1].split(');')[0];
    let nextQuestionId = e.split('$s.setQuestionId(')[1].split(');')[0];
    if (qr[`${questionId}`]){
        qr[`${questionId}`][`${answerId-1}`] = +nextQuestionId;
    } else {
        qr[`${questionId}`] = []
        qr[`${questionId}`][`${answerId-1}`] = +nextQuestionId;
    }
    
});

// console.log(qr);
questions.cation = questions.cation.map(e => {
    e.nextQuestions = qr[e.id];
    return e;
});

questions.anion = questions.anion.map(e => {
    e.nextQuestions = qr[e.id];
    return e;
});

var questionnaire = questions.anion.concat(questions.cation);
document.getElementById('code-container').innerHTML = JSON.stringify(questionnaire, null, '\t');