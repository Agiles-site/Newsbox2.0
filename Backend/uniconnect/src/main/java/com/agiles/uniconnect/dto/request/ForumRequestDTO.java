package com.agiles.uniconnect.dto.request;

import com.agiles.uniconnect.model.User;

public record ForumRequestDTO(
        String title,
        String content,
        boolean isPinned,
        boolean isHot,

        int likeCount,
        int commentCount,
        int viewCount,

        User authorId
) {
}
