package com.sbnz.model;

import java.util.List;

public class Questionnaire {
    private List<Question> questions;

    public Questionnaire() {
    }

    public Questionnaire(List<Question> questions) {
        this.questions = questions;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public Question getQuestionById(int id) {
        for (Question q : this.questions) {
            if (q.getId() == id){
                return q;
            }
        }
        return null;
    }

}
