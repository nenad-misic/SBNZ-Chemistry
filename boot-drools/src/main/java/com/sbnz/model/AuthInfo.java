package com.sbnz.model;

public class AuthInfo {

    private String email;
    private String password;
    private boolean captcha;

    public AuthInfo(String email, String password, boolean captcha) {
        this.email = email;
        this.password = password;
        this.captcha = captcha;
    }

    public AuthInfo() {
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

    public boolean isCaptcha() {
        return captcha;
    }

    public void setCaptcha(boolean captcha) {
        this.captcha = captcha;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
