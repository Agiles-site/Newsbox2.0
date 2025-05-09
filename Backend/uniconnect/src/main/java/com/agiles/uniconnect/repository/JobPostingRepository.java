package com.agiles.uniconnect.repository;

import com.agiles.uniconnect.model.JobPosting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobPostingRepository extends JpaRepository<JobPosting, Long> {
}
