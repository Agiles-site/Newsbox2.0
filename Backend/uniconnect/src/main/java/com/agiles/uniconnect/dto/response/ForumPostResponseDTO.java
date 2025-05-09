package com.agiles.uniconnect.dto.response;

import java.time.LocalDateTime;

public interface ForumPostResponseDTO {
    Long getId();
    String getTitle();
    String getContent();
    boolean getIsPinned();
    boolean getIsHot();
    int getLikeCount();
    int getCommentCount();
    int getViewCount();
    LocalDateTime getDate();
}
