package com.sbnz.service;

import com.sbnz.model.*;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SecurityService {
    private final KieContainer kieContainer;
    private KieSession kieSession;


    @Autowired
    public SecurityService(KieContainer kieContainer) {
        this.kieContainer = kieContainer;
    }

    public SecurityResponseDTO detectSuspiciousBehavior(AuthInfoWithClientIP authInfoWithClientIP) {

        if (kieSession == null) {
            this.kieSession = kieContainer.newKieSession("suspiciousBehaviourCEPSession");
        }
        SecurityResponseDTO srd = new SecurityResponseDTO();
        this.kieSession.insert(srd);
        this.kieSession.insert(authInfoWithClientIP);
        this.kieSession.fireAllRules();

        if(srd.getMessage() == null){
            srd.setMessage("No suspicious behaviour has been detected");
            srd.setCode(200);
        }

        return srd;
    }
}
