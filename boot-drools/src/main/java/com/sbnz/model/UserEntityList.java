package com.sbnz.model;

import java.util.ArrayList;

public class UserEntityList {
    private ArrayList<UserEntity> users;

    public UserEntityList() {
    }

    public UserEntityList(ArrayList<UserEntity> users) {
        this.users = users;
    }

    public ArrayList<UserEntity> getUsers() {
        return users;
    }

    public void setUsers(ArrayList<UserEntity> users) {
        this.users = users;
    }
}

