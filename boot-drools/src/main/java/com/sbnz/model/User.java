package com.sbnz.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import sun.security.krb5.internal.Ticket;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

public class User implements UserDetails {
    private String email;
    private String password;
    private ArrayList<String> substances;

    public User() { super(); }

    public User(String email, String password) {
        this.email = email;
        this.password = password;
        this.substances = new ArrayList<>();
    }

    public User(String email, String password, ArrayList<String> substances) {
        this.email = email;
        this.password = password;
        this.substances = substances;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public ArrayList<String> getSubstances() {
        return substances;
    }

    public void setSubstances(ArrayList<String> substances) {
        this.substances = substances;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}

