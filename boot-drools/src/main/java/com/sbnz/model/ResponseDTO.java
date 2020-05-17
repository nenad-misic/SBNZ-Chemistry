package com.sbnz.model;

import java.util.ArrayList;
import java.util.List;

public class ResponseDTO {
    private String question;
    private List<String> solutions;

    public ResponseDTO() {
        this.solutions = new ArrayList<String>();
    }

    public ResponseDTO(String question, List<String> solutions) {
        this.question = question;
        this.solutions = solutions;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public List<String> getSolutions() {
        return solutions;
    }

    public void addSolution(String solution) {
        this.solutions.add(solution);
    }
}
