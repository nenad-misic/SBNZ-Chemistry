package com.sbnz.model;

public class AuthenticationDTO {
    private SecurityResponseDTO srd;
    private String token;

    public AuthenticationDTO() {
    }

    public AuthenticationDTO(SecurityResponseDTO srd, String token) {
        this.srd = srd;
        this.token = token;
    }

    public SecurityResponseDTO getSrd() {
        return srd;
    }

    public void setSrd(SecurityResponseDTO srd) {
        this.srd = srd;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
