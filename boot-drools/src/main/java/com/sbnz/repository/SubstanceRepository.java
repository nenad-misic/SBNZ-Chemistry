package com.sbnz.repository;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sbnz.model.Substance;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class SubstanceRepository {
    public List<Substance> getSubstances() {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            ArrayList<Substance> substances = objectMapper.readValue(new File("db.json"), ArrayList.class);
            return substances;
        } catch (IOException e) {
            e.printStackTrace();
            return new ArrayList<Substance>();
        }
    }
}
