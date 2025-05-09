package com.agiles.uniconnect.dto.response;

import java.time.LocalDateTime;

public interface StudyGroupResponseDTO {
    Long getId();

    String getCourseName();
    boolean getIsOnline();
    String getTitle();
    String getDescription();
    LocalDateTime getStartTime();
    LocalDateTime getEndTime();
    String getLocation();
    int getCurrentParticipants();
    int getTotalParticipants();
}
