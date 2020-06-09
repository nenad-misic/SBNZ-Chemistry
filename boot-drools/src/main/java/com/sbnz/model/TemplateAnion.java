package com.sbnz.model;

public class TemplateAnion {
    private String name;
    private String allNeededExperiments;
    private boolean enabled;

    public TemplateAnion() {
    }

    public TemplateAnion(String name, String allNeededExperiments, boolean enabled) {
        this.name = name;
        this.allNeededExperiments = allNeededExperiments;
        this.enabled = enabled;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
