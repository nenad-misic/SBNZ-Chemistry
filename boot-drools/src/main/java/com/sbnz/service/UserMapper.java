package com.sbnz.service;

import com.sbnz.model.User;
import com.sbnz.model.UserEntity;

import java.util.ArrayList;

public class UserMapper {
    public static User fromEntity(UserEntity u){
        return new User(u.getEmail(), u.getPassword(), u.getSubstances());
    }
    public static UserEntity toEntity(User u){
        return new UserEntity(u.getEmail(), u.getPassword(), u.getSubstances());
    }


    public static ArrayList<User> fromEntity(ArrayList<UserEntity> u){
        ArrayList<User> retVal = new ArrayList<>();
        for (UserEntity ue: u) {
            retVal.add(new User(ue.getEmail(), ue.getPassword(), ue.getSubstances()));
        }
        return retVal;

    }
    public static ArrayList<UserEntity> toEntity(ArrayList<User> ul){
        ArrayList<UserEntity> retVal = new ArrayList<>();
        for (User u: ul) {
            retVal.add(new UserEntity(u.getEmail(), u.getPassword(), u.getSubstances()));
        }
        return retVal;
    }
}
