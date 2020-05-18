package com.sbnz.model;

import java.util.ArrayList;
import java.util.List;

public class ResponseDTO {
    private int questionId;
    private Question question;
    private List<String> solutions;

    public ResponseDTO() {
        this.solutions = new ArrayList<String>();
    }

    public ResponseDTO(Question question, List<String> solutions, int questionId) {
        this.question = question;
        this.solutions = solutions;
        this.questionId = questionId;
    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public List<String> getSolutions() {
        return solutions;
    }

    public void addSolution(String solution) {
        this.solutions.add(solution);
    }
}
