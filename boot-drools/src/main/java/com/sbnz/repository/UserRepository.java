package com.sbnz.repository;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sbnz.model.*;
import com.sbnz.service.UserMapper;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class UserRepository {
    public ArrayList<User> getUsers() {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            ArrayList<UserEntity> usersEnt = objectMapper.readValue(new File("db/users.json"), UserEntityList.class).getUsers();
            return UserMapper.fromEntity(usersEnt);
        } catch (IOException e) {
            e.printStackTrace();
            return new ArrayList<User>();
        }
    }

    public User getUserByEmail(String email) {
        ArrayList<User> users = this.getUsers();

        for (User u : users){
            if (u.getEmail().equals(email)) return u;
        }

        return null;
    }


    public void addSubstanceToUser(String email, String substance){
        ArrayList<User> users = this.getUsers();
        for (User u : users){
            if (u.getEmail().equals(email)){
                u.getSubstances().add(substance);
            }
        }
        writeToFile(users);
    }


    public void addUser(AuthInfo ai) {
        ArrayList<User> users = this.getUsers();
        User user = new User(ai.getEmail(), ai.getPassword());
        users.add(user);
        writeToFile(users);

    }


    private void writeToFile(ArrayList<User> users) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            objectMapper.writeValue(new File("db/users.json"), new UserEntityList(UserMapper.toEntity(users)));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
