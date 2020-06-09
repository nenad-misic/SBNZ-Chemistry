package com.sbnz.model;

public class TemplateGroup {
    private int number;
    private String allNeededExperiments;
    private boolean enabled;

    public TemplateGroup() {
    }

    public TemplateGroup(int number, String allNeededExperiments, boolean enabled) {
        this.number = number;
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

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}
