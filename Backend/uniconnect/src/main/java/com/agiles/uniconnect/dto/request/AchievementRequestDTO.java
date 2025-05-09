package com.agiles.uniconnect.dto.request;

import com.agiles.uniconnect.model.User;

import java.time.LocalDateTime;

public record AchievementRequestDTO(

        String title,
        String category,
        LocalDateTime dateTime,

        String description,

        User achieveById
) {
}
