package com.skills.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skills.backend.Models.UserModel;
import com.skills.backend.services.Userservices;

@RestController
@RequestMapping("/api/v1/user")
public class usercontroller {

    @Autowired
    private Userservices userservices;
    @PostMapping("/save")
    public ResponseEntity<String> saveUser(@RequestBody UserModel usermodel) {
        String userName = userservices.save(usermodel);
        return ResponseEntity.ok("User saved with name: " + userName);
    }

    @GetMapping("/getuser/{userId}")
    public ResponseEntity<UserModel> getUserById(@PathVariable String userId) {
        UserModel user = userservices.getUserById(userId);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable String userId) {
        userservices.deleteUser(userId);
        return ResponseEntity.ok("User deleted successfully");
    }

    
}
