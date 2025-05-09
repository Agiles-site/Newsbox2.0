package com.agiles.uniconnect.dto.request;

import com.agiles.uniconnect.model.User;

public record TutoringRequestDTO(
        String title,
        String subject,
        String description,
        String rate,
        String availability,
        String experienceYears,
        String location,

        User tutorId
) {
}
