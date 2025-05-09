package com.agiles.uniconnect.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "forum_post")
public class ForumPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;

    private boolean isPinned;
    private boolean isHot;

    private int likes;
    private int comments;
    private int views;

    @ManyToOne
    private User author;

    private LocalDateTime createdAt;
}
