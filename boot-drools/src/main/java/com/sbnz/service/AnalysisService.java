package com.sbnz.service;

import com.sbnz.model.Answer;
import com.sbnz.model.ResponseDTO;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnalysisService {
    private final KieContainer kieContainer;

    @Autowired
    public AnalysisService(KieContainer kieContainer) {
        this.kieContainer = kieContainer;
    }

    public ResponseDTO analise(List<Answer> answers) {
        ResponseDTO responseDTO = new ResponseDTO();
        KieSession kieSession = kieContainer.newKieSession("rulesSession");
        kieSession.insert(responseDTO);
        for (Answer a : answers){
            kieSession.insert(a);
        }
        kieSession.fireAllRules();
        kieSession.dispose();
        return responseDTO;
    }
}
