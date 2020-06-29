package com.sbnz.model;

public class SecurityResponseDTO {
    private String message;
    private int code;

    public SecurityResponseDTO() {
    }

    public SecurityResponseDTO(String message, int code) {
        this.message = message;
        this.code = code;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }
}
