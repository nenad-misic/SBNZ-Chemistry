package com.sbnz.controller;

import com.sbnz.Utility.HttpReqRespUtils;
import com.sbnz.model.*;
import com.sbnz.repository.UserRepository;
import com.sbnz.security.TokenUtils;
import com.sbnz.service.AnalysisService;
import com.sbnz.service.SecurityService;
import com.sbnz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@RestController
public class SecurityController {
    @Autowired
    SecurityService service;

    @Autowired
    UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;


    @Autowired
    TokenUtils tokenUtils;


    @Autowired
    private UserRepository userRepository;

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/gimme", method = RequestMethod.GET, produces = "application/json")
    public ArrayList<User> gimme() {
        return this.userRepository.getUsers();
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<AuthenticationDTO> login(@RequestBody AuthInfo authInfo) {
        try {
//            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
//                    authInfo.getEmail(), authInfo.getPassword());
//            Authentication authentication = authenticationManager.authenticate(token);
//            UserDetails details = (userService).loadUserByUsername(authInfo.getEmail());

            User user = this.userRepository.getUserByEmail(authInfo.getEmail());
            if (user==null || !user.getPassword().equals(authInfo.getPassword())){
                throw new Exception("Invalid credentials");
            }
            AuthInfoWithClientIP aiwcip = new AuthInfoWithClientIP(authInfo.getEmail(), authInfo.getPassword(), HttpReqRespUtils.getClientIpAddressIfServletRequestExist());
            return new ResponseEntity<>(new AuthenticationDTO(service.detectSuspiciousBehavior(aiwcip), tokenUtils.generateToken(user)), HttpStatus.OK);

        } catch (Exception ex) {
            AuthInfoWithClientIP aiwcip = new AuthInfoWithClientIP(authInfo.getEmail(), authInfo.getPassword(), HttpReqRespUtils.getClientIpAddressIfServletRequestExist());
            return new ResponseEntity<>(new AuthenticationDTO(service.detectSuspiciousBehavior(aiwcip), ("Invalid username/password")), HttpStatus.BAD_REQUEST);

        }
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<SecurityResponseDTO> register(@RequestBody AuthInfo authInfo) {
        try{
            userService.register(authInfo);
            return new ResponseEntity<>(new SecurityResponseDTO("Success", 200), HttpStatus.OK);

        }catch (Exception e) {
            return new ResponseEntity<>(new SecurityResponseDTO("Fail", 400), HttpStatus.BAD_REQUEST);
        }
    }

}
