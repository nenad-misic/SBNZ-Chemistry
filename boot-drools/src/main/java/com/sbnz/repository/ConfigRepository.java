package com.sbnz.repository;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sbnz.model.Config;
import com.sbnz.model.Question;
import com.sbnz.model.Questionnaire;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;

@Component
public class ConfigRepository {
   public Config getConfig() {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            Config config = objectMapper.readValue(new File("db/config.json"), Config.class);
            return config;
        } catch (IOException e) {
            e.printStackTrace();
            return new Config();
        }
   }

   public void setConfig(Config config){
       ObjectMapper objectMapper = new ObjectMapper();
       try {
           objectMapper.writeValue(new File("db/config.json"), config);
       } catch (IOException e) {
           e.printStackTrace();
       }
   }
}

