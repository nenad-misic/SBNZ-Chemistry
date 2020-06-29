package com.sbnz.model;

import java.util.ArrayList;

public class UserEntity {
    private String email;
    private String password;
    private ArrayList<String> substances;

    public UserEntity() {
    }

    public UserEntity(String email, String password, ArrayList<String> substances) {
        this.email = email;
        this.password = password;
        this.substances = substances;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ArrayList<String> getSubstances() {
        return substances;
    }

    public void setSubstances(ArrayList<String> substances) {
        this.substances = substances;
    }
}
