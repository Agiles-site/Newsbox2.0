package com.agiles.uniconnect.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "news_event")
public class NewsEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;

    private String organizer;
    private String author;

    private LocalDateTime publishDate;

    private int likeCount;
    private int commentCount;

    private boolean isEvent;
}
