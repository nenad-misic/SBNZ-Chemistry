package com.sbnz.model;

import java.util.List;

public class Config {
    private List<TemplateGroup> groups;
    private List<TemplateCation> cations;
    private List<TemplateAnion> anions;
    private List<TemplateSubstance> substances;
    private String userRules;

    public Config() {
    }

    public Config(List<TemplateGroup> groups, List<TemplateCation> cations, List<TemplateAnion> anions, List<TemplateSubstance> substances, String userRules) {
        this.groups = groups;
        this.cations = cations;
        this.anions = anions;
        this.substances = substances;
        this.userRules = userRules;
    }

    public List<TemplateGroup> getGroups() {
        return groups;
    }

    public void setGroups(List<TemplateGroup> groups) {
        this.groups = groups;
    }

    public List<TemplateCation> getCations() {
        return cations;
    }

    public void setCations(List<TemplateCation> cations) {
        this.cations = cations;
    }

    public List<TemplateAnion> getAnions() {
        return anions;
    }

    public void setAnions(List<TemplateAnion> anions) {
        this.anions = anions;
    }

    public List<TemplateSubstance> getSubstances() {
        return substances;
    }

    public void setSubstances(List<TemplateSubstance> substances) {
        this.substances = substances;
    }

    public String getUserRules() {
        return userRules;
    }

    public void setUserRules(String userRules) {
        this.userRules = userRules;
    }
}
