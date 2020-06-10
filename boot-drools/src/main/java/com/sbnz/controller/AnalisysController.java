package com.sbnz.controller;

import com.sbnz.model.*;
import com.sbnz.service.AnalysisService;
import com.sbnz.service.RuleManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AnalisysController {
    @Autowired
    AnalysisService service;

    @Autowired
    RuleManagerService rmservice;

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/analise", method = RequestMethod.POST, produces = "application/json")
    public ResponseDTO analise(@RequestBody SubstanceInfo substanceInfo) {
        return service.analise(substanceInfo.getColors(), substanceInfo.getStructures(), substanceInfo.getExperiments(), substanceInfo.getPreviousQuestion());

    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/config", method = RequestMethod.GET, produces = "application/json")
    public Config getConfig() {
        return rmservice.getConfig();
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/config", method = RequestMethod.POST, produces = "application/json")
    public MessageDTO analise(@RequestBody Config config) {
        rmservice.setConfig(config);
        return new MessageDTO("Success");

    }



}
