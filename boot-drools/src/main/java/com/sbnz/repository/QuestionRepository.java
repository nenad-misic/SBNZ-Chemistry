package com.sbnz.repository;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sbnz.model.Question;
import com.sbnz.model.Questionnaire;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;

@Component
public class QuestionRepository {
    public Question getQuestionById(int id) {
        Questionnaire questionnaire = this.getQuestionnaire();

        for (Question q : questionnaire.getQuestions()){
            if (q.getId() == id) return q;
        }

        return null;
    }

    public Questionnaire getQuestionnaire() {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            Questionnaire questionnaire = objectMapper.readValue(new File("db/questionnaire.json"), Questionnaire.class);
            return questionnaire;
        } catch (IOException e) {
            e.printStackTrace();
            return new Questionnaire();
        }
    }
}
