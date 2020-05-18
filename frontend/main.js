(async () => {
    let url = 'http://localhost:8080/analise';


    let properties = {
        "previousQuestion": {
            "questionId": 0,
            "answerId": 0
        },
        "colors": [
        "colorless",
        "pale yellow",
        "white",
        "grayish-white",
        "yellow-brown",
        "brown",
        "reddish-brown",
        "purple",
        "pink"
        ],
        "structures": [
            "crystals",
            "powder",
            "solid",
            "solution"
        ],
        "experiments": [
            "insolubleInWater",
            "colorlessSolutionWithWater",
            "colorfulSolutionWithWater",
            "impossible",
            "noReactionWithHCl",
            "reactionWithHCl",
            "warmWaterInsoluble",
            "warmWaterSoluble",
            "notYellowWithK2CrO4",
            "yellowWithK2CrO4",
            "solubleInNH4OH",
            "insolubleInNH4OH",
            "greyWithNH4OH",
            "notWhiteWithHNO3",
            "whiteWithHNO3",
            "solubleRawInNH4OH",
            "insolubleRawInNH4OH",
            "darkRedSedimentFromNH4OH",
            "whiteSedimentFromNH4OH",
            "GrayishGreenSedimentFromNH4OH",
            "solubleRawIn(NH4)2S",
            "insolubleRawIn(NH4)2SmeatColoredSediment",
            "insolubleRawIn(NH4)2SwhiteSediment",
            "insolubleRawIn(NH4)2S",
            "insolubleRawIn(NH4)2CO3",
            "solubleRawIn(NH4)2CO3",
            "insolubleRawIn(NH4)2CO3andCH3COOH",
            "insolubleRawIn(NH4)2CO3butSolubleInCH3COOH",
            "insolubleRawIn(NH4)2CO3butSolubleInCH3COOHNotYellowWithK2Cr",
            "insolubleRawIn(NH4)2CO3butSolubleInCH3COOHYellowWithK2Cr",
            "noWhiteSedimentInBaCl2",
            "whiteSedimentInBaCl2",
            "noYellowSedimentInNH42MoO4",
            "yellowSedimentInNH42MoO4",
            "noGasInBaOH2",
            "gasInBaOH2",
            "noCrystalSedimentInCaCl2",
            "crystalSedimentInCaCl2",
            "noCheesySedimentInNH4OH",
            "cheesySedimentInNH4OH",
            "noRingInH2SO4",
            "ringInH2SO4",
            "noVinegarSmellInH2SO4",
            "vinegarSmellInH2SO4"
        ]
    }
    
    let data = (await axios.post(url, properties)).data;
    let question = data.question;
    let solutions = data.solutions;
    
    async function answerClickHandler(e) {
        let clickedAnswer = parseInt(e.target.id);
        let currentQuestion = question.id;
        properties.previousQuestion.answerId = clickedAnswer;
        properties.previousQuestion.questionId = currentQuestion;
    
        if(question.answers[clickedAnswer-1].value != "impossible"){
            answeredValue = question.answers[clickedAnswer-1].value;
            properties.experiments = properties.experiments.filter(e => question.answers.map(x=>x.value).indexOf(e) == -1);
            properties.experiments.push(answeredValue);
        }
    
        let data = (await axios.post(url, properties)).data;
    
        question = data.question;
        solutions = data.solutions;
        changeQuestion(question, solutions);
    }
    
    function changeQuestion(question, solutions) {
        $('.answer').remove();
        $('.question').remove();
        if(question) {
            $('#question-container').append(`<h2 class="question" id="${question.id}">${question.question}</h2>`)
            question.answers.forEach(a => $('#answer-container').append(`<div class="answer p-3 cursor-pointer my-3 border border-2 rounded border-light" id="${a.id}"><h4>${a.text}</h4></div>`))
            $('.answer').on('click', answerClickHandler);
        }
        else {
            if (solutions.length == 0) {
                $('#question-container').append(`<h2 class="question">Vaša supstanca se ne nalazi u sistemu.</h2>`)
            } else if (solutions.length == 1) {
                $('#question-container').append(`<h2 class="question">Vaša supstanca je: </h2>`)
                $('#answer-container').append(`<div class="p-5 m-5 border border-success bg-success text-light"><h1>${solutions[0]}</h1></div>`)
            } else if (solutions.length <= 6) {
                $('#question-container').append(`<h2 class="question">Zbog nemogućnosti da tačno odredimo koja je, suzili smo izbor za Vašu supstancu: </h2>`)
                solutions.forEach(e => {
                    $('#answer-container').append(`<div class="p-3 m-3 border border-success bg-success text-light"><h3>${e}</h3></div>`)
                });
            } else {
                $('#question-container').append(`<h2 class="question">Na previše pitanja niste uspeli da date odgovor. Nije bilo moguće odrediti supstancu.</h2>`)
            }
        }
        $('.substance').remove();
        solutions.forEach(s => $('#possible-substances').append(`<li class="substance list-group-item my-2 mx-5 border">${s}</li>`))
        
    }
    
    changeQuestion(question, solutions);
})();
