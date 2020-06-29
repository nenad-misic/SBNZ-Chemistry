package com.sbnz.service;

import com.sbnz.model.*;
import com.sbnz.repository.QuestionRepository;
import com.sbnz.repository.UserRepository;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnalysisService {
    private final KieContainer kieContainer;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private UserRepository userRepository;


    @Autowired
    public AnalysisService(KieContainer kieContainer) {
        this.kieContainer = kieContainer;
    }

    public ResponseDTO analise(List<Color> colors, List<Structure> structures, List<Experiment> experiments, PreviousQuestion previousQuestion) {
        ResponseDTO responseDTO = new ResponseDTO();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Questionnaire questionnaire = questionRepository.getQuestionnaire();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        for (String previousSubstance : ((User)auth.getPrincipal()).getSubstances()){
            kieSessionSubstance.insert(new PreviousSubstance(previousSubstance));
        }
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

        if(responseDTO.getSolutions().size() == 1) {
            userRepository.addSubstanceToUser(((User)auth.getPrincipal()).getEmail(), responseDTO.getSolutions().get(0));
        }

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
