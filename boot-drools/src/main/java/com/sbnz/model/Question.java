package com.sbnz.model;

import java.util.List;

public class Question {
    private int id;
    private String question;
    private List<Answer> answers;
    private List<Integer> nextQuestions;

    public Question() {
    }

    public Question(int id, String question, List<Answer> answers, List<Integer> nextQuestions) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.nextQuestions = nextQuestions;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    public List<Integer> getNextQuestions() {
        return nextQuestions;
    }

    public void setNextQuestions(List<Integer> nextQuestions) {
        this.nextQuestions = nextQuestions;
    }
}
