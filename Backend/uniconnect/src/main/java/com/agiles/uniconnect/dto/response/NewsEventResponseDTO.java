package com.agiles.uniconnect.dto.response;

import java.time.LocalDateTime;

public interface NewsEventResponseDTO {
    Long getId();

    String getTitle();
    String getContent();

    String getOrganizer();
    String getAuthor();

    LocalDateTime getPublishDate();

    int getLikeCount();
    int getCommentCount();

    boolean getIsEvent();
}
