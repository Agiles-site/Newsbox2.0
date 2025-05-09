package com.agiles.uniconnect.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "user")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDateTime joinDate;
    private LocalDateTime lastLogin;

    @OneToMany
    private Set<StudyGroup> studyGroups;

    @OneToMany
    private Set<JobPosting> jobPostings;

    @OneToMany
    private Set<Tutoring> tutorings;

    @OneToMany
    private Set<ForumPost> forumPosts;

    @OneToMany
    private Set<Achievement> achievements;

    @OneToMany
    private Set<Role> roles;
}
