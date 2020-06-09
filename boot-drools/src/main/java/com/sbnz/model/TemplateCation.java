package com.sbnz.model;

public class TemplateCation {
    private int number;
    private String name;
    private String allNeededExperiments;
    private boolean enabled;

    public TemplateCation() {
    }

    public TemplateCation(int number, String name, String allNeededExperiments, boolean enabled) {
        this.number = number;
        this.name = name;
        this.allNeededExperiments = allNeededExperiments;
        this.enabled = enabled;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getAllNeededExperiments() {
        return allNeededExperiments;
    }

    public void setAllNeededExperiments(String allNeededExperiments) {
        this.allNeededExperiments = allNeededExperiments;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}
