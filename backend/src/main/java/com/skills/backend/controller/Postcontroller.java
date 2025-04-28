package com.skills.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skills.backend.services.Postservices;
import com.skills.backend.Models.PostModel;


@RestController
@RequestMapping("/api/v1/posts")
@CrossOrigin(origins = "*")
public class Postcontroller {

    @Autowired
    private Postservices postservices;

    @PostMapping("/save")
    public ResponseEntity<String> savePost(@RequestBody PostModel postmodel) {
        String postId = postservices.save(postmodel);
        return ResponseEntity.ok("Post saved with ID: " + postId);
    }

    @GetMapping("/getall")
    public List<PostModel> getAllPosts() {
        return postservices.getAllPosts();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePost(@PathVariable String id) {
        postservices.deletePost(id);
        return ResponseEntity.ok("Post deleted successfully");
    }

    @GetMapping("/getbyid/{postId}")
    public ResponseEntity<PostModel> getPostById(@PathVariable String postId) {
        PostModel post = postservices.getPostById(postId);
        if (post != null) {
            return ResponseEntity.ok(post);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/getbyuser/{userId}")
    public ResponseEntity<List<PostModel>> getPostsByUserId(@PathVariable String userId) {
        List<PostModel> posts = postservices.getPostsByUserId(userId);
        if (posts.isEmpty()) {
           return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(posts);
        }
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<String> updatePost(@PathVariable String id, @RequestBody PostModel updatedPost) {
        String result = postservices.updatePost(id, updatedPost);
        if (result.equals("Post updated successfully")) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
