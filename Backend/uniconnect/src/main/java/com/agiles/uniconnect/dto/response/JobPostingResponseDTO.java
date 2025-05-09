package com.agiles.uniconnect.dto.response;

import java.time.LocalDateTime;

public interface JobPostingResponseDTO {
    Long getId();
    String getTitle();
    String getCompanyName();
    String getLocation();
    String getEmploymentType();
    String getSalaryRange();
    LocalDateTime getPostedDate();
    LocalDateTime getDeadLine();
    String getDescription();
    String getRequirements();
}
