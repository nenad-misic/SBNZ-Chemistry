package com.sbnz.service;

import com.sbnz.model.*;
import com.sbnz.repository.QuestionRepository;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnalysisService {
    private final KieContainer kieContainer;

    @Autowired
    private QuestionRepository questionRepository;


    @Autowired
    public AnalysisService(KieContainer kieContainer) {
        this.kieContainer = kieContainer;
    }

    public ResponseDTO analise(List<Color> colors, List<Structure> structures, List<Experiment> experiments, PreviousQuestion previousQuestion) {
        ResponseDTO responseDTO = new ResponseDTO();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);
        for (Color c : colors){
            kieSessionSubstance.insert(c);
        }
        for (Structure s : structures){
            kieSessionSubstance.insert(s);
        }
        for (Experiment e : experiments){
            kieSessionSubstance.insert(e);
        }
        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();

        if(responseDTO.getSolutions().size() <= 1) {
            return responseDTO;
        }


        KieSession kieSessionQuestion = kieContainer.newKieSession("questionRulesSession");
        kieSessionQuestion.insert(responseDTO);
        kieSessionQuestion.insert(previousQuestion);
        kieSessionQuestion.insert(questionnaire);
        kieSessionQuestion.fireAllRules();
        kieSessionQuestion.dispose();

        if (responseDTO.getQuestionId() != 0) {
            responseDTO.setQuestion(questionRepository.getQuestionById(responseDTO.getQuestionId()));
        }
        return responseDTO;
    }


}
