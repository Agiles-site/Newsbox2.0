package com.agiles.uniconnect.dto.request;

import com.agiles.uniconnect.model.User;

public record StudyGroupRequestDTO(
        String courseName,
        boolean isOnline,
        String title,
        String description,
        String location,

        User organizerId
) {}
