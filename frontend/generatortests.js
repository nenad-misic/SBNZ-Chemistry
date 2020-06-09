var subst = drls.split('// ------------------ SUBSTANCES ------------------------')[1].split('// ------------------ QUERIES --------------------------')[0];

let res =
subst.split('\n\n').filter(e=> e.startsWith('rule')).map(e => {
    let name = e.split('rule "')[1].split('"')[0].split('- ')[1].replace('(','').replace(')','');
    let asserting = e.split('rule "')[1].split('"')[0]
    let color = e.split('Color(answer == "')[1].split('")')[0]
    let structure = e.split('Structure(answer == "')[1].split('")')[0]
    let cation = e.split('exists Cation(element == "')[1].split('")')[0].toLowerCase()
    let anion = e.split('exists Anion(element == "')[1].split('")')[0].toLowerCase();
    let st = `
    @Test
    public void ${name}() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("${color}"));
        kieSessionSubstance.insert(new Structure("${structure}"));
        ${cation}(kieSessionSubstance);
        ${anion}(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("${asserting}",responseDTO.getSolutions().get(0));
    }
    `

    return st;

}).join('\n\n');

let krs = qn.questions.map(e => { 
    return e.nextQuestions.map((x,ai) => {
        let name = `question${e.id}answer${ai+1}`

        return `
        @Test
        public void ${name}() {
            ResponseDTO responseDTO = new ResponseDTO();
            Questionnaire questionnaire = questionRepository.getQuestionnaire();

            KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
            kieSessionQuestion.insert(responseDTO);
            kieSessionQuestion.insert(new PreviousQuestion(${e.id},${ai+1}));
            kieSessionQuestion.insert(questionnaire);

            kieSessionQuestion.fireAllRules();
            kieSessionQuestion.dispose();


            assertEquals(${x}, responseDTO.getQuestion().getId());
        }
        `
    }).join('\n\n');
}).join('\n\n');

document.getElementById('code-container').innerHTML = krs;