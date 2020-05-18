package com.sbnz.model;

public class PreviousQuestion {
    private int questionId;
    private int answerId;

    public PreviousQuestion() {
    }

    public PreviousQuestion(int questionId, int answerId) {
        this.questionId = questionId;
        this.answerId = answerId;
    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public int getAnswerId() {
        return answerId;
    }

    public void setAnswerId(int answerId) {
        this.answerId = answerId;
    }
}
