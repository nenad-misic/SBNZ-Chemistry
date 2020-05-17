package com.sbnz.service;

import com.sbnz.model.Color;
import com.sbnz.model.Experiment;
import com.sbnz.model.ResponseDTO;
import com.sbnz.model.Structure;
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

    public ResponseDTO analise(List<Color> colors, List<Structure> structures, List<Experiment> experiments) {
        ResponseDTO responseDTO = new ResponseDTO();
        KieSession kieSession = kieContainer.newKieSession("rulesSession");
        kieSession.insert(responseDTO);
        for (Color c : colors){
            kieSession.insert(c);
        }
        for (Structure s : structures){
            kieSession.insert(s);
        }
        for (Experiment e : experiments){
            kieSession.insert(e);
        }
        kieSession.fireAllRules();
        kieSession.dispose();
        return responseDTO;
    }


}
