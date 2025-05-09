package com.agiles.uniconnect.dto.response;

import java.time.LocalDateTime;

public interface AchievementResponseDTO {
    Long getId();
    String getTitle();
    String getCategory();
    LocalDateTime getDate();
    String getDescription();
}
