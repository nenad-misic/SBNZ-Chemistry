package com.sbnz.controller;

import com.sbnz.model.*;
import com.sbnz.service.AnalysisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AnalisysController {
    @Autowired
    AnalysisService service;

    @RequestMapping(value = "/analise", method = RequestMethod.POST, produces = "application/json")
    public ResponseDTO analise(@RequestBody SubstanceInfo substanceInfo) {
        return service.analise(substanceInfo.getColors(), substanceInfo.getStructures(), substanceInfo.getExperiments());

    }

}
