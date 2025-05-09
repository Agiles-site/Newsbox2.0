package com.agiles.uniconnect.dto.request;

import java.time.LocalDateTime;

public record JobPostingRequestDTO(
        String companyName,
        String location,
        String employmentType,
        String salaryRange,
        LocalDateTime deadline,
        String description,
        String requirements
) {}
