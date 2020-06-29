package com.sbnz.model;
import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;

@Role(Role.Type.EVENT)
@Expires("5m")
public class AuthInfoWithClientIP {
    private String email;
    private String password;
    private String ip;
    private boolean checked;

    public AuthInfoWithClientIP(String email, String password, String ip) {
        this.email = email;
        this.password = password;
        this.ip = ip;
        this.checked = false;
    }

    public AuthInfoWithClientIP() {
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

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public boolean isChecked() {
        return checked;
    }

    public void setChecked(boolean analysed) {
        this.checked = analysed;
    }
}

