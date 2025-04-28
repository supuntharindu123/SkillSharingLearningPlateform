package com.skills.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.skills.backend.Models.LikeModel;
import com.skills.backend.services.Likeservices;

@RestController
@RequestMapping("/api/v1/like")
public class Likecontroller {
    @Autowired
    private Likeservices likeservices;
    @PostMapping("/save")
    public ResponseEntity<String> saveLike(@RequestBody LikeModel likemodel) {
        try {
            String id = likeservices.save(likemodel);
            return ResponseEntity.status(201).body("Like saved successfully with ID: " + id);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
        }
    }

 
    @GetMapping("/count/{postId}")
    public ResponseEntity<Long> countLikes(@PathVariable String postId) {
        long count = likeservices.countLikesByPostId(postId);
        return ResponseEntity.ok(count);
   }


    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteLike(@RequestParam String userId, @RequestParam String postId) {
        try {
            likeservices.deleteLike(userId, postId);
            return ResponseEntity.ok("Like deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error deleting like: " + e.getMessage());
        }
    }

    
}
