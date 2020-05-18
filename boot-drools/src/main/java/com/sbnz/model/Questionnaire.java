package com.sbnz.model;

import java.util.List;

public class Questionnaire {
    private List<Question> cation;
    private List<Question> anion;

    public Questionnaire() {
    }

    public Questionnaire(List<Question> cation, List<Question> anion) {
        this.cation = cation;
        this.anion = anion;
    }

    public List<Question> getCation() {
        return cation;
    }

    public void setCation(List<Question> cation) {
        this.cation = cation;
    }

    public List<Question> getAnion() {
        return anion;
    }

    public void setAnion(List<Question> anion) {
        this.anion = anion;
    }
}
