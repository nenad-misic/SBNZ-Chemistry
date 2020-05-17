package com.sbnz.model;

public class Substance {
    private String name;
    private String image;
    private int boiling;
    private int melting;
    private String appearance;
    private String formula;

    public Substance(String name, String image, int boiling, int melting, String appearance, String formula) {
        this.name = name;
        this.image = image;
        this.boiling = boiling;
        this.melting = melting;
        this.appearance = appearance;
        this.formula = formula;
    }

    public Substance() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getBoiling() {
        return boiling;
    }

    public void setBoiling(int boiling) {
        this.boiling = boiling;
    }

    public int getMelting() {
        return melting;
    }

    public void setMelting(int melting) {
        this.melting = melting;
    }

    public String getAppearance() {
        return appearance;
    }

    public void setAppearance(String appearance) {
        this.appearance = appearance;
    }

    public String getFormula() {
        return formula;
    }

    public void setFormula(String formula) {
        this.formula = formula;
    }
}
