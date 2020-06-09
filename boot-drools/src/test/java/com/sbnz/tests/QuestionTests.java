package com.sbnz.tests;

import com.sbnz.model.*;
import com.sbnz.repository.QuestionRepository;
import org.junit.BeforeClass;
import org.junit.Test;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.util.AssertionErrors.assertNull;


public class QuestionTests {

    static QuestionRepository questionRepository;
    KieSession kSession = null;
    static KieContainer kieContainer;

    @BeforeClass
    public static void beforeClass() {
        questionRepository = new QuestionRepository();
        KieServices ks = KieServices.Factory.get();
        kieContainer = ks
                .newKieContainer(ks.newReleaseId("com.sbnzkjar", "sbnzkjar", "1.0-SNAPSHOT"));
    }


    @Test
    public void question14answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(14,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(15, responseDTO.getQuestion().getId());
    }



    @Test
    public void question14answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(14,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertNull("",responseDTO.getQuestion());
    }



    @Test
    public void question14answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(14,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(15, responseDTO.getQuestion().getId());
    }



    @Test
    public void question15answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(15,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(16, responseDTO.getQuestion().getId());
    }



    @Test
    public void question15answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(15,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertNull("",responseDTO.getQuestion());
    }



    @Test
    public void question15answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(15,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(16, responseDTO.getQuestion().getId());
    }



    @Test
    public void question16answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(16,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(17, responseDTO.getQuestion().getId());
    }



    @Test
    public void question16answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(16,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertNull("",responseDTO.getQuestion());
    }



    @Test
    public void question16answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(16,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(17, responseDTO.getQuestion().getId());
    }



    @Test
    public void question17answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(17,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(18, responseDTO.getQuestion().getId());
    }



    @Test
    public void question17answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(17,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertNull("",responseDTO.getQuestion());
    }



    @Test
    public void question17answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(17,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(18, responseDTO.getQuestion().getId());
    }



    @Test
    public void question18answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(18,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(19, responseDTO.getQuestion().getId());
    }



    @Test
    public void question18answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(18,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertNull("",responseDTO.getQuestion());
    }



    @Test
    public void question18answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(18,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(19, responseDTO.getQuestion().getId());
    }



    @Test
    public void question19answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(19,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(20, responseDTO.getQuestion().getId());
    }



    @Test
    public void question19answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(19,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertNull("",responseDTO.getQuestion());
    }



    @Test
    public void question19answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(19,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(20, responseDTO.getQuestion().getId());
    }



    @Test
    public void question20answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(20,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertNull("",responseDTO.getQuestion());
    }



    @Test
    public void question20answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(20,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertNull("",responseDTO.getQuestion());
    }



    @Test
    public void question20answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(20,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertNull("",responseDTO.getQuestion());
    }



    @Test
    public void question1answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(1,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(7, responseDTO.getQuestion().getId());
    }



    @Test
    public void question1answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(1,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(2, responseDTO.getQuestion().getId());
    }



    @Test
    public void question1answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(1,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(7, responseDTO.getQuestion().getId());
    }



    @Test
    public void question1answer4() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(1,4));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(2, responseDTO.getQuestion().getId());
    }



    @Test
    public void question2answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(2,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(7, responseDTO.getQuestion().getId());
    }



    @Test
    public void question2answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(2,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(3, responseDTO.getQuestion().getId());
    }



    @Test
    public void question2answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(2,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(3, responseDTO.getQuestion().getId());
    }



    @Test
    public void question3answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(3,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(5, responseDTO.getQuestion().getId());
    }



    @Test
    public void question3answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(3,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(4, responseDTO.getQuestion().getId());
    }



    @Test
    public void question3answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(3,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(5, responseDTO.getQuestion().getId());
    }



    @Test
    public void question4answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(4,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(7, responseDTO.getQuestion().getId());
    }



    @Test
    public void question4answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(4,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question4answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(4,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(7, responseDTO.getQuestion().getId());
    }



    @Test
    public void question5answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(5,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(6, responseDTO.getQuestion().getId());
    }



    @Test
    public void question5answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(5,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(7, responseDTO.getQuestion().getId());
    }



    @Test
    public void question5answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(5,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question5answer4() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(5,4));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(6, responseDTO.getQuestion().getId());
    }



    @Test
    public void question6answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(6,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(7, responseDTO.getQuestion().getId());
    }



    @Test
    public void question6answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(6,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question6answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(6,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(7, responseDTO.getQuestion().getId());
    }



    @Test
    public void question7answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(7,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(8, responseDTO.getQuestion().getId());
    }



    @Test
    public void question7answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(7,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(9, responseDTO.getQuestion().getId());
    }



    @Test
    public void question7answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(7,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(9, responseDTO.getQuestion().getId());
    }



    @Test
    public void question8answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(8,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question8answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(8,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question8answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(8,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question8answer4() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(8,4));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(9, responseDTO.getQuestion().getId());
    }



    @Test
    public void question9answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(9,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(11, responseDTO.getQuestion().getId());
    }



    @Test
    public void question9answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(9,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(10, responseDTO.getQuestion().getId());
    }



    @Test
    public void question9answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(9,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(11, responseDTO.getQuestion().getId());
    }



    @Test
    public void question10answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(10,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question10answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(10,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question10answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(10,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(11, responseDTO.getQuestion().getId());
    }



    @Test
    public void question11answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(11,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question11answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(11,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(12, responseDTO.getQuestion().getId());
    }



    @Test
    public void question11answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(11,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question12answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(12,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(13, responseDTO.getQuestion().getId());
    }



    @Test
    public void question12answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(12,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question12answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(12,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question13answer1() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(13,1));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question13answer2() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(13,2));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }



    @Test
    public void question13answer3() {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(new PreviousQuestion(13,3));
        kieSessionQuestion.insert(questionnaire);

        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();


        assertEquals(14, responseDTO.getQuestion().getId());
    }

}
