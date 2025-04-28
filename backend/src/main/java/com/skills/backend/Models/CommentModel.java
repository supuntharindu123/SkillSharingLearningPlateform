package com.skills.backend.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Document(collection = "comments")
public class CommentModel {

    @Id
    private String id;
    private String userId;
    private String postId;
    private String commentText;

    
}
