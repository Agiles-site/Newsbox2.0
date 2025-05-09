package com.agiles.uniconnect.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "forum_post")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ForumPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;

    private boolean isPinned;
    private boolean isHot;

    private int likeCount;
    private int commentCount;
    private int viewCount;

    @ManyToOne
    private User author;

    private LocalDateTime date;
}
