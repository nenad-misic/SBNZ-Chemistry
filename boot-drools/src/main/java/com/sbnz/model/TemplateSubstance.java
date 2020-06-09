package com.sbnz.model;

public class TemplateSubstance {
    private String color;
    private String structure;
    private String cation;
    private String anion;
    private String name;
    private boolean enabled;

    public TemplateSubstance() {
    }

    public TemplateSubstance(String color, String structure, String cation, String anion, String name, boolean enabled) {
        this.color = color;
        this.structure = structure;
        this.cation = cation;
        this.anion = anion;
        this.name = name;
        this.enabled = enabled;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getStructure() {
        return structure;
    }

    public void setStructure(String structure) {
        this.structure = structure;
    }

    public String getCation() {
        return cation;
    }

    public void setCation(String cation) {
        this.cation = cation;
    }

    public String getAnion() {
        return anion;
    }

    public void setAnion(String anion) {
        this.anion = anion;
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
