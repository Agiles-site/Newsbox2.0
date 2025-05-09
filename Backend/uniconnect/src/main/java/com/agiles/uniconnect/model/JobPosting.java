package com.agiles.uniconnect.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "job_posting")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class JobPosting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String companyName;
    private String location;
    private String employmentType;
    private String salaryRange;
    private LocalDateTime postedDate;
    private LocalDateTime deadline;

    private String description;

    private String requirements;
}
