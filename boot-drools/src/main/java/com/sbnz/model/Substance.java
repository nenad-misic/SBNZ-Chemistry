package com.sbnz.model;

public class Substance {
    private String name;
    private String image;
    private int boiling;
    private int melting;
    private String appearence;
    private String formula;

    public Substance(String name, String image, int boiling, int melting, String appearence, String formula) {
        this.name = name;
        this.image = image;
        this.boiling = boiling;
        this.melting = melting;
        this.appearence = appearence;
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

    public String getAppearence() {
        return appearence;
    }

    public void setAppearence(String appearence) {
        this.appearence = appearence;
    }

    public String getFormula() {
        return formula;
    }

    public void setFormula(String formula) {
        this.formula = formula;
    }
}
