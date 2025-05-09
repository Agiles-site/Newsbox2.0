package com.agiles.uniconnect.dto.request;

import java.time.LocalDateTime;

public record NewsRequestDTO(
        String title,
        String content,
        String organizer,
        String author,

        LocalDateTime publishDate,
        int likeCount,
        int commentCount,
        boolean isEvent
) {
}
