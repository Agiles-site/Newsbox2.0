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

    private String Organizer;
    private String author;

    private LocalDateTime publishDate;

    private int likes;
    private int comments;

    private boolean isEvent;
}
