package com.agiles.uniconnect.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tutoring")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Tutoring {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String subject;
    private String description;
    private String rate;
    private String availability;
    private int experienceYears;
    private String location;

    @ManyToOne
    private User tutor;
}
