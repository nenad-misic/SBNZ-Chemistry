package com.sbnz.model;

import java.util.ArrayList;
import java.util.List;

public class SubstanceInfo {
    List<Color> colors;
    List<Structure> structures;
    List<Experiment> experiments;
    PreviousQuestion previousQuestion;

    public SubstanceInfo() {
        this.colors = new ArrayList<>();
        this.structures = new ArrayList<>();
        this.experiments = new ArrayList<>();
    }

    public SubstanceInfo(List<Color> colors, List<Structure> structures, List<Experiment> experiments, PreviousQuestion previousQuestion) {
        this.colors = colors;
        this.structures = structures;
        this.experiments = experiments;
        this.previousQuestion = previousQuestion;
    }

    public List<Color> getColors() {
        return colors;
    }

    public void setColors(List<Color> colors) {
        this.colors = colors;
    }

    public List<Structure> getStructures() {
        return structures;
    }

    public void setStructures(List<Structure> structures) {
        this.structures = structures;
    }

    public List<Experiment> getExperiments() {
        return experiments;
    }

    public void setExperiments(List<Experiment> experiments) {
        this.experiments = experiments;
    }

    public PreviousQuestion getPreviousQuestion() {
        return previousQuestion;
    }

    public void setPreviousQuestion(PreviousQuestion previousQuestion) {
        this.previousQuestion = previousQuestion;
    }
}
