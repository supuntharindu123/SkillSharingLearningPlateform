package com.skills.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skills.backend.Models.CommentModel;
import com.skills.backend.services.Commentservices;

@RestController
@RequestMapping("/api/comments")
@CrossOrigin(origins = "*")
public class Commentcontroller {

    @Autowired
    private Commentservices commentservices;

    @PostMapping("/save")
    public ResponseEntity<String> saveComment(@RequestBody CommentModel commentModel) {
        try {
            String commentText = commentservices.save(commentModel);
            return ResponseEntity.status(201).body("Comment saved successfully: " + commentText);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
        }
    }

   
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteComment(@PathVariable String id) {
        try {
            String result = commentservices.deleteComment(id);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
        }
    }

   
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateComment(@PathVariable String id, @RequestBody CommentModel updatedComment) {
        try {
            String result = commentservices.updateComment(id, updatedComment);
            if (result.equals("Comment updated successfully")) {
                return ResponseEntity.ok(result);
            } else {
                return ResponseEntity.status(404).body(result);
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
        }
    }
    
}
